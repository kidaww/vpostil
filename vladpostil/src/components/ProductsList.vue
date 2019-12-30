<template>
  <div class="products">
    <product-modal-vue :active="productModalActive" :productData="currentProductData" @close="productModalActive = false"/>
    <!-- <product-buy :active="simpleProductModalActive" :productData="currentProductData" @close="simpleProductModalActive = false"/>-->

    <v-divider class="products__divider my-5"></v-divider>
      <div class="d-flex justify-center align-center flex-column products__header v-card__title products__title">
        <p class="font-weight-light display-1">Лучшее постельное зимы 2019</p>
        <p class="font-weight-light display-2">Бязь ГОЛД</p>
      </div>
    <v-divider class="products__divider my-3"></v-divider>
    <div class="products__table">
      <product-card v-for="i in 17" :key="i" :number="i" @showInfo="productModalActive = true" @buy="simpleProductModalActive = true"/>
    </div>
    <div class="my-3 products__load d-flex justify-center align-center">
      <v-btn
        color="primary"
        large
        outlined
      >
        Загрузить еще
      </v-btn>
    </div>
  </div>
</template>

<script>
import ProductModalVue from './ProductModal.vue';
import ProductCard from './ProductCard.vue';
// import ProductBuy from './SimpleProductModal.vue';

export default {
  components: {
    ProductCard,
    ProductModalVue,
    // ProductBuy
  },
  data: () => ({
    productModalActive: false,
    simpleProductModalActive: false,
    currentProductData: {},
  })
}
</script>

<style lang="scss" scoped>
.products {

  &__table {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
  }

  &__divider {
    max-width: 1000px;
    margin: 0 auto;
  }

  &__title {
    padding: 0;
    p {
      margin: 0;
      text-transform: uppercase;
    }
  }
  // flex-wrap: wrap;
  // justify-content: space-between;

  @media screen and (max-width: 1210px) {
    .products__table {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 800px) {
    .products__table {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>