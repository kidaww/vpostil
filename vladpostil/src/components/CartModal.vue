<template>
  <v-dialog v-model="active" scrollable max-width="700px" @click:outside="$emit('close')">
    <v-card width="700px">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">Корзина</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">Данные для связи</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">Подтвердите заказ</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <div class="mb-12 scroll-cart-container">
              <product-line class="mb-2"/>
              <product-line class="mb-2"/>
              <product-line class="mb-2"/>
              <product-line class="mb-2"/>
              <product-line class="mb-2"/>
              <product-line class="mb-2"/>
            </div>
            <div class="d-flex justify-end">
              <p class="font-weight-light display-1 mr-2">Итого:</p>
              <p class="font-weight-thin display-1">1800 ГРН</p>
            </div>

            <div class="d-flex justify-center">
              <v-btn
                color="primary"
                @click="e1 = 2"
              >
                Продолжить
              </v-btn>
            </div>
          </v-stepper-content>

          <v-stepper-content step="2">
            <div class="mb-4">
              <v-form v-model="valid">
                <div>
                  <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    :counter="10"
                    label="ФИО"
                    required
                  ></v-text-field>
                </div>

                <div>
                  <v-text-field
                    v-model="email"
                    label="E-mail"
                    required
                  ></v-text-field>
                </div>


                <div>
                  <v-text-field
                    v-model="phone"
                    :rules="phoneRules"
                    label="Телефон"
                    required
                  ></v-text-field>
                </div>
              </v-form>
            </div>

            <v-btn
              color="primary"
              @click="e1 = 3"
            >
              Продолжить
            </v-btn>

          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn
              color="primary"
              @click="e1 = 1"
            >
              Завершить
            </v-btn>

          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-card>
  </v-dialog>
</template>

<script>
import ProductLine from './ProductLine';

export default {
  components: {
    ProductLine
  },
  props: {
    active: Boolean,
  },
  data: () => ({
    e1: 1,

    valid: false,
    firstname: '',
    nameRules: [
      v => !!v || 'Это обязательное поле',
    ],

    email: '',
    emailRules: [
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],

    phone: '',
    phoneRules: [
      v => !!v || 'Это обязательное поле',
    ]
  })
}
</script>

<style lang="scss" scoped>
.scroll-cart-container {
  max-height: 330px;
  overflow-y: scroll;
}
</style>