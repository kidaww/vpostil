<template>
  <div class="home" id="home">
    <cart-modal :active="cartActive" @close="cartActive = false"/>
    <floating-cart @click.native="cartActive = true"/>

    <navigation-vue @cart="cartActive = true"/>
    <header-vue/>
    <!-- <header-sticky-vue/> -->
    <!-- <top-vue/> -->
    <product-list/>
    <!-- <additional-products-list/> -->
    <why-we/>
    <delivery/>
    <contacts/>

    <footer-vue/>
  </div>
</template>

<script>
// import Scrollbar from 'smooth-scrollbar';
import FloatingCart from '../components/CartFloat.vue';
import CartModal from '../components/CartModal.vue';

import HeaderVue from '../components/Header.vue'
import NavigationVue from '../components/Navigation.vue';
import TopVue from '../components/TopProducts.vue';
import ProductList from '../components/ProductsList.vue';
import AdditionalProductsList from '../components/AdditionalProductList.vue';
import HeaderStickyVue from '../components/HeaderSticky.vue';
import FooterVue from '../components/Footer.vue';
import WhyWe from '../components/WhyWe.vue';
import Delivery from '../components/Delivery.vue';
import Contacts from '../components/Contacts.vue';

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
    WhyWe,
    Delivery,
    Contacts,
    FloatingCart,
    CartModal,
  },
  data: () => ({
    cartActive: false,
  }),
  mounted() {
    // Scrollbar.init(document.querySelector('#home'), {});
  }

}
</script>

<style lang="scss" scoped>
.home {
  /*
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  */
}
</style>
