<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <template v-slot:activator="{ on }">
      <v-btn
        class="w-45"
        color="deep-purple accent-4"
        text
        v-on="on"
      >
        Подробнее
      </v-btn>
    </template>
    <v-card>

      <v-toolbar dark style="border-radius: 0" color="grey darken-4">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Подробнее ...</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false">Закрыть</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <div class="product-content row">
        <div class="product-content__section product-content__section--photo photo">
          <img
            class="photo__block"
            :src="require('@/assets/back.jpg')"
          >
        </div>
        <v-divider vertical></v-divider>
        <div class="product-content__section product-content__section--desc">
          <p class="font-weight-light display-2">Лаура №01</p>
          <p class="font-weight-light display-1">300 грн</p>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
  })
}
</script>

<style lang="scss" scoped>
.photo {

  &__block {
    max-width: 100%;
    max-height: 100%;
  }
}
.product-content {
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 64px);

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
      justify-content: flex-start;
      align-items: flex-start;
      padding: 100px 0;
    }
  }
}
</style>