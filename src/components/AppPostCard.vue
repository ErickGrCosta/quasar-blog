<template>
  <div class="app-post-card row rounded-borders full-height q-pa-md q-mb-md shadow-up-2">
    <div class="app-post-card__image col-12 col-md-6">
      <div class="app-post-card__category-tag absolute text-weight-bold text-white bg-red">
        Category
      </div>

      <q-img
        :src="image"
        :ratio="16/9"
      />
    </div>
    <div class="col-12 col-md-6 column justify-between">
        <!-- Title -->
        <div class="app-post-card__contents column col-9 q-pa-sm">
          <div class="text-h4 app-post-card__contents ellipsis col-3 bg-ev-light-gray rounded-borders content-center">
            Títulooooooooooooooooooooooooooooooooooooooooooooooooo
          </div>
          <!-- Description -->
          <div class="app-post-card__contents flex justify-center items-center col-7">
            Breve descriçãoooooooooooooooooooooo
          </div>
          <!-- Data and Author -->
          <div class=" row justify-between items-center col-2">
            <div class="app-post-card__contents q-pl-md text-h6 col-9">
              Erick Garcia Costaaaaa
            </div>

            <div class="app-post-card__contents q-pr-sm col-3">
              06/04/2024
            </div>
          </div>
        </div>
        <!-- Button -->
        <div class="row justify-between col-3 items-end">
          <q-btn icon="edit" rounded color="red q-ml-sm full-width" label="Editar o artigo"/>
          <q-btn rounded color="primary full-width" label="Ler o artigo" :to="href"/>
        </div>

      </div>
  </div>
</template>

<script setup>
const href = 'https://picsum.photos/'
const image = 'https://picsum.photos/600/400'

defineOptions({ name: 'AppPostCard' })

</script>

<style lang="scss">
.app-post-card {
  width: 100%;

  &__category-tag {
    margin-top: 1rem;
    padding: 0.4rem 1.1rem 0.4rem 0.8rem;
    z-index: 1;
    border-radius: 0 2rem 2rem 0;
  }

  &__contents {
    max-width: 100%;
    word-break: break-word;
  }

  &__image {
    border-radius: 5px;
  }

}

.bg-ev-light-gray {
  background-color: #ffffff80;
}
</style>
