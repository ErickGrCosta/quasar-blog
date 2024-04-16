<template>
  <q-layout view="hhh LpR lff">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Engenheiro Verde - Blog
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="justify">
        <q-route-tab to="/page1" label="Home" />
        <q-route-tab to="/page2" label="Sobre nós" />
        <q-route-tab to="" label="Blog" />
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
          <div>Title</div>
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
</style>
