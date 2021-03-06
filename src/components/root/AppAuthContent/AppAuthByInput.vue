<template>
  <div class="col-12">
    <q-input
      v-model="login_form.email_phone"
      @keyup="handleChange"
      class="q-pb-sm"
      :type="authBy === 'email' ? 'email' : 'tel'"
      dense
      outlined
      :mask="authBy === 'phone' ? '+7 (###) ###-##-##' : ''"
      :unmasked-value="authBy === 'phone'"
      :placeholder="
        authBy === 'email' ? 'your_example@gmail.com' : '+7 (___) ___-__-__'
      "
    >
      <template v-slot:before>
        <q-btn-dropdown
          dense
          color="primary"
          padding="sm"
          size="md"
          outline
          no-caps
          :icon="authBy"
        >
          <q-list>
            <q-item
              clickable
              v-close-popup
              v-for="auth_by_type in authByTypes"
              :key="auth_by_type.icon"
              @click="change_auth_by(auth_by_type.icon)"
            >
              <q-item-section avatar>
                <q-avatar
                  :icon="auth_by_type.icon"
                  color="primary"
                  text-color="white"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ auth_by_type.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: 'AppAuthByInput',
  props: {
    authBy: {
      type: String,
      default: () => 'email'
    },
    authByTypes: {
      type: [Object, Array],
      default: () => []
    },
    changeInputType: {
      type: Function,
      default: () => {}
    },
    onChange: {
      type: Function,
      default: () => {}
    },
    val: {
      type: [String, Number],
      default: () => ''
    }
  },
  data () {
    return {
      login_form: {
        email_phone: ''
      }
    }
  },
  methods: {
    change_auth_by (authByTypeStr) {
      if (authByTypeStr !== this.authBy) {
        this.login_form.email_phone = ''
        this.changeInputType(authByTypeStr)
      }
    },
    handleChange () {
      if (this.onChange) {
        this.onChange(this.login_form.email_phone)
      }
    }
  },
  created () {
    this.login_form.email_phone = this.val
  }
}
</script>

<style>
</style>
