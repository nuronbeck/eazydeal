<template>
  <q-card class="my-card q-pa-sm">
    <q-tabs active-color="secondary" v-model="modalTab">
      <q-tab label="Вход" name="login_tab" />
      <q-tab label="Регистрация" name="register_tab" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="modalTab" animated>
      <q-tab-panel name="login_tab">
        <div class="text-subtitle2 q-mt-sm q-mb-xs">через социальные сети</div>
        <AppAuthContentSocials />

        <div class="text-subtitle2 q-mt-sm q-mb-xs">или</div>

        <div class="row">
          <AppAuthByInput
            :val="auth_form.email_phone"
            :authBy="auth_by"
            :authByTypes="auth_by_types"
            :changeInputType="change_auth_by"
            :onChange="onAuthByChange"
          />

          <div class="col-12">
            <q-input
              v-model="auth_form.password"
              outlined
              class="q-pb-sm"
              dense
              :type="passwordHidden ? 'password' : 'text'"
              :placeholder="'Пароль'"
            >
              <template v-slot:append>
                <q-icon
                  :name="passwordHidden ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="passwordHidden = !passwordHidden"
                />
              </template>
            </q-input>
          </div>
        </div>

        <div class="row d-flex justify-end align-center q-mb-md">
          <q-btn class="text-lowercase" dense flat color="secondary"
            >Не можете войти?</q-btn
          >
        </div>

        <div class="row">
          <div class="col-12">
            <q-btn color="primary" class="full-width" label="Войти" />
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="register_tab">
        <div class="row q-gutter-md q-mb-md">
          <q-radio
            dense
            val="usual"
            v-model="auth_form.user_type"
            label="Физическое лицо"
          />
          <q-radio
            dense
            val="legal"
            v-model="auth_form.user_type"
            label="Юридическое лицо"
          />
        </div>

        <div class="text-subtitle2 q-mt-sm q-mb-xs">через социальные сети</div>
        <AppAuthContentSocials />

        <div class="text-subtitle2 q-mt-sm q-mb-xs">или</div>
        <AppAuthByInput
          :val="auth_form.email_phone"
          :authBy="auth_by"
          :authByTypes="auth_by_types"
          :changeInputType="change_auth_by"
          :onChange="onAuthByChange"
        />

        <div class="row q-mt-sm q-mb-md">
          <div class="col">
            <q-checkbox
              class="q-ma-xs"
              dense
              v-model="auth_form.register_agreement"
              val="false"
              color="primary"
            />
          </div>
          <div class="col-11">
            Я соглашаюсь с
            <span class="text-secondary">правилами использования сервиса</span>,
            а также с передачей и обработкой моих данных в EasyDeal. Я
            подтверждаю своё совершеннолетие и ответственность за размещение
            объявления
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <q-btn
              color="primary"
              class="full-width"
              label="Зарегистрироватся"
              @click="registerAccount"
            />
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
import AppAuthContentSocials from '@components/root/AppAuthContent/AppAuthContentSocials'
import AppAuthByInput from '@components/root/AppAuthContent/AppAuthByInput'

export default {
  name: 'AppAuthContent',
  components: {
    AppAuthContentSocials,
    AppAuthByInput
  },
  data () {
    return {
      modalActive: false,
      modalTab: 'login_tab',
      auth_by: 'phone',
      auth_by_types: [
        {
          icon: 'phone',
          name: 'Номер телефона'
        },
        {
          icon: 'email',
          name: 'Почта'
        }
      ],
      auth_form: {
        email_phone: '',
        password: '',
        user_type: 'usual',
        register_agreement: false
      },
      passwordHidden: true
    }
  },
  methods: {
    ...mapActions({
      registerUser: 'user/registerUser'
    }),
    change_auth_by (authByTypeStr) {
      if (authByTypeStr !== this.auth_by) {
        this.auth_form.email_phone = ''
        this.auth_by = authByTypeStr
      }
    },
    onAuthByChange (targetValue) {
      if (this.auth_form.email_phone !== targetValue) {
        this.auth_form.email_phone = targetValue
      }
    },
    registerAccount () {
      this.registerUser({
        // email: self.auth_form.email_phone
        email: '+79324722070'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.my-card {
  & {
    width: 100%;
    max-width: 430px;
  }
}
</style>
