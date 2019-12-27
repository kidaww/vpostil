<template>
  <div class="delivery">
    <p class="font-weight-light display-2 text-center my-12">Доставка и оплата</p>
    <div class="d-flex justify-space-around mb-12 delivery__content">
      <div class="delivery__item item" v-for="i in 5" :key="i">
        <div class="item__step">{{ i }}</div>
        <div class="item__icon">
          <v-icon class="w-100" color="grey darken-4" size="100">mdi-cart</v-icon>
        </div>
        <div class="item__title">Заказ на сайте</div>
        <div class="item__text pt-2">Добавте заказ в корзину и впишите Ваши контактные данные</div>
      </div>
    </div>
    <v-divider class="my-5 my-divider"></v-divider>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.delivery {

  &__content {
    max-width: 1200px;
    margin: 0 auto;
  }
  &__item {
    width: 18%;
    height: 200px;
  }
}

.item {
  position: relative;
  &__step {
    position: absolute;
    top: 0;
    left: 25%;
    font-size: 22px;
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fea352;
      border: 2px solid #fff;
      border-radius: 50%;
      opacity: 0.75;
      z-index: -1;
    }
  }
  &__icon {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__title {
    height: 10%;
    text-align: center;
    font-weight: bold;
  }
  &__text {
    height: 40%;
    text-align: center;
  }
}
</style>