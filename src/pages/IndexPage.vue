<template>
  <q-page class="flex flex-center">
    <button @click="getItens">Get</button>
    <button @click="createItens">Post</button>
    <button @click="updateItem('b646')">Update</button>
    <button @click="deleteItem('38b2')">Delete</button>
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    {{ totalOfAuthors  }}
  </q-page>
</template>

<script setup>
import { useStore } from 'vuex'
import { onMounted, computed, reactive } from 'vue'

defineOptions({
  name: 'IndexPage'
})

const state = reactive({
  authors: ''
})

const store = useStore()

const totalOfAuthors = computed(() => {
  return store.state.authors
})

onMounted(() => getItens())

async function getItens () {
  try {
    console.log(store)
    await store.dispatch('authors/fetchAuthors')
    state.authors = store.state.authors
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}

async function createItens () {
  try {
    await store.dispatch('authors/createAuthor', { newTest: 'teste2' })
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}

async function updateItem (id) {
  try {
    await store.dispatch('authors/updateAuthor', {
      authorId: 'b646',
      payload: {
        newTest: 'Mudei de novo',
        newItem: 'Mudei'
      }
    })
  } catch (error) {
    console.error('Erro:', error)
  }
}

async function deleteItem (id) {
  try {
    await store.dispatch('authors/deleteAuthor', id)
  } catch (error) {
    console.error('Erro:', error)
  }
}

</script>
