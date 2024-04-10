import { api } from 'boot/axios'

const state = {
  posts: []
}

const getters = {
  getPosts: state => state.posts,

  getPostById: state => id => state.posts.find(post => post.id === id)
}

const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  },

  setPost (state, post) {
    state.posts.push(post)
  },

  updatePost (state, updatedPost) {
    const index = state.posts.findIndex(({ id }) => id === updatedPost.id)

    if (~index) state.posts[index] = updatedPost
  },

  removePost (state, postId) {
    state.posts = state.posts.filter(({ id }) => id !== postId)
  }
}

const actions = {
  async fetchPosts ({ commit }) {
    try {
      const { data } = await api.get('posts')

      commit('setPosts', data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  },

  async createPost ({ commit }, postData) {
    try {
      const { data } = await api.post('posts', postData)

      commit('setPost', data)
    } catch (error) {
      console.error('Error creating post:', error)
    }
  },

  async updatePost ({ commit }, { postId, updatedPostData }) {
    try {
      const { data } = await api.put(`posts/${postId}`, updatedPostData)

      commit('updatePost', { postId, updatedPostData: data })
    } catch (error) {
      console.error('Error updating post:', error)
    }
  },

  async deletePost ({ commit }, postId) {
    try {
      await api.delete(`posts/${postId}`)
      commit('removePost', postId)
    } catch (error) {
      console.error('Error deleting post:', error)
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
