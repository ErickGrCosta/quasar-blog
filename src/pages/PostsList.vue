<template>
  <q-page class="flex justify-center">
    <div class="full-width q-px-xl">
      <div class="row justify-between">
        <div class="text-h1 q-mt-md">
          Blog
        </div>

        <div class="self-end">
          <q-btn rounded color="primary q-mr-sm" label="Novo Post" :to="{ name: 'PostCreate' }" />

          <q-btn rounded color="primary" label="Novo Autor" :to="{ name: 'AuthorsCreate' }" />
        </div>
      </div>
      <div class="q-my-lg">
        <div class="row q-mt-sm">
          <div v-for="post in store.state.posts.posts" :key="post.id" class="col-12 col-md-6 q-pr-sm q-mb-md">
            <app-post-card
              :title="post.title"
              :small-description="post.smallDescription"
              :category="post.category"
              :publishing-date="post.publishingDate"
              :selected-author="post.selectedAuthor"
              :image="post.image"
            />
          </div>
          <!-- Colocar no app card o col-6 -->
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import AppPostCard from '../components/AppPostCard.vue'
import { useStore } from 'vuex'
import { onBeforeMount } from 'vue'

defineOptions({ name: 'PostsList' })

const store = useStore()

onBeforeMount(async () => {
  try {
    await store.dispatch('posts/fetchPosts')
    const posts = store.state.posts.posts
    console.log(posts)
    for (const post of posts) {
      console.log(post)
    }
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
})
</script>
