<template>
  <div class="app-post-card full-width row rounded-borders full-height q-pa-md q-mb-md shadow-up-8">
    <div class="app-post-card__image col-12 col-md-6">
      <q-badge class="app-post-card__category-tag absolute text-weight-bold text-white bg-red q-mt-md q-py-sm q-px-md">
        {{ props.category }}
      </q-badge>

      <q-img
        :src="props.image"
        :ratio="16/9"
      />
    </div>

    <div class="col-12 col-md-6 column justify-between">
        <!-- Title -->
        <div class="app-post-card__contents full-width column col-9 q-pa-sm">
          <div class="text-h4 app-post-card__contents full-width ellipsis col-3 bg-light-gray rounded-borders content-center">
            {{ props.title }}
          </div>

          <!-- Description -->
          <div class="app-post-card__contents full-width flex justify-center items-center col-7">
            {{ props.smallDescription }}
          </div>

          <div class="app-post-card__break-spaces row justify-between items-center col-2">
            <div class="app-post-card__break-spaces q-pl-md col-8">
              {{ props.selectedAuthor }}
            </div>

            <div class="q-pr-sm col-4">
              {{ props.publishingDate }}
            </div>
          </div>
        </div>

        <div class="row justify-between col-3 items-end">
          <q-btn icon="edit" rounded color="red q-ml-sm full-width" label="Editar o artigo" />

          <q-btn rounded color="primary full-width" label="Ler o artigo" :to="href" />
        </div>
      </div>
  </div>
</template>

<script setup>
const href = 'https://picsum.photos/'

defineOptions({ name: 'AppPostCard' })

const props = defineProps({
  title: String,
  smallDescription: String,
  category: String,
  publishingDate: String,
  selectedAuthor: String,
  image: String
})
</script>

<style lang="scss">
.app-post-card {
  &__break-spaces {
    white-space: break-spaces;
  }

  &__category-tag {
    z-index: 1;
    border-radius: 0 2rem 2rem 0;
  }

  &__contents {
    word-break: break-word;
  }

  &__image {
    border-radius: 5px;
  }
}

.text-light-gray {
  color: #ffffff80 !important;
}

.bg-light-gray {
  background: #ffffff80 !important;
}
</style>
