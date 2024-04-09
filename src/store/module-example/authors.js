import { api } from '../../../src/boot/axios'
// Tentar tirar a repetição desses códigos, colocando dentro de um helpers por exemplo. Ver tudo o que tem de semelhante entre o authors e posts.
const state = {
  authors: []
}

const mutations = {
  setAuthors (state, authors) {
    state.authors = authors
  },
  addAuthor (state, author) {
    state.authors.push(author)
  },
  removeAuthor (state, authorId) {
    state.authors = state.authors.filter(author => author.id !== authorId)
  }
}

const actions = {
  async fetchAuthors ({ commit }) {
    try {
      const response = await api.get('authors')
      commit('setAuthors', response.data)
    } catch (error) {
      console.error('Error fetching authors:', error)
    }
  },
  async createAuthor ({ commit }, authorData) {
    try {
      const response = await api.post('authors', authorData)
      commit('addAuthor', response.data)
    } catch (error) {
      console.error('Error creating author:', error)
    }
  },
  async updateAuthor ({ commit }, { authorId, updatedAuthorData }) {
    try {
      const response = await api.put(`authors/${authorId}`, updatedAuthorData)
      commit('updateAuthor', { authorId, updatedAuthorData: response.data })
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

const getters = {
  getAuthors: state => state.authors
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
