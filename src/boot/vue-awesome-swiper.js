/**
 * Подключение vue-awesome-swiper
 * https://github.com/surmon-china/vue-awesome-swiper
 */
import VueAwesomeSwiper from 'vue-awesome-swiper'

// Кастомизация и подключение стилей в файле src/css/_swiper-slider.scss

export default async ({ Vue }) => {
  Vue.use(VueAwesomeSwiper)
}
