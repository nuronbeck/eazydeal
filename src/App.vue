<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { colors } from 'quasar'

export default {
  name: 'App',
  created () {
    colors.setBrand('primary', '#ff8a00')
    colors.setBrand('secondary', '#bc6600')
  }
}
</script>
