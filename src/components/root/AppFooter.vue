<template>
  <q-footer bordered class="bg-grey-10 text-light">
    <q-toolbar>

        <div class="row col-12 justify-center">
          <div class="row col-xs-12 col-sm-12 col-md-11 col-lg-10 col-xl-9">

            <div class="row full-width q-my-lg">
              <q-btn class="q-ml-xs" to="/" flat no-caps no-wrap >
                <img :src="require('@assets/desktop_logo_dark.svg')" />
              </q-btn>

              <q-separator color="orange" vertical inset />

              <span class="q-py-xs q-px-md q-pt-sm text-grey-12">
                EasyDeal — Стройка в вашем городе проще чем кажется. (test)
              </span>

              <q-space />

              <q-btn round flat icon="mdi-vk" color="grey-9" />
              <q-btn round flat icon="mdi-twitter" color="grey-9" />
              <q-btn round flat icon="mdi-facebook" color="grey-9" />
              <q-btn round flat icon="mdi-telegram" color="grey-9" />
              <q-btn round flat icon="mdi-instagram" color="grey-9" />
              <q-btn round flat icon="mdi-youtube" color="grey-9" />
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
    </q-toolbar>
  </q-footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style>
</style>
