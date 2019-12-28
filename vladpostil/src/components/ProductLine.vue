<template>
  <div class="product-line">
    <p class="w-100 text-center text-capitalize font-weight-light display-1">Лаура 03</p>
    <div class="product-line__content d-flex">
      <v-img
        class="product-line__photo"
        :src="require('@/assets/back.jpg')"
        max-width="200px"
        max-height="150px"
      ></v-img>
      <div class="w-100 d-flex flex-column justify-space-around align-center">
        <div>
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
        <v-select
          class="my-2 w-100 px-2"
          style="flex: unset"
          :items="sizeItems"
          label="Выберите размер"
          outlined
          hide-details
        ></v-select>
      </div>
    </div>
    <div class="d-flex justify-space-between px-2 my-2">
      <v-btn small outlined color="primary">Подробнее</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sizeItems: [
      'Размер: Полуторный',
      'Размер: Двойной',
      'Размер: Семеный',
      'Размер: Евро'
    ]
  })
}
</script>

<style lang="scss" scoped>
.product-line {
  width: 100%;
  height: 150px;

  &__photo {
    max-height: 100%;
  }
  &__content {
    height: 100%;
  }
}
</style>

<style lang="scss">
.product-content__input input {
  text-align: center;
}
</style>