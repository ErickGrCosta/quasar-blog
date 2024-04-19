<template>
  <q-page class="flex justify-center">
    <div class="full-width q-px-xl">
      <h1 class="q-my-lg">Página de criação de Autor</h1>

      <div class="q-my-lg">
        <div class="q-pa-md max-width-25rem">
          <q-form @submit="onSubmit" @reset="reset" class="q-col-gutter-md column" >
            <q-input v-model="values.name" label="Nome" hint="Nome completo do autor" v-bind="rulesProps" />

            <q-input v-model="values.email" type="email" label="Email" hint="Melhor email do autor" v-bind="rulesProps" />

            <div class="full-width">
              <q-btn label="Enviar" type="submit" color="primary" />

              <q-btn label="Resetar" type="reset" color="primary" flat class="q-ml-sm" />

              <q-btn @click="confirm = true" v-if="!this.isCreateMode" label="Deletar" color="red" class="q-ml-sm" />

              <q-dialog v-model="confirm" persistent>
                <q-card>
                  <q-card-section>
                    <span>Tem certeza que quer deletar o autor?</span>
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn flat label="Cancelar" color="primary" v-close-popup />

                    <q-btn flat label="Confirmar" color="primary" v-close-popup @click="this.delete(this.values.id)"/>
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { rulesProps } from 'src/utils'
import { Notify } from 'quasar'

export default {
  name: 'AuthorsForm',

  data () {
    return {
      values: {
        id: '',
        name: '',
        email: ''
      },
      isCreateMode: true,
      confirm: false
    }
  },

  async created () {
    this.values.id = this.$route.params.id
    this.isCreateMode = this.$route.name !== 'AuthorsEdit'
    await this.fetchAuthors()
    if (this.values.id) this.retrieveAuthorById(this.values.id)
  },

  methods: {
    ...mapGetters('authors', ['getAuthorById']),
    ...mapActions('authors', ['createAuthor', 'fetchAuthors', 'updateAuthor', 'deleteAuthor']),

    retrieveAuthorById (authorId) {
      const getAuthorByIdFn = this.getAuthorById()
      const { name, email } = getAuthorByIdFn(authorId)
      this.values.name = name
      this.values.email = email
    },

    onSubmit () {
      try {
        if (this.isCreateMode) {
          this.createAuthor({
            name: this.values.name,
            email: this.values.email
          })
        } else {
          this.updateAuthor({
            authorId: this.values.id,
            payload: {
              name: this.values.name,
              email: this.values.email
            }
          })
        }

        this.reset()
        Notify.create('Autor criado com sucesso!')
      } catch (error) {
        Notify.create(error)
      }
    },

    reset () {
      this.values.name = ''
      this.values.email = ''
    },

    delete (authorId) {
      this.deleteAuthor(authorId)
      this.$router.push({ name: 'AuthorsList' })
    }
  },

  computed: {
    rulesProps () {
      return rulesProps
    }
  }
}
</script>
