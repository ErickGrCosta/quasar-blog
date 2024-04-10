<template>
  <q-page class="flex flex-center">
    <button @click="getItens">Get</button>
    <button @click="createItens">Post</button>
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
})

import { api } from 'src/boot/axios'
import { mapActions, mapState } from 'vuex'

function getItens () {
  api.get('authors')
    .then(res => {
      console.log('Deu certo graças a Deus!', res.data)
    })
    .catch(error => {
      console.error('Deu ruuuuuim!', error)
    })
}

function createItens () {
  const postData = { post: 'hey there' }

  api.post('posts', postData)
    .then(res => {
      console.log('Deu bom!', res.data)
    })
    .catch(error => {
      console.error('Deu ruuuuuim!', error)
    })
}
</script>
