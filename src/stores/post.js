import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null
  }),
  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId) => state.posts.filter((post) => post.userId === authorId)
    }
  }, 
  actions: {
    async fetchPosts() {
      this.posts = []
      this.loading = true
      try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.posts =  response.data
        // this.posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        // .then((response) => response.json()) 
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchPost(id) {
      this.post = null
      this.loading = true
      try {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        this.post = response.data
        // this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // .then((response) => response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})