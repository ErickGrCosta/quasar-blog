<template>
  <q-page class="flex justify-center">
    <div class="full-width q-px-xl">
      <div>
        <h1 class="q-my-lg">Página de criação de Autor</h1>
      </div>

      <div class="q-my-lg">
        <div class="q-pa-md max-width-25rem">
          <q-form @submit="onSubmit" @reset="reset" class="q-col-gutter-md column"
          >
            <q-input
              v-model="values.name" label="Nome" hint="Nome completo do autor" v-bind="inputProps"
            />

            <q-input
              v-model="values.email" type="email" label="Email" hint="Melhor email do autor" v-bind="inputProps"
            />

            <div class="full-width">
              <q-btn label="Enviar" type="submit" color="primary" />

              <q-btn label="Resetar" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import { inputProps } from 'src/utils'
import { Notify } from 'quasar'

export default {

  name: 'AuthorsForm',

  data () {
    return {
      values: {
        name: '',
        email: ''
      }
    }
  },

  methods: {
    ...mapActions('authors', ['createAuthor']),

    onSubmit () {
      try {
        this.createAuthor({
          name: this.values.name,
          email: this.values.email
        })

        Notify.create('Autor criado com sucesso!')
        this.reset()
      } catch (error) {
        Notify.create(error)
      }
    },

    reset () {
      this.values.name = ''
      this.values.email = ''
    }
  },

  computed: {
    inputProps () {
      return inputProps
    }
  }
}
</script>
