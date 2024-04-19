<template>
  <q-layout class="bg-light-green" view="hhh LpR lff">
    <q-header elevated class="bg-hard-green text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Engenheiro Verde - Blog
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="justify">
        <q-route-tab  v-for="(route, index) in routes" :key="index" :to="route.path" :label="route.label" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
defineOptions({
  name: 'MainLayout'
})

const routes = [
  {
    path: '/',
    label: 'Home'
  },
  {
    path: '/authors',
    label: 'Autores'
  }
]
</script>
