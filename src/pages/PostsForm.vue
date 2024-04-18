<template>
  <q-page class="flex justify-center">
    <div class="full-width q-px-xl">
      <div>
        <h1 class="q-my-lg">Página de criação de Post</h1>
      </div>

      <div class="q-my-lg">
        <div class="q-pa-md max-width-25rem">
          <q-form @submit="onSubmit" @reset="reset" class="q-col-gutter-md column"
          >
            <q-input
              v-model="formValues.title"
              label="Título"
              :maxlength="50"
              hint="Título da publicação"
              v-bind="inputProps"
            />

            <q-input
              v-model="formValues.smallDescription"
              label="Breve Descrição"
              hint="Breve Descrição que ficará visível no card"
              :maxlength="86"
              v-bind="inputProps"
            />

            <q-input
              v-model="formValues.content"
              label="Conteúdo do texto"
              hint="Conteúdo central da publicação"
              v-bind="inputProps"
            />

            <q-input
              v-model="formValues.category"
              label="Categoria"
              hint="Categoria da publicação"
              :maxlength="20"
              v-bind="inputProps"
            />

            <q-input
              v-model="formValues.publishingDate"
              type="date"
              label="Data de publicação"
              hint="Data de publicação"
              v-bind="inputProps"
            />

            <q-input
              v-model="formValues.lastAlterationDate"
              type="date"
              label="Data da última alteração"
              hint="Data da última alteração"
              v-bind="inputProps"
            />

            <q-select v-model="formValues.selectedAuthor" map-options emit-value option-value="id" :options="authors" option-label="name" label="Autores" />

            <q-input
              v-model="formValues.image"
              type="url"
              label="Imagem"
              hint="URL da imagem a ser exibida"
              v-bind="inputProps"
            />

            <div class="full-width">
              <q-btn label="Submit" type="submit" color="primary" />

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
import { computed, onMounted, ref } from 'vue'
import { inputProps } from 'src/utils'
import { Notify } from 'quasar'

defineOptions({ name: 'PostForm' })

const store = useStore()

const formValues = ref({
  title: '',
  smallDescription: '',
  content: '',
  category: '',
  publishingDate: '',
  lastAlterationDate: '',
  selectedAuthor: '',
  image: ''
})

const authors = computed(() => store.state.authors.authors)

onMounted(async () => {
  try {
    await store.dispatch('authors/fetchAuthors')

    Notify.create('Post criado com sucesso!')
  } catch (error) {
    Notify.create(error)
  }
})

async function onSubmit () {
  try {
    await store.dispatch('posts/createPost', formValues.value)

    reset()
  } catch (error) {
    Notify.create(error)
  }
}

function reset () {
  formValues.value.title = ''
  formValues.value.smallDescription = ''
  formValues.value.content = ''
  formValues.value.category = ''
  formValues.value.publishingDate = ''
  formValues.value.lastAlterationDate = ''
  formValues.value.selectedAuthor = ''
  formValues.value.image = ''
  formValues.value.authors = ''
}

</script>
