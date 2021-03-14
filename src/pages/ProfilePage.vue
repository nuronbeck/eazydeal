<template>
  <q-page class="q-my-md">

    <div class="app-page-container">

      <div class="row q-pt-sm q-pb-md q-px-sm items-center justify-between col-xs-12 col-sm-10 col-md-11 col-lg-10 col-xl-9 rounded-borders bg-white">
        <div class="col-12">
          <q-tabs
            v-model="tab"
            inline-label
            class="profile_page__tabs text-dark"
            active-color="secondary"
            indicator-color="secondary"
            align="left"
            inside-arrows
          >
            <q-route-tab to="/cabinet" exact replace name="profile" label="Профиль" />
            <q-route-tab to="/cabinet/wallet" exact replace name="wallet" label="Кошелек" />
            <q-route-tab to="/cabinet/announcements" exact replace name="myAnnouncements" label="Мои объявления" />
            <q-route-tab to="/cabinet/favorites" exact replace name="favorites" label="Избранное" />
            <q-route-tab to="/cabinet/chat" exact replace name="chat" label="Сообщения" >
              <q-badge color="red" floating>2</q-badge>
            </q-route-tab>
            <q-route-tab to="/cabinet/deals" exact replace name="myDeals" label="Мои сделки" />
            <q-route-tab to="/cabinet/pro" exact replace name="myPro" label="PRO аккаунт" />

          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab">
            <q-tab-panel :name="tab">
              <router-view></router-view>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>

    </div>

  </q-page>
</template>

<script>
export default {
  name: 'ProfilePage',
  data () {
    return {
      tab: 'profile'
    }
  }
}
</script>

<style lang="scss">
.profile_page {
  &__tabs .q-tab__label {
    font-size: 17px;
    text-transform: none;
  }
  &__section-title {
    font-family: $app_font;
    font-style: normal;
    font-weight: 600;
    color: #333;
    margin-bottom: 35px;
  }
}
</style>
