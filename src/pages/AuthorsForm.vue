<template>
  <q-page class="flex justify-center">
    <div class="full-width q-px-xl">
      <div class="row justify-between">
        <h1 class="q-my-lg">Página de criação de Autor</h1>
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
              v-model="name"
              label="Nome"
              hint="Nome do autor"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Por favor, digite algo']"
            />

            <q-input
              filled
              v-model="email"
              type="email"
              label="Email"
              hint="Email do autor"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Por favor, digite algo']"
            />

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

<script>
import { useStore } from 'vuex'

export default {
  name: 'AuthorsForm',
  // Tentar fazer no formato correto do options (mapGetters por ex)
  setup () {
    const store = useStore()
    return {
      store
    }
  },

  data () {
    return {
      name: '',
      email: ''
    }
  },

  methods: {
    async onSubmit () {
      try {
        await this.store.dispatch('authors/createAuthor', {
          name: this.name,
          email: this.email
        })
        this.onReset()
      } catch (error) {
        console.error('Erro: ', error)
      }
    },
    onReset () {
      this.name = ''
      this.email = ''
    }
  }
}
</script>
