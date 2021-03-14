<template>
  <q-card class="my-card" flat>
    <img :src="imageUri" />

    <q-card-section class="text-dark">
      <div class="text-h6">{{ title }}</div>
    </q-card-section>

    <q-separator />

    <q-card-section class="q-pa-none" v-if="items">
      <q-list separator v-if="items.length > 5">
        <q-item clickable v-ripple
          v-for="(childItem, index) in items.slice(0, 5)"
          :key="`ProductPackCard__${index}___${childItem}`"
        >
          <q-item-section>{{ childItem }}</q-item-section>
        </q-item>
      </q-list>

      <q-list separator v-else>
        <q-item clickable v-ripple
          v-for="childItem in items"
          :key="`ProductPackCard__${childItem.id}`"
        >
          <q-item-section>{{ childItem.name }}</q-item-section>
        </q-item>
      </q-list>
    </q-card-section>

    <q-separator />

    <q-card-actions horizontal align="left" v-if="items && items.length > 5">
      <q-btn flat dense class="text-lowercase" style="color: #bc6600;">
        <q-icon flat round name="folder_open" style="color: #bc6600;" class="q-mr-sm"/>
        + {{ items.length - 5 }} категории
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { APP_BASE_URL } from '@configs'

export default {
  name: 'ProductPackCard',
  props: {
    imageUri: {
      type: String,
      default: () => `${APP_BASE_URL}/assets/img/main-categories/mc2.png`
    },
    title: {
      type: String,
      required: true,
      default: () => 'Стройматериалы'
    },
    items: {
      type: [Object, Array],
      default: () => []
    }
  }
}
</script>
