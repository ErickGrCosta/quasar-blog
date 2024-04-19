<template>
  <q-page class="flex justify-center">
    <div class="full-width q-px-xl">
      <div class="row justify-between">
          <h1>Blog</h1>
        <div class="self-end">
          <q-btn rounded color="primary q-mr-sm" label="Novo Post" :to="{ name: 'PostCreate' }" />

          <q-btn rounded color="primary" label="Novo Autor" :to="{ name: 'AuthorsCreate' }" />
        </div>
      </div>

      <div class="q-my-lg">
        <div class="row q-mt-sm q-col-gutter-md">
          <div v-for="post in posts" :key="post.id" class="col-12 col-md-6 q-pr-sm q-mb-md">
            <app-post-card v-bind="post" />
          </div>

        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import AppPostCard from '../components/AppPostCard.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import { Notify } from 'quasar'

defineOptions({ name: 'PostsList' })

const store = useStore()

const posts = computed(() => store.state.posts.posts)

onMounted(async () => {
  try {
    await store.dispatch('posts/fetchPosts')
  } catch (error) {
    Notify.create(error)
  }
})
</script>

<style lang="scss">
h1 {
  line-height: 0rem
}
</style>
