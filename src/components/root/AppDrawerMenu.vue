<template>
    <q-scroll-area class="fit">
        <q-list>
            <q-item class="q-py-md" to="/" exact clickable v-ripple>
                <q-item-section class="q-mt-xs">
                    <div class="full-width">
                        <img src="@assets/desktop_logo.png" />
                    </div>
                </q-item-section>
            </q-item>

            <q-separator />

            <template v-for="(menuItem, index) in menuItems">
                <q-item class="q-py-md" :key="index" :to="menuItem.uri" clickable :active="menuItem.label === 'Outbox'" v-ripple>
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
</template>

<script>
export default {
  name: 'AppDrawerMenu',
  props: {
    menuItems: {
      type: [Array, Object],
      default: () => []
    }
  }
}
</script>

<style>

</style>
