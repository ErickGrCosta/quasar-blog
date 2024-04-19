<template>
  <q-page>
    <div class="full-width q-px-xl">
      <div class="q-my-lg text-center">
        <h1>Listagem de autores</h1>
        <q-btn rounded color="primary" label="Novo Autor" :to="{ name: 'AuthorsCreate' }" />
      </div>

      <div class="row justify-center q-pb-sm">
        <q-list bordered padding>
          <q-item tag="label" v-ripple v-for="(author, index) in this.authors" :key="index" >
            <q-item-section>
              <q-item-label>{{ author.name }}</q-item-label>

              <q-item-label caption>
                {{ author.email }}
              </q-item-label>

            </q-item-section>

            <q-item-section side top>
              <q-btn icon="edit" rounded color="blue q-ml-sm full-width" label="Editar o autor" :to="{ name: 'AuthorsEdit', params: { id: author.id } }" />
              <q-btn @click="confirm = true" icon="edit" rounded color="red q-ml-sm full-width" label="Deletar o autor" />
            </q-item-section>

            <q-dialog v-model="confirm" persistent>
              <q-card>
                <q-card-section>
                  <span class="q-ml-sm">Tem certeza que quer deletar o autor?</span>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn flat label="Cancelar" color="primary" v-close-popup />
                  <q-btn flat label="Confirmar" color="primary" v-close-popup @click="this.delete(author.id)"/>
                </q-card-actions>
              </q-card>
            </q-dialog>

          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Notify } from 'quasar'

export default {
  name: 'AuthorsList',

  data () {
    return {
      values: {
        id: '',
        name: '',
        email: ''
      },
      confirm: false
    }
  },

  async created () {
    await this.fetchAuthors()
  },

  methods: {
    ...mapGetters('authors', ['getAuthorById']),
    ...mapActions('authors', ['createAuthor', 'fetchAuthors', 'deleteAuthor']),

    retrieveAuthorById (authorId) {
      const getAuthorByIdFn = this.getAuthorById()
      const { name, email } = getAuthorByIdFn(authorId)
      this.values.name = name
      this.values.email = email
    },

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
    },

    delete (authorId) {
      this.deleteAuthor(authorId)
    }
  },
  computed: {
    authors () {
      return this.$store.state.authors.authors
    }
  }

}
</script>
