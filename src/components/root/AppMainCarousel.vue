<template>
  <q-carousel
    v-if="sliderItems"
    swipeable
    animated
    v-model="sliderActiveId"
    autoplay
    infinite
    arrows
    thumbnails
  >
    <q-carousel-slide
      v-for="sliderItem in sliderItems"
      :key="sliderItem.id"
      :name="sliderItem.id"
      :img-src="require('@assets/header-main-slider.png')"
    >
      <div v-if="sliderItem.content" class="absolute-center bg-dark w100">
        <div class="text-white text-center text-h4">
          {{ sliderItem.content.title }}
        </div>
        <div class="text-subtitle1 text-center text-white">
          {{ sliderItem.content.subTitle }}
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import { homePageSlider } from '@helpers/mock'

export default {
  name: 'AppMainCarousel',
  data () {
    return {
      sliderActiveId: undefined,
      sliderItems: []
    }
  },
  created () {
    this.sliderItems = [...homePageSlider]
  }
}
</script>

<style></style>
