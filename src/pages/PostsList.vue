<template>
  <q-page class="flex justify-center">
    <div class="full-width q-px-xl">
      <div class="row justify-between">
        <div class="text-h1 q-mt-md">
          Blog
        </div>

        <div class="self-end">
          <q-btn rounded color="primary q-mr-sm" label="Novo Post" :to="{ name: 'CreatePost' }"/>
          <q-btn rounded color="primary" label="Novo Author" :to="{ name: 'CreateAuthor' }"/>
        </div>
      </div>
      <div class="q-my-lg">
        <div class="row q-gutter-y-md q-mt-sm">
          <app-post-card />

          <!-- Colocar no app card o col-6 -->
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>

import AppPostCard from '../components/AppPostCard.vue'

defineOptions({ name: 'PostsList' })

</script>
