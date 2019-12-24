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

      <v-card-title class="pb-0">ЛАУРА №03</v-card-title>

      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <!--
          <v-rating
            :value="0"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ml-4">0 (0)</div>
          -->
          <div class="ml-1" :style="{ color: (number % 2 == 0) ? '#F57C00' : '#689F38' }">{{ number % 2 == 0 ? 'Нет в наличии' : 'Есть в наличии' }}</div>
        </v-row>

        <v-divider></v-divider>

        <div class="mt-4 subtitle-1 black--text">
          <v-chip class="mr-2">
            <v-icon left>mdi-cash</v-icon>
            от 300 грн
          </v-chip>
          <v-chip class="mr-2">
            <v-icon size="16" left>mdi-hand-left</v-icon>
            Бязь GOLD
          </v-chip>
        </div>

      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions class="p-card__buttons">
        <v-btn
          color="deep-purple accent-4"
          text
        >
          Купить
        </v-btn>
        <product-modal-vue/>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import ProductModalVue from './ProductModal.vue'
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

  &__image-row {
    position: absolute;
    top: 0;
    left: 10px;
    width: 100%;
    justify-content: flex-end;
  }
  &__buttons {
    width: 70%;
  }
}
</style>