<template>
  <div class="p-card">
    <v-card
      :loading="false"
      class="mx-auto mt-6 mb-2"
      max-width="374"
    >
      <v-img
        height="250"
        :src="require('@/assets/back.jpg')"
      ></v-img>

      <v-row class="p-card__image-row my-0" v-if="number % 3 === 0">
        <v-chip
          v-if="number % 3 === 0"
          class="ma-2"
          color="green"
          text-color="white"
          small
        >
          Новинка
          <v-icon size="12" right>mdi-star</v-icon>
        </v-chip>
        <v-chip
          v-if="number % 6 === 0"
          class="ma-2"
          color="red"
          text-color="white"
          small
        >
          -30
          <v-icon size="12" right>mdi-percent</v-icon>
        </v-chip>
      </v-row>

      <v-card-title class="pb-0 justify-space-between">
        <div>
          <p class="text-uppercase font-weight-regular mb-0 p-card__title p-card__title--main">Лаура 03</p>
          <p class="text-uppercase font-weight-light mb-0 pl-1 p-card__title p-card__title--additional">Бязь голд</p>
        </div>
        <div class="d-flex">
          <p class="font-weight-light mb-0 p-card__price-sub">от</p>
          <p class="text-uppercase font-weight-thin mb-0 mx-1 p-card__price">300</p>
          <p class="font-weight-light mb-0 p-card__price-sub">грн</p>
        </div>
      </v-card-title>

      <div class="d-flex justify-end ml-1 pr-4 font-weight-light" :style="{ color: (number % 2 == 0) ? '#F57C00' : '#689F38' }">{{ number % 2 == 0 ? 'Нет в наличии' : 'Есть в наличии' }}</div>
      
      <v-divider class="mx-4"></v-divider>

      <v-card-actions class="p-card__buttons w-100 justify-space-around">
        <v-btn
          color="deep-purple accent-4"
          class="w-45"
          outlined
          
        >
          <v-icon size="16" class="mr-2">mdi-cart</v-icon>Купить
        </v-btn>
        <product-modal-vue/>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import ProductModalVue from './ProductModal.vue';
export default {
  props: {
    number: Number,
  },
  components: {
    ProductModalVue,
  }
}
</script>

<style lang="scss" scoped>
.p-card {
  position: relative;

  &__title {
    line-height: 1;
    &--main {
      font-size: 27px;
    }
    &--additional {
      font-size: 16px;
    }
  }
  &__price {
    font-size: 38px;
  }
  &__price-sub {
    line-height: 2;
  }
  &__image-row {
    position: absolute;
    top: 0;
    left: 10px;
    width: 100%;
    justify-content: flex-end;
  }
  &__buttons {
    //width: 70%;
  }
}
</style>