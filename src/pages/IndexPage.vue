<template>
  <q-page>
    <AppMainCarousel />

    <div class="q-pt-md q-pb-md" v-if="categoryItems">
      <div class="row justify-center">
        <div
          class="row q-pt-lg q-pb-md q-px-sm items-center
            justify-between col-sm-10 col-md-11 col-lg-10 col-xl-9"
        >
          <div class="text-h4">Строительные товары</div>
          <q-btn flat color="secondary" label="Посмотреть все" />
        </div>
        <div class="row col-sm-10 col-md-11 col-lg-10 col-xl-9">
          <div
            class="col-xs-12 col-sm-6 col-md-3"
            style="padding: 10px; box-sizing: border-box;"
            v-for="category in categoryItems"
            :key="`HomePageCards__${category.id}`"
          >
            <ProductPackCard
              :imageUri="category.imageUri"
              :title="category.category"
              :items="category.subcategories"
            />
          </div>

          <q-btn
            label="Показать весь каталог товаров"
            class="q-ma-lg bg-white text-dark text-lowercase full-width"
            padding="md"
          />
        </div>
      </div>
    </div>

    <div class="q-pt-md q-pb-md">
      <div class="row justify-center">
        <div
          class="row q-pt-lg q-pb-md q-px-sm items-center
            justify-between col-sm-10 col-md-11 col-lg-10 col-xl-9"
        >
          <div class="text-h4">Строительные магазины</div>
          <q-btn flat color="secondary" label="Посмотреть все" />
        </div>
        <div class="row col-sm-10 col-md-11 col-lg-10 col-xl-9">
          <div
            class="col-xs-12 col-sm-6 col-md-3"
            style="padding: 10px; box-sizing: border-box;"
            v-for="category in categoryItems"
            :key="`HomePageCards__${category.id}`"
          >
            <ProductPackCard
              :imageUri="category.imageUri"
              :title="category.category"
              :items="category.subcategories"
            />
          </div>

          <q-btn
            label="Показать все магазины"
            class="q-ma-lg bg-white text-dark text-lowercase full-width"
            padding="md"
          />
        </div>
      </div>
    </div>

    <div class="q-pt-md q-pb-md">
      <div class="row justify-center">
        <div
          class="row q-pt-lg q-pb-md q-px-sm items-center
            justify-between col-sm-10 col-md-11 col-lg-10 col-xl-9"
        >
          <div class="text-h4">Лучшие исполнители</div>
          <q-btn flat color="secondary" label="Посмотреть все" />
        </div>
        <div class="row col-sm-10 col-md-11 col-lg-10 col-xl-9">
          <div
            class="col-xs-12 col-sm-6 col-md-3"
            style="padding: 10px; box-sizing: border-box;"
            v-for="category in categoryItems"
            :key="`HomePageCards__${category.id}`"
          >
            <ProductPackCard
              :imageUri="category.imageUri"
              :title="category.category"
              :items="category.subcategories"
            />
          </div>

          <q-btn
            label="Показать всех исполнителей"
            class="q-ma-lg bg-white text-dark text-lowercase full-width"
            padding="md"
          />
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import AppMainCarousel from '@components/root/AppMainCarousel'
import ProductPackCard from '@components/ProductPackCard'
import { homePageCards } from '@helpers/mock'

export default {
  name: 'IndexPage',
  components: {
    AppMainCarousel,
    ProductPackCard
  },
  data () {
    return {
      categoryItems: []
    }
  },
  created () {
    this.categoryItems = [...homePageCards]
  }
}
</script>
