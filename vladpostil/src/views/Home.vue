<template>
  <div class="home">
    <navigation-vue/>
    <header-vue/>
    <!-- <header-sticky-vue/> -->
    <!-- <top-vue/> -->
    <product-list/>
    <!-- <additional-products-list/> -->
    <why-we/>
    <footer-vue/>
  </div>
</template>

<script>
import HeaderVue from '../components/Header.vue'
import NavigationVue from '../components/Navigation.vue';
import TopVue from '../components/TopProducts.vue';
import ProductList from '../components/ProductsList.vue';
import AdditionalProductsList from '../components/AdditionalProductList.vue';
import HeaderStickyVue from '../components/HeaderSticky.vue';
import FooterVue from '../components/Footer.vue';
import WhyWe from '../components/WhyWe.vue';

export default {
  name: 'home',
  components: {
    HeaderVue,
    NavigationVue,
    TopVue,
    ProductList,
    AdditionalProductsList,
    HeaderStickyVue,
    FooterVue,
    WhyWe
  }

}
</script>

<style lang="scss" scoped>
.home {
  // height: 200vh;
  // background-color: #fff;
}
</style>
