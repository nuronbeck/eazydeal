<template>
  <q-layout view="lHr LpR lfr">

    <AppHeader
      :menuItems="menuList"
      @clickProfile="
        isAuthenticated
          ? $router.currentRoute.path !== '/cabinet' && $router.push('cabinet')
          : showAuth()
      "
      @clickMobileMenu="showMobileMenu"
      @clickCart="showCart"
    />

    <q-drawer v-model="leftDrawer" side="left" behavior="mobile" bordered>
      <AppDrawerMenu :menuItems="menuList"/>
    </q-drawer>

    <q-drawer v-model="rightDrawer" side="right" behavior="mobile" bordered>
      <AppRightDrawerMenu />
    </q-drawer>

    <q-page-container style="min-height: 100vh;">
      <router-view />
    </q-page-container>

    <AppFooter />

    <q-dialog v-model="showAuthModal">
      <AppAuthContent />
    </q-dialog>

  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import { APP_MENU_LIST } from '@configs'
import AppHeader from '@components/root/AppHeader'
import AppAuthContent from '@components/root/AppAuthContent'
import AppDrawerMenu from '@components/root/AppDrawerMenu'
import AppRightDrawerMenu from '@components/root/AppRightDrawerMenu'
import AppFooter from '@components/root/AppFooter'

export default {
  name: 'MainLayout',
  components: { AppHeader, AppDrawerMenu, AppRightDrawerMenu, AppFooter, AppAuthContent },
  computed: {
    ...mapGetters({
      isAuthenticated: 'user/isAuth'
    })
  },
  data () {
    return {
      menuList: [],
      leftDrawer: false,
      rightDrawer: false,
      showAuthModal: false
    }
  },
  created () {
    this.menuList = [...APP_MENU_LIST]
  },
  methods: {
    showAuth () {
      this.showAuthModal = !this.showAuthModal
    },
    showCart () {
      this.rightDrawer = !this.rightDrawer
    },
    showMobileMenu () {
      this.leftDrawer = !this.leftDrawer
    }
  }
}
</script>
