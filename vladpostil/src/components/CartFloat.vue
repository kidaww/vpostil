<template>
  <div class="cart-float">
    <v-card width="100" height="100" class="cart-float__card d-flex flex-column align-center justify-space-around">
      <v-icon size="54">mdi-cart</v-icon>
      <p class="font-weight-light mb-0" style="font-size: 21px">700 грн</p>
    </v-card>
  </div>
</template>


<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.cart-float {
  position: fixed;
  right: 25px;
  top: 75px;
  width: 100px;
  min-height: 100px;
  cursor: pointer;
  z-index: 5;
}
</style>