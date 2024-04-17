<template>
  <q-page class="flex justify-center">
    <div class="full-width q-px-xl">
      <div class="row justify-between">
        <h1 class="q-my-lg">Página de criação de Post</h1>
      </div>
      <div class="q-my-lg">
        <div class="q-pa-md" style="max-width: 25rem">
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-col-gutter-md column"
          >
            <q-input
              filled
              v-model="state.title"
              label="Título"
              :maxlength="50"
              hint="Título da publicação"
              lazy-rules
              :rules="[
                val => val && val.length > 0 || 'Por favor, digite algo',
                val => val.length < 50 || 'O limite máximo é de 50 caracteres',
              ]"
            />

            <q-input
              filled
              v-model="state.smallDescription"
              label="Breve Descrição"
              hint="Breve Descrição que ficará visível no card"
              lazy-rules
              :maxlength="86"
              :rules="[
                val => val && val.length > 0 || 'Por favor, digite algo',
                val => val.length < 87 || 'O limite máximo é de 86 caracteres',
              ]"
            />

            <q-input
              filled
              v-model="state.content"
              label="Conteúdo do texto"
              hint="Conteúdo central da publicação"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Por favor, digite algo']"
            />

            <q-input
              filled
              v-model="state.category"
              label="Categoria"
              hint="Categoria da publicação"
              :maxlength="20"
              lazy-rules
              :rules="[
                val => val && val.length > 0 || 'Por favor, digite algo',
                val => val.length < 20 || 'O limite máximo é de 20 caracteres',
              ]"
            />

            <q-input
              filled
              v-model="state.publishingDate"
              type="date"
              label="Data de publicação"
              hint="Data de publicação"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Por favor, digite algo']"
            />

            <q-input
              filled
              v-model="state.lastAlterationDate"
              type="date"
              label="Data da última alteração"
              hint="Data da última alteração"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Por favor, digite algo']"
            />

            <q-select v-model="state.selectedAuthor" :options="state.authors" label="Autores" />

            <q-input
              filled
              v-model="state.image"
              type="url"
              label="Imagem"
              hint="URL da imagem a ser exibida"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Por favor, digite algo']"
            />

            <!-- <q-input
              filled
              type="number"
              v-model="age"
              label="Your age *"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please type your age',
                val => val > 0 && val < 100 || 'Please type a real age'
              ]"
            /> -->

            <div class="full-width">
              <q-btn label="Submit" type="submit" color="primary"/>

              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useStore } from 'vuex'
import { onMounted, reactive } from 'vue'

defineOptions({ name: 'PostForm' })

const store = useStore()

const state = reactive({
  title: '',
  smallDescription: '',
  content: '',
  category: '',
  publishingDate: '',
  lastAlterationDate: '',
  selectedAuthor: '',
  image: '',
  authors: []
})

onMounted(async () => {
  try {
    await store.dispatch('authors/fetchAuthors')
    const authorsObject = store.state.authors.authors
    for (const authorObject in authorsObject) {
      if (Object.hasOwnProperty.call(authorsObject, authorObject)) {
        const author = authorsObject[authorObject]
        state.authors.push(author.name)
      }
    }
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
})

async function onSubmit () {
  try {
    await store.dispatch('posts/createPost', {
      title: state.title,
      smallDescription: state.smallDescription,
      content: state.content,
      category: state.category,
      publishingDate: state.publishingDate,
      lastAlterationDate: state.lastAlterationDate,
      selectedAuthor: state.selectedAuthor,
      image: state.image
    })
    // onReset()
  } catch (error) {
    console.error('Erro: ', error)
  }
}

function onReset () {
  state.title = ''
  state.smallDescription = ''
}

</script>
