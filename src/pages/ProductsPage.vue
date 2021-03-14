<template>
  <q-page>

    <div class="bg-white">
      <div class="app-page-container">

        <div class="row flex items-center justify-start q-py-md">
          <div class="col-12 text-h5">Все объявления</div>
          <div class="col-12 text-grey">9 товаров в выбранной категории</div>
        </div>

        <q-separator />

        <div class="row q-py-md">
          <div class="col">
            <div class="row q-gutter-y-lg q-gutter-x-md">
              <div class="col-12">

                <q-select
                  v-model="formFilter.category"
                  dense
                  options-dense
                  outlined
                  :options="['Не выбрано', 'Стройматериалы', 'Окна и двери']"
                  style="width: 250px"
                  color="primary"
                >
                  <template v-slot:no-option>
                    <q-item>
                      <q-item-section class="text-grey">
                        Не выбрано
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>

              </div>
              <div class="col-auto">
                <q-checkbox v-model="formFilter.onlyDelivery" dense label="Только с доставкой" color="primary" />
              </div>
              <div class="col-auto">
                <q-checkbox v-model="formFilter.onlyVerifiedUsers" dense label="Только проверенные пользователи" color="primary" />
              </div>
            </div>
          </div>
          <div class="col-auto">
            <q-btn unelevated color="primary" label="Найти" />
          </div>
        </div>

        <q-separator />

        <div class="row q-pt-md q-pb-sm">
          <q-tabs
            v-model="formFilter.advTypeTab"
            inline-label
            active-bg-color="white"
            class="bg-grey-2"
          >
            <q-tab name="all" label="Все" />
            <q-tab name="shops" label="Магазины" />
            <q-tab name="private" label="Частные" />
          </q-tabs>
        </div>

      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'ProductsPage',
  data () {
    return {
      formFilter: {
        category: 'Не выбрано',
        onlyDelivery: false,
        onlyVerifiedUsers: false,
        advTypeTab: 'all'
      }
    }
  }
}
</script>

<style></style>
