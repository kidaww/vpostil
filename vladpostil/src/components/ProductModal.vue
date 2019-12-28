<template>
  <v-dialog v-model="active" fullscreen hide-overlay transition="dialog-bottom-transition" content-class="dialog-pattern">
    <v-card>

      <v-toolbar dark style="border-radius: 0" color="grey darken-4">
        <v-btn icon dark @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Лаура 01</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="$emit('close')">Закрыть</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <div class="product-content row">
        <div class="product-content__section product-content__section--photo photo d-flex flex-column">
          <img
            class="photo__block"
            :src="require('@/assets/back.jpg')"
          >
          <div class="d-flex">
            
          </div>
        </div>
        <v-divider vertical></v-divider>
        <div class="product-content__section product-content__section--desc">
          <p class="font-weight-light display-2 mb-6">Лаура №01</p>
          <div class="d-flex w-100 flex-wrap align-end">
            <div class="w-50 px-2">
              <p class="mb-0 w-100 text-center font-weight-light">Количество</p>
              <div class="d-flex w-100 my-2 align-center">
                <v-btn class="mx-2" fab dark small color="primary">
                  <v-icon dark>mdi-minus</v-icon>
                </v-btn>
                <v-text-field
                  class="product-content__input"
                  label="Количество"
                  solo
                  rounded
                  value="1"
                  readonly
                  hide-details
                ></v-text-field>
                <v-btn class="mx-2" fab dark small color="primary">
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
            <div class="w-50 px-2">
              <v-select
                class="my-2 w-100"
                style="flex: unset"
                :items="sizeItems"
                label="Выберите размер"
                outlined
                hide-details
              ></v-select>
            </div>
            <div class="w-100 mt-3 d-flex justify-end">
              <div class="d-flex px-2">
                <p class="font-weight-thin display-1">Итого:</p>
                <p class="font-weight-light display-1 ml-2 text-underline">300 грн</p>
              </div>
            </div>
            <div class="w-50 px-2">
              <v-btn rounded color="primary" class="mb-2 w-100" dark>Добавить в корзину</v-btn>
            </div>
            <div class="w-50 px-2">
              <v-btn rounded color="primary" class="mb-2 w-100" dark>Оформить заказ</v-btn>
            </div>
          </div>
          <div>
            <v-divider class="my-6"></v-divider>

            <p class="font-weight-bold mb-0">Ткань - БЯЗЬ (82% хлопок 18% полиэстер)</p>
            Постельное белье из бязи - сдержанность, элегантность и образцовость. Традиционная ткань текстиля, дарит уют и заботу во время сна!

            <v-divider class="my-6"></v-divider>

            <p class="font-weight-bold mb-2">Размерная сетка</p>
            <div class="d-flex flex-wrap">
              <div class="product-content__text my-2 w-50">
                <p class="font-weight-bold mb-0">Комплект Полуторный:</p>
                Пододеяльник 150х220 см <br>
                Простынь 150х220 см <br>
                Наволочки (2 шт) 70х70 см или 50х70 см <br>
              </div>

              <div class="product-content__text my-2 w-50">
                <p class="font-weight-bold mb-0">Комплект Двуспальный:</p>
                Пододеяльник 180х220 см <br>
                Простынь 200х220 см <br>
                Наволочки (2 шт) 70х70 см или 50х70 см <br>
              </div>

              <div class="product-content__text my-2 w-50">
                <p class="font-weight-bold mb-0">Комплект Евростандарт:</p>
                Пододеяльник 200х220 см <br>
                Простынь 220х220 см <br>
                Наволочки (2 шт) 70х70 см или 50х70 см <br>
              </div>

              <div class="product-content__text my-2 w-50">
                <p class="font-weight-bold mb-0">Комплект Семейный:</p>
                Пододеяльник (2шт) 150х220 см <br>
                Простынь 220х220 см <br>
                Наволочки (2шт) 70х70 см или 50х70 см <br>
              </div>
            </div>

          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    active: Boolean,
    productData: Object,
  },
  data: () => ({
    notifications: false,
    sound: true,
    widgets: false,

    sizeItems: [
      'Размер: Полуторный',
      'Размер: Двойной',
      'Размер: Семеный',
      'Размер: Евро'
    ]
  })
}
</script>

<style lang="scss">
.product-content input {
  text-align: center;
}
</style>

<style lang="scss" scoped>
.photo {

  &__block {
    max-width: 100%;
    max-height: 100%;
    border-radius: 6px;
  }
}
.product-content {
  max-width: 1300px;
  margin: auto;
  display: flex;
  position: relative;
  justify-content: space-between;
  height: calc(100vh - 64px);

  &__text {
    font-size: 15px;
  }
  &__title {
    text-transform: uppercase;
    font-size: 36px;
    color: #212121 !important
  }

  &__section {
    width: 49%;
    display: flex;
    flex-direction: column;
    color: #212121;

    &--photo {
      justify-content: center;
    }
    &--desc {
      justify-content: center;
      align-items: flex-start;
    }
  }
}
</style>