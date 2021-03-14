<template>
  <q-carousel
    v-if="sliderItems"
    class="app_main_carousel"
    swipeable
    animated
    v-model="sliderActiveId"
    autoplay
    infinite
    arrows
    navigation
    transition-prev="slide-right"
    transition-next="slide-left"
  >
    <q-carousel-slide
      v-for="(sliderItem, index) in sliderItems"
      :key="sliderItem.id"
      :name="sliderItem.id"
      :img-src="index === 0 ? require('@assets/header-main-slider.png') : sliderItem.imageUri"
    >
      <div v-if="sliderItem.content" class="absolute-center w100">
        <div class="app_main_carousel__slider-title text-white text-center text-h3">
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
    if (Object.keys(homePageSlider).length > 0) {
      this.sliderItems = [...homePageSlider]
      this.sliderActiveId = 1
    }
  }
}
</script>

<style lang="scss">
.app_main_carousel {
  height: 325px;
  &__slider-title {
    font-family: "SF Pro Display", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 130%;
  }

  @media (max-width: 480px){
    &__slider-title {
      font-size: 24px;
    }
  }

  @media (max-width: 576px){
    &__slider-title {
      font-size: 32px;
    }
  }
}
</style>
