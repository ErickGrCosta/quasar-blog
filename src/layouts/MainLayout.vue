<template>
  <q-layout class="bg-ev-light-green" view="hhh LpR lff">
    <q-header elevated class="bg-ev-hard-green text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Engenheiro Verde - Blog
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="justify">
        <!-- Transformar em um looping -->
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/" label="Blog" />
        <q-route-tab to="/page4" label="Serviços" />
        <q-route-tab to="/page5" label="Produtos" />
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

</script>

<style lang="scss">
.bg-ev-light-green {
  background-color: #dde1ce;
}

.bg-ev-hard-green {
  background-color: #2E5301;
}

</style>
