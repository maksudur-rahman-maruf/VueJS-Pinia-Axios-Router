<script setup>
import { useLogger } from "vue-logger-plugin";
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { usePostStore } from "../stores/post";
// import { useStatementStore } from '../stores/statement'

// const { fetchStatements } = useStatementStore()

const { posts, loading, error } = storeToRefs(usePostStore());
const { fetchPosts, evenPostId } = usePostStore();

fetchPosts();
// fetchStatements()

// Following code for the Logging purpose
const testObject = {
  name: "test",
  value: "this is a test object",
};

const log = useLogger();
log.debug("Setting up MyComponent...", testObject);
log.info("Setting up MyComponent...", testObject);
log.warn("Setting up MyComponent...", testObject);
log.error("Setting up MyComponent...", testObject);
log.log("Setting up MyComponent...", testObject);
log.apply({ level: 'error' })
log.warn("This is not logged now")


</script>

<template>
  <main>
    <mq-responsive target="md+" tag="div">
    This will render on "md" and above screens
    </mq-responsive>
    
    <button type="button" class="btn btn-primary" @click="evenPostId">Even PostId</button>
    
    <p v-if="loading">Loading posts...</p>
    <p v-if="error">{{ error.message }}</p>
    <p v-if="posts" v-for="post in posts" :key="post.id">
      <RouterLink :to="`/post/${post.id}`"> {{ post.id }} {{ post.title }} </RouterLink>
      <p>{{ post.body }}</p>
    </p>
  </main>
</template>

<style scoped>
button {
  margin-top: 7px;
}
</style>