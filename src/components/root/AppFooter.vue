<template>
  <q-footer bordered class="bg-grey-10 text-light">
    <div class="row justify-center">
      <div class="col-xs-12 col-sm-12 col-md-11 col-lg-10 col-xl-9">

        <div class="row full-width items-center  q-py-md">
          <div class="q-pl-xs">
            <q-btn to="/" flat no-caps no-wrap >
              <img :src="require('@assets/desktop_logo_dark.svg')" />
            </q-btn>
          </div>

          <div class="app-footer__slogan-text text-grey-12 q-pl-md">
            EasyDeal — Стройка в вашем городе проще чем кажется. (test)
          </div>

          <q-space v-if="$q.screen.gt.sm" />

          <div class="q-pl-xs q-my-sm">
            <q-btn round flat icon="mdi-vk" color="grey-9" />
            <q-btn round flat icon="mdi-twitter" color="grey-9" />
            <q-btn round flat icon="mdi-facebook" color="grey-9" />
            <q-btn round flat icon="mdi-telegram" color="grey-9" />
            <q-btn round flat icon="mdi-instagram" color="grey-9" />
            <q-btn round flat icon="mdi-youtube" color="grey-9" />
          </div>
        </div>

        <q-separator color="primary" class="full-width" inset />

        <div class="row q-my-md">
          <q-btn color="grey-9" stretch flat label="Товары" />
          <q-btn color="grey-9" stretch flat label="Услуги" />
          <q-btn color="grey-9" stretch flat label="Магазины" />
          <q-btn color="grey-9" stretch flat label="Вопросы и ответы" />
          <q-btn color="grey-9" stretch flat label="Поддержка" />
          <q-btn color="grey-9" stretch flat label="Правила сервиса" />
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss">
.app-footer {
  &__slogan-text {
    font-size: 17px;
    border-left: 1px solid $grey-12;
  }
}
</style>
