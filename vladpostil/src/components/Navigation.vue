<template>
  <div>
    <v-app-bar
      color="grey darken-4"
      dark
      fixed
    >
      <v-app-bar-nav-icon v-if="false"></v-app-bar-nav-icon>

      <div class="d-flex">
        <v-btn color="white" text>Контакты</v-btn>
        <v-btn color="white" text>Доставка и оплата</v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-btn
        text
        @click="$emit('cart')"
      >
        Корзина
        <v-icon right dark>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<style lang="scss">
</style>