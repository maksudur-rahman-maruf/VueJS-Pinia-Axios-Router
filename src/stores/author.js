import { defineStore } from 'pinia'
import { usePostStore } from './post'
import axios from 'axios'

export const useAuthorStore = defineStore({
  id: 'author',
  state: () => ({
    authors: []
  }),
  getters: {
    getPostAuthor: (state) => {
      const postStore = usePostStore()
      return state.authors.find((author) => author.id === postStore.post.userId)
    }
  },
  actions: {
    async fetchAuthors() {
         let response = await axios.get('https://jsonplaceholder.typicode.com/users')
         this.authors = response.data
    //   this.authors = await fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    }
  }
})