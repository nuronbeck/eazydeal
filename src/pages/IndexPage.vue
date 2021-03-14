<template>
  <q-page>
    <AppMainCarousel />

    <div class="app-page-container">
      <div class="row flex items-center justify-between section-pt q-mb-xl">
        <div class="col">
          <div class="section-header-h4 text-h4">Строительные товары</div>
        </div>
        <div class="col-auto" v-if="$q.screen.gt.sm" >
          <q-btn flat color="secondary" label="Посмотреть все" />
        </div>
      </div>

      <div
        :class="`row col-sm-10 col-md-11 col-lg-10 col-xl-9
          ${$q.screen.gt.xs ? 'q-col-gutter-lg' : 'q-col-gutter-md' }`"
      >
        <div
          class="col-xs-12 col-sm-4 col-md-3"
          v-for="category in categories"
          :key="`HomePageCards__${category.id}`"
        >
          <ProductPackCard
            :imageUri="category.imageUri"
            :title="category.name"
            :items="category.subcategories"
          />
        </div>

        <div class="col-12">
          <q-btn
            label="Показать весь каталог товаров"
            class="q-ma-lg bg-white text-dark text-lowercase full-width"
            padding="md"
            unelevated
            outline
          />
        </div>
      </div>

      <div class="row flex items-center justify-between section-pt q-mb-xl">
        <div class="col">
          <div class="section-header-h4 text-h4">Строительные магазины</div>
        </div>
        <div class="col-auto" v-if="$q.screen.gt.sm" >
          <q-btn flat color="secondary" label="Посмотреть все магазины" />
        </div>
      </div>

      <ShopsCarousel />

    </div>

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import AppMainCarousel from '@components/root/AppMainCarousel'
import ProductPackCard from '@components/ProductPackCard'
import ShopsCarousel from '@components/IndexPage/ShopsCarousel'
// import { homePageCards } from '@helpers/mock'

export default {
  name: 'IndexPage',
  components: {
    AppMainCarousel,
    ProductPackCard,
    ShopsCarousel
  },
  computed: {
    ...mapGetters({
      isLoadingCategories: 'categories/isLoadingCategories',
      categories: 'categories/categories'
    })
  },
  data () {
    return {
      categoryItems: []
    }
  },
  created () {
    // this.categoryItems = [...homePageCards]
  },
  preFetch ({ store }) {
    return store.dispatch('categories/getCategories')
      .then(() => {
        console.log('PREFETCHED')
      })
  }
}
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: 100%;
}
</style>
