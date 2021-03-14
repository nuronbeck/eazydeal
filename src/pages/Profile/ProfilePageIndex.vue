<template>
    <div class="row full-width">
        <div class="q-pa-sm col-sm-12 col-md-6 col-lg-5">
            <div class="profile_page__section-title text-h6">Личная информация</div>
            <div class="row q-col-gutter-x-lg">
            <div class="col-12 col-md-5 col-lg-4 col-xl-3">
                <q-img
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/avatar5.jpg"
                :ratio="1"
                >
                <q-tooltip
                    anchor="center middle"
                    self="center middle"
                    content-class="bg-white text-dark"
                    transition-show="jump-right"
                    transition-hide="jump-left"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3637 3.75552L1.45456 12.6647V14.5454H3.33531L12.2445 5.63626L10.3637 3.75552ZM11.3921 2.72714L13.2729 4.60789L14.2445 3.63624L12.3638 1.7555L11.3921 2.72714ZM12.8779 0.212938L15.7871 3.12206C15.9234 3.25844 16 3.44339 16 3.63624C16 3.82909 15.9234 4.01405 15.7871 4.15043L4.15059 15.7869C4.01423 15.9233 3.82927 16 3.6364 16H0.72728C0.534393 16 0.349407 15.9234 0.213015 15.787C0.0766239 15.6506 0 15.4656 0 15.2727V12.3636C4.11912e-05 12.1707 0.0766921 11.9858 0.213093 11.8494L11.8496 0.212938C11.986 0.0765938 12.1709 0 12.3638 0C12.5566 0 12.7416 0.0765938 12.8779 0.212938ZM15.2729 14.5454C15.4658 14.5454 15.6508 14.6221 15.7871 14.7585C15.9235 14.8948 16.0002 15.0798 16.0002 15.2727C16.0002 15.4656 15.9235 15.6506 15.7871 15.787C15.6508 15.9234 15.4658 16 15.2729 16H8.00008C7.80719 16 7.62221 15.9234 7.48581 15.787C7.34942 15.6506 7.2728 15.4656 7.2728 15.2727C7.2728 15.0798 7.34942 14.8948 7.48581 14.7585C7.62221 14.6221 7.80719 14.5454 8.00008 14.5454H15.2729Z" fill="#797979"></path>
                    </svg>
                    <span class="q-pl-xs" style="font-size: 17px;">Изменить</span>
                </q-tooltip>
                </q-img>
            </div>
            <div class="col-7">
                <div class="col">
                <q-input
                    placeholder="Ваше имя"
                    :input-style="{ fontSize: '16px' }"
                    dense
                    outlined
                    lazy-rules
                    :error="false"
                />
                </div>
                <div class="col">
                <q-input
                    placeholder="Ваша фамилия"
                    :input-style="{ fontSize: '16px' }"
                    dense
                    outlined
                    lazy-rules
                    :error="false"
                />
                </div>
                <div class="col">
                <q-input
                    placeholder="Отчество"
                    :input-style="{ fontSize: '16px' }"
                    dense
                    outlined
                    lazy-rules
                    :error="false"
                />
                </div>
            </div>
            </div>
        </div>

        <div class="q-pa-sm col-sm-12 col-md-6 col-lg-6">
            <div class="profile_page__section-title text-h6">Контактная информация</div>
            <div class="row">

                <div class="row col-12">
                <div class="col-7">
                    <q-input
                    type="email"
                    placeholder="example@mail.ru"
                    :input-style="{ fontSize: '16px' }"
                    dense
                    outlined
                    lazy-rules
                    :error="false"
                    />
                </div>

                <div class="col-auto">
                    <q-btn
                    label="Изменить"
                    color="secondary"
                    class="q-mx-md"
                    flat
                    />
                </div>
                </div>

                <div class="row col-12">
                <div class="col-7">
                    <q-input
                    placeholder="+7 (937) 782-73-12"
                    mask="+7 (###) ###-##-##"
                    :input-style="{ fontSize: '16px' }"
                    dense
                    outlined
                    lazy-rules
                    :error="false"
                    />
                </div>

                <div class="col-auto">
                    <q-btn
                    label="Изменить"
                    color="secondary"
                    class="q-mx-md"
                    flat
                    />
                </div>
                </div>

                <div class="row col-12">
                <div class="col-7">
                    <q-select
                    use-input
                    :input-style="{ fontSize: '16px' }"
                    :popup-content-style="{ fontSize: '16px', fontWeight: 'normal' }"
                    :options="['Тюмень', 'Москва', 'Екатеринбург']"
                    outlined
                    dense
                    :options-dense="false"
                    >

                    <template v-slot:prepend>
                        <q-icon name="location_on" />
                    </template>
                    </q-select>
                </div>
                </div>

            </div>
        </div>

        <div class="col-12">
            <q-separator />
        </div>

        <div class="q-pa-sm col-lg-6">
            <div class="profile_page__section-title text-h6">Аккаунт</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>

        <div class="q-pa-sm col-lg-6">
            <div class="profile_page__section-title text-h6">Паспортные данные</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
