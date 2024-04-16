<template>
  <q-page class="page-post-list flex justify-center">
    <div class="page-post-list__table-list full-width q-px-xl">
      <div class="bg-info page-post-header row justify-between">
        <div class="text-h1 q-my-lg">Blog</div>
        <q-btn rounded color="primary" label="Novo Post" to="createAuthor" class="self-end"/>
      </div>
      <div class="q-my-lg">
        <q-list class="q-gutter-y-md q-mt-sm">
          <div class="page-post-list__card row rounded-borders bg-warning shadow-up-2">
            <div class="page-post-list__card__image col-12 col-md-6 bg-primary">
              <div class="page-post-list__category-tag">Category</div>
              <q-img
                :src="image"
                :ratio="16/9"
              />
            </div>
            <div class="col-12 col-md-6 column justify-between bg-secondary">
                <!-- Title -->
                <div class="page-post-list__card__texts bg-accent column col-9 q-pa-sm">
                  <div class="text-h4 page-post-list__card__texts-formation ellipsis col-3 bg-red">
                    Títulooooooooooooooooooooooooooooooooooooooooooooooooo
                  </div>
                  <!-- Description -->
                  <div class="page-post-list__card__texts-formation flex justify-center items-center col-7 q-pb-xl">
                    Breve descriçãoooooooooooooooooooooo
                  </div>
                  <!-- Data and Author -->
                  <div class="bg-positive row justify-between items-center col-2">
                    <div class="page-post-list__card__texts-formation q-pl-md text-h6 col-9">
                      Autooor
                    </div>
                    <div class="page-post-list__card__texts-formation q-pr-md col-3">
                      Dataa
                    </div>
                  </div>
                </div>
                <!-- Button -->
                <div class="bg-dark row justify-end">
                  <a :href="href" class="page-post-list__card__link">
                    <q-btn rounded color="primary" label="Ler o artigo" />
                  </a>
                </div>
              </div>
          </div>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const href = 'https://picsum.photos/'
const image = 'https://picsum.photos/600/400'

</script>

<style lang="scss">
.page-post-header {
  width: 90%;
}

.page-post-list {
  width: 100%;
  margin-left: 5%;

  &__category-tag {
    font-size: 0.8rem;
    font-weight: bold;
    color: white;
    background: red;
    margin-top: 1rem;
    padding: 0.4rem 1.1rem 0.4rem 0.8rem;
    z-index: 1;
    position: absolute;
    border-radius: 0 2rem 2rem 0;
  }

  &__card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px 15px 15px 15px;
    margin-bottom: 20px;
    text-overflow: ellipsis;
    height: 100%;
    width: 90%;

    &__texts {
      max-width: 100%;
      word-break: break-all;
    }

    &__texts-formation {
      word-break: break-word;
      max-width: 100%;
    }

    &__link {
        text-decoration: none;
        color: inherit;
    }

    &__image {
        img {
          height: auto;
          border-radius: 5px;
        }
    }
  }
}

</style>
