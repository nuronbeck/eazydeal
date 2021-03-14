<template>
  <div class="row">
    <swiper
      style="min-height: 400px;"
      :options="swiperOptions"
    >
      <div class="swiper-pagination" slot="pagination"></div>

      <template v-for="item in 8">
        <swiper-slide :key="item">
          <q-card class="shops-slide-card">
            <q-img :src="require('@assets/shops_slide_item.png')" />

            <q-card-section>

              <div class="row no-wrap items-center">
                <div class="col text-h6 ellipsis">
                  QUICK-STEP
                </div>
              </div>

              <div class="row flex items-center justify-start">
                <q-rating :max="5" size="20px" color="grey" color-selected="primary" />
                <span class="q-pl-sm">4.85</span>
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-caption text-grey ellipsis-3-lines">
                один из мировых лидеров в напольных покрытиях с безупречной репутацией.
              </div>
            </q-card-section>

            <q-card-actions>
              <q-btn
                unelevated
                class="full-width shops-slide-card__action-btn"
                color="secondary"
              >
                Перейти в магазин
              </q-btn>
            </q-card-actions>
          </q-card>
        </swiper-slide>
      </template>

    </swiper>
  </div>
</template>

<script>
export default {
  name: 'ShopsCarousel',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
        slidesPerView: 5,
        spaceBetween: 10,
        breakpoints: {
          310: {
            slidesPerView: 1.5,
            spaceBetween: 10
          },
          400: {
            slidesPerView: 1.7,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 2.2,
            spaceBetween: 10
          },
          520: {
            slidesPerView: 2.6,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3.4,
            spaceBetween: 10
          },
          856: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          942: {
            slidesPerView: 4.3,
            spaceBetween: 10
          },
          1078: {
            slidesPerView: 4.5,
            spaceBetween: 10
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 10
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
.shops-slide-card {
  box-shadow: 0 1px 2px rgb(0, 0, 0, 0.1);
  &__action-btn {
    font-family: $app_font;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    text-transform: none;
    font-size: 15px !important;
    color: $secondary !important;
    background: rgba(255,138,0, 0.1) !important;
    transition: .3s all;
  }
  .q-btn__wrapper {
    box-sizing: border-box;
    padding-top: 4px;
  }

  &__action-btn:hover {
    color: $white !important;
    background: $primary !important;
  }
}
</style>
