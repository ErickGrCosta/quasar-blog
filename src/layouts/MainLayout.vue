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
        <!-- Transformar em um looping -->
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/" label="Blog" />
        <q-route-tab to="/authors" label="Autores" />
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
.text-light-green {
  background-color: #dde1ce !important;
}

.bg-light-green {
  background-color: #dde1ce !important;
}

.text-hard-green {
  background-color: #2E5301 !important;
}

.bg-hard-green {
  background-color: #2E5301 !important;
}
</style>
