import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null,
    evenPost: false
  }),
  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId) => state.posts.filter((post) => post.userId === authorId)
    },
    getEvenPostId: (state) => {
      return state.posts.filter((post, index) => post.id % 2 === 0)
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
        this.post = response.data;
        let response2 = await axios.get(`http://YOUR_APP_BASE_URL:3002/api/v1/healthcheck`);
        console.log(response2.data);

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