<template>
  <div class="app-post-card full-width row rounded-borders full-height q-pa-md q-mb-md shadow-up-8">
    <div class="app-post-card__image col-12 col-md-6">
      <q-badge class="app-post-card__category absolute text-weight-bold text-white bg-red q-mt-md q-py-sm q-px-md">
        {{ props.category }}
      </q-badge>

      <q-img
        :src="props.image" :ratio="16/9"
      />
    </div>

    <div class="col-12 col-md-6 column justify-between">
        <!-- Title -->
        <div class="app-post-card__content full-width column col-9 q-pa-sm">
          <div class="full-width col-3 bg-light-gray rounded-borders content-center">
            <h4 class="ellipsis"> {{ props.title }} </h4>
          </div>

          <!-- Description -->
          <div class="app-post-card__content full-width flex justify-center items-center col-7">
            {{ props.smallDescription }}
          </div>

          <div class="app-post-card break-spaces row justify-between items-center col-2">
            <div class="app-post-card break-spaces q-pl-md col-8">
              {{ props.selectedAuthor }}
            </div>

            <div class="q-pr-sm col-4">
              {{ props.publishingDate }}
            </div>
          </div>
        </div>

        <div class="row justify-between col-3 items-end">
          <q-btn icon="edit" rounded color="red q-ml-sm full-width" label="Editar o artigo" />

          <q-btn rounded color="primary full-width" label="Ler o artigo" to="" />
        </div>
      </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'AppPostCard' })

const props = defineProps({
  title: {
    type: String,
    default: ''
  },

  smallDescription: {
    type: String,
    default: ''
  },

  category: {
    type: String,
    default: ''
  },

  publishingDate: {
    type: String,
    default: ''
  },

  selectedAuthor: {
    type: String,
    default: ''
  },

  image: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss">
.break-spaces {
  white-space: break-spaces;
}

.app-post-card {
  &__category {
    z-index: 1;
    border-radius: 0 2rem 2rem 0;
  }

  &__content {
    word-break: break-word;
  }

  &__image {
    border-radius: 5px;
  }
}
</style>
