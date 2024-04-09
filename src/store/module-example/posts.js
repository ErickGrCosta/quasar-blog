import { api } from '../../../src/boot/axios'

const state = {
  posts: []
}

const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  },
  addPost (state, post) {
    state.posts.push(post)
  },
  updatePost (state, updatedPost) {
    const index = state.posts.findIndex(post => post.id === updatedPost.id)
    if (index !== -1) {
      state.posts.splice(index, 1, updatedPost)
    }
  },
  removePost (state, postId) {
    state.posts = state.posts.filter(post => post.id !== postId)
  }
}

const actions = {
  async fetchPosts ({ commit }) {
    try {
      const response = await api.get('posts')
      commit('setPosts', response.data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  },
  async createPost ({ commit }, postData) {
    try {
      const response = await api.post('posts', postData)
      commit('addPost', response.data)
    } catch (error) {
      console.error('Error creating post:', error)
    }
  },
  async updatePost ({ commit }, { postId, updatedPostData }) {
    try {
      const response = await api.put(`posts/${postId}`, updatedPostData)
      commit('updatePost', { postId, updatedPostData: response.data })
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

const getters = {
  getPosts: state => state.posts,
  getPostById: state => id => state.posts.find(post => post.id === id)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
