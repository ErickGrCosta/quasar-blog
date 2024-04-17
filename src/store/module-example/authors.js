import { api } from 'boot/axios'

const state = {
  authors: []
}

const getters = {
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
  getters,
  mutations,
  actions
}
