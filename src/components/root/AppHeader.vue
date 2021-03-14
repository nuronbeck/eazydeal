<template>
  <q-header bordered class="bg-white text-dark">
    <div class="app-page-container q-py-md">

      <div class="row">

          <div class="row col-auto col-md-2 col-lg-2">
            <q-btn
              class="lt-md q-mx-sm"
              flat
              dense
              round
              @click="showDrawerMenu"
              aria-label="Menu"
              icon="menu"
              color="grey"
            />

            <q-btn
              to="/"
              flat
              no-caps
              no-wrap
              class="q-ml-xs"
              v-if="$q.screen.gt.xs"
            >
              <img src="@assets/desktop_logo.png" />
            </q-btn>
          </div>

          <q-separator v-if="$q.screen.gt.xs" dark vertical inset />

          <div class="col-2 flex items-center justify-center">
            <q-btn-dropdown
              class="app_header__location-dropdown gt-sm text-capitalize"
              stretch
              flat
              label="Тюмень"
            >
              <template v-slot:prepend>
                <q-icon name="location_on" />
              </template>
              <q-list class="app_header__location-dropdown__content">
                <q-item
                  v-for="n in ['Тюмень', 'Москва', 'Екатеринбург']"
                  :key="`y.${n}`"
                  clickable
                  v-close-popup
                  tabindex="0"
                >
                  <q-item-section avatar>
                    <q-avatar
                      icon="location_on"
                      color="transparent"
                      text-color="grey"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ n }}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator inset spaced />
              </q-list>
            </q-btn-dropdown>
          </div>

          <q-separator v-if="$q.screen.gt.xs" dark vertical inset />

          <div class="col-auto">
            <template v-for="(navMenuItem, index) in menuItems">
              <q-btn
                :key="`navMenuItem__${index}`"
                class="app_header__header-menu-item gt-sm text-capitalize"
                stretch
                flat
                :label="navMenuItem.label"
                :to="navMenuItem.uri"
              />
            </template>
          </div>

          <q-space />

          <div class="row col-auto">
            <q-separator dark vertical />

            <q-btn stretch flat >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5745 13.2888L19.7337 18.4481C20.0888 18.8031 20.0888 19.3787 19.7337 19.7337C19.3787 20.0888 18.8031 20.0888 18.4481 19.7337L13.2888 14.5745C11.8891 15.6941 10.1136 16.3636 8.18182 16.3636C3.66312 16.3636 0 12.7005 0 8.18182C0 3.66312 3.66312 0 8.18182 0C12.7005 0 16.3636 3.66312 16.3636 8.18182C16.3636 10.1136 15.6941 11.8891 14.5745 13.2888ZM8.18182 14.5455C11.6964 14.5455 14.5455 11.6964 14.5455 8.18182C14.5455 4.66728 11.6964 1.81818 8.18182 1.81818C4.66728 1.81818 1.81818 4.66728 1.81818 8.18182C1.81818 11.6964 4.66728 14.5455 8.18182 14.5455Z" fill="#B0B0B0" ></path>
              </svg>
            </q-btn>

            <q-separator dark vertical />

            <q-btn stretch flat @click="showAuthModal" >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10C7.23864 10 5 7.76136 5 5C5 2.23864 7.23864 0 10 0C12.7614 0 15 2.23864 15 5C15 7.76136 12.7614 10 10 10ZM10 8.18182C10.4178 8.18182 10.8316 8.09952 11.2176 7.93962C11.6037 7.77972 11.9544 7.54534 12.2499 7.24989C12.5453 6.95443 12.7797 6.60367 12.9396 6.21763C13.0995 5.83159 13.1818 5.41784 13.1818 5C13.1818 4.58216 13.0995 4.16841 12.9396 3.78237C12.7797 3.39633 12.5453 3.04557 12.2499 2.75012C11.9544 2.45466 11.6037 2.22028 11.2176 2.06038C10.8316 1.90048 10.4178 1.81818 10 1.81818C9.15613 1.81818 8.34682 2.15341 7.75012 2.75012C7.15341 3.34682 6.81818 4.15613 6.81818 5C6.81818 5.84387 7.15341 6.65318 7.75012 7.24989C8.34682 7.84659 9.15613 8.18182 10 8.18182ZM19.4623 14.62C19.6214 14.9664 19.7332 15.4655 19.8305 16.1282C19.8979 16.5926 19.9502 17.059 19.9873 17.5268L19.9977 17.6627L20 17.7273C20 18.3296 19.7609 18.9072 19.3353 19.3334C18.9097 19.7595 18.3323 19.9993 17.73 20H2.27C1.66771 19.9993 1.09033 19.7595 0.664702 19.3334C0.239073 18.9072 -4.3365e-07 18.3296 0 17.7273L0.00227278 17.6627L0.0127273 17.5268C0.0515626 17.0592 0.103857 16.5928 0.169545 16.1282C0.266818 15.4655 0.378636 14.9664 0.537727 14.62C1.23636 13.1032 6.37955 10.9091 10 10.9091C13.6205 10.9091 18.7636 13.1032 19.4623 14.62ZM17.7182 15.3127C17.5909 15.2014 17.4091 15.0677 17.1841 14.9232C16.6805 14.5991 16.015 14.2527 15.28 13.9391C13.5182 13.1873 11.6286 12.7273 10 12.7273C8.37136 12.7273 6.48227 13.1873 4.72 13.9391C3.985 14.2527 3.31955 14.5991 2.81591 14.9232C2.59136 15.0677 2.40909 15.2014 2.28182 15.3127C2.23455 15.3545 2.19818 15.39 2.17409 15.4168C2.11273 15.5777 2.03545 15.9355 1.96864 16.3923C1.92364 16.6968 1.88545 17.0259 1.85364 17.3559C1.83727 17.5259 1.82545 17.6632 1.81864 17.7518C1.82489 17.8675 1.8751 17.9765 1.95899 18.0564C2.04288 18.1363 2.15413 18.1812 2.27 18.1818H17.73C17.8459 18.1812 17.9571 18.1363 18.041 18.0564C18.1249 17.9765 18.1751 17.8675 18.1814 17.7518C18.1745 17.6632 18.1632 17.5259 18.1464 17.3564C18.1159 17.0341 18.0775 16.7127 18.0314 16.3923C17.9645 15.9355 17.8873 15.5777 17.8259 15.4168C17.792 15.3801 17.7561 15.3453 17.7182 15.3127Z" fill="#B0B0B0"></path>
              </svg>
            </q-btn>

            <q-separator dark vertical />

            <q-btn stretch flat @click="showMyCart">
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.83591 12.2169L3.33138 1.99998H0.999989C0.44771 1.99998 0 1.55227 0 0.999989C0 0.44771 0.44771 0 0.999989 0H4.04555C4.47278 0 4.85282 0.271419 4.99144 0.675538L8.74603 11.6215C8.7599 11.662 8.77117 11.7033 8.77976 11.7452C8.85447 12.1097 9.26369 12.4462 9.6309 12.4483L17.7607 12.4999C18.1203 12.5019 18.5248 12.1725 18.5974 11.8156L18.6096 11.7633L20.032 6.2955C20.171 5.76102 20.717 5.44045 21.2515 5.57949C21.786 5.71854 22.1066 6.26455 21.9675 6.79904L20.551 12.244C20.2756 13.5214 19.0551 14.5072 17.7488 14.4998L9.61892 14.4482C8.3299 14.441 7.12942 13.4729 6.83591 12.2169ZM8.49991 19.9998C7.39535 19.9998 6.49993 19.1044 6.49993 17.9998C6.49993 16.8952 7.39535 15.9998 8.49991 15.9998C9.60446 15.9998 10.4999 16.8952 10.4999 17.9998C10.4999 19.1044 9.60446 19.9998 8.49991 19.9998ZM18.4998 19.9998C17.3952 19.9998 16.4998 19.1044 16.4998 17.9998C16.4998 16.8952 17.3952 15.9998 18.4998 15.9998C19.6044 15.9998 20.4998 16.8952 20.4998 17.9998C20.4998 19.1044 19.6044 19.9998 18.4998 19.9998Z" fill="#B0B0B0" ></path>
              </svg>
            </q-btn>
          </div>

        </div>

    </div>
  </q-header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    menuItems: {
      type: [Array, Object],
      default: () => []
    }
  },
  methods: {
    showAuthModal () {
      this.$emit('clickProfile')
    },
    showDrawerMenu () {
      this.$emit('clickMobileMenu')
    },
    showMyCart () {
      this.$emit('clickCart')
    }
  }
}
</script>

<style lang="scss">
.app_header {
  &__header-menu-item {
    font-size: 16px;
    text-transform: none;
    color: #555;
  }
  &__location-dropdown {
    font-size: 16px;
    text-transform: none;
    color: #555;
    &__content {
      min-width: 220px;
      .q-item__label {
        color: #555;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
}
</style>
