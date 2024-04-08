<template>
  <q-page class="flex flex-center">
    <button @click="pegarItens">Pegar</button>
    <button @click="criarItens">Postar</button>
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

import instance from 'src/services/EventService'

function pegarItens () {
  instance.get('teste/')
    .then(res => {
      console.log('Deu certo graças a Deus!', res.data)
    })
    .catch(error => {
      console.error('Deu ruuuuuim!', error)
    })
}
function criarItens () {
  const postData = { testeee: 'teste' }

  instance.post('teste/', postData)
    .then(res => {
      console.log('Deu bom!', res.data)
    })
    .catch(error => {
      console.error('Deu ruuuuuim!', error)
    })
}
</script>
