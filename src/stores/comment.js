import { defineStore } from 'pinia'
import { usePostStore } from './post'
import axios from 'axios'

export const useCommentStore = defineStore({
  id: 'comment',
  state: () => ({
    comments: []
  }),
  getters: {
    getPostComments: (state) => {
      const postSore = usePostStore()
      return state.comments.filter((post) => post.postId === postSore.post.id)
    }
  },
  actions: {
    async fetchComments() {
         let response = await axios.get('https://jsonplaceholder.typicode.com/comments')
         this.comments = response.data
    //   this.comments = await fetch('https://jsonplaceholder.typicode.com/comments')
    //   .then((response) => response.json())
    }
  }
})