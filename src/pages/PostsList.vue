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
          <div class="col-12 col-md-6 q-pr-sm q-mb-md">
            <app-post-card />
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
import { onMounted } from 'vue'

defineOptions({ name: 'PostsList' })

const store = useStore()

onMounted(async () => {
  try {
    await store.dispatch('posts/fetchPosts')
    // const authorsObject = store.state.authors.authors
    // for (const authorObject in authorsObject) {
    //   if (Object.hasOwnProperty.call(authorsObject, authorObject)) {
    //     const author = authorsObject[authorObject]
    //     state.authors.push(author.name)
    //   }
    // }
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
})
</script>
