<template>
  <q-footer bordered class="bg-white text-dark">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn to="/" flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
            <img :src="require('@assets/desktop_logo.png')" />
        </q-btn>
      </q-toolbar-title>
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
