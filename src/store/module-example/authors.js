import { api } from 'boot/axios';
// Tentar tirar a repetição desses códigos, colocando dentro de um helpers por exemplo. Ver tudo o que tem de semelhante entre o authors e posts.
// Deixar mais genérico também e ver alguma forma de tratar os erros (esse seria um plus).
const state = {
  authors: []
}

const getters = {
  getAuthors: state => state.authors,

  getAuthorById: state => id => state.authors.find(author => author.id === id)
}

const mutations = {
  setAuthors (state, authors) {
    state.authors = authors
  },

  setAuthor (state, author) {
    state.authors.push(author)
  },
  
  updateAuthor (state, updatedAuthor) {
    const index = state.authors.findIndex(({ id }) => id === updatedAuthor.id)

    if (~index) state.authors[index] = updatedAuthor
  },

  removeAuthor (state, authorId) {
    state.authors = state.authors.filter(({ id }) => id !== authorId)
  }
}

const actions = {
  async fetchAuthors ({ commit }) {
    try {
      const { data } = await api.get('authors')

      commit('setAuthors', data)
    } catch (error) {
      console.error('Error fetching authors:', error)
    }
  },

  async createAuthor ({ commit }, authorData) {
    try {
      const { data } = await api.post('authors', authorData)

      commit('setAuthor', data)
    } catch (error) {
      console.error('Error creating author:', error)
    }
  },

  async updateAuthor ({ commit }, { authorId, payload }) {
    try {
      const { data } = await api.put(`authors/${authorId}`, payload)

      commit('updateAuthor', { authorId, payload: data })
    } catch (error) {
      console.error('Error updating author:', error)
    }
  },

  async deleteAuthor ({ commit }, authorId) {
    try {
      await api.delete(`authors/${authorId}`)
      commit('removeAuthor', authorId)
    } catch (error) {
      console.error('Error deleting author:', error)
    }
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
