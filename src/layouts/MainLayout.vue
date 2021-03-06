<template>
  <q-layout view="lHr LpR lfr">
    <q-header elevated class="bg-white text-dark">
      <q-toolbar>
        <div class="row col-12 justify-center">
          <div class="row col-xs-12 col-sm-12 col-md-11 col-lg-10 col-xl-9">
            <q-btn
              class="lt-md"
              flat
              dense
              round
              @click="leftDrawer = !leftDrawer"
              aria-label="Menu"
              icon="menu"
            />

            <q-btn
              to="/"
              flat
              no-caps
              no-wrap
              class="q-ml-xs"
              v-if="$q.screen.gt.xs"
            >
              <img src="../assets/desktop_logo.png" />
            </q-btn>

            <q-separator dark vertical inset />

            <q-btn-dropdown
              class="gt-sm text-capitalize"
              stretch
              flat
              label="Тюмень"
            >
              <q-list>
                <q-item-label header>Folders</q-item-label>
                <q-item
                  v-for="n in 3"
                  :key="`x.${n}`"
                  clickable
                  v-close-popup
                  tabindex="0"
                >
                  <q-item-section avatar>
                    <q-avatar
                      icon="folder"
                      color="secondary"
                      text-color="white"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                    <q-item-label caption>February 22, 2016</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-icon name="info" />
                  </q-item-section>
                </q-item>
                <q-separator inset spaced />
                <q-item-label header>Files</q-item-label>
                <q-item
                  v-for="n in 3"
                  :key="`y.${n}`"
                  clickable
                  v-close-popup
                  tabindex="0"
                >
                  <q-item-section avatar>
                    <q-avatar
                      icon="assignment"
                      color="primary"
                      text-color="white"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Vacation</q-item-label>
                    <q-item-label caption>February 22, 2016</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-icon name="info" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>

            <q-separator dark vertical inset />

            <template v-for="(navMenuItem, index) in menuList">
              <q-btn
                :key="`navMenuItem__${index}`"
                class="gt-sm text-capitalize"
                stretch
                flat
                :label="navMenuItem.label"
                :to="navMenuItem.uri"
              />
            </template>

            <q-space />

            <q-separator dark vertical />
            <q-btn stretch flat icon="search" />
            <q-separator dark vertical />
            <q-btn
              stretch
              flat
              icon="person"
              @click="showAuthModal = !showAuthModal"
            />
            <q-separator dark vertical />
            <q-btn stretch flat icon="local_grocery_store" @click="rightDrawer = !rightDrawer"/>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawer" side="left" behavior="mobile" bordered>
      <q-scroll-area class="fit">
          <q-list>

            <q-item to="/" exact clickable v-ripple>
              <q-item-section>
                <div class="full-width">
                  <img src="../assets/desktop_logo.png" />
                </div>
              </q-item-section>
            </q-item>

            <q-separator />

            <template v-for="(menuItem, index) in menuList">
              <q-item :key="index" :to="menuItem.uri" clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
    </q-drawer>

    <q-drawer v-model="rightDrawer" side="right" behavior="mobile" bordered>
      <q-img class="absolute-top" :src="require('@assets/right_drawer_bg.png')" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Пользователь</div>
            <div>+7 (932) 777-77-77</div>
          </div>
      </q-img>
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
import { APP_MENU_LIST } from '@configs'
import AppAuthContent from '@components/root/AppAuthContent'
import AppFooter from '@components/root/AppFooter'

export default {
  name: 'MainLayout',
  components: { AppFooter, AppAuthContent },
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
  }
}
</script>
