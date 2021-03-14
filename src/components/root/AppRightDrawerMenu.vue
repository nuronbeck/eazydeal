<template>
    <q-scroll-area class="fit">
        <q-img class="absolute-top" :src="require('@assets/right_drawer_bg.png')" style="height: 150px">
            <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Пользователь</div>
            <div>+7 (932) 777-77-77</div>
            </div>
        </q-img>
    </q-scroll-area>
</template>

<script>
export default {
  name: 'AppRightDrawerMenu'
}
</script>

<style>

</style>
