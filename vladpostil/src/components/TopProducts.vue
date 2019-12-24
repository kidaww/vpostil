<template>
  <div class="top-products mt-3">
    <p class="top-products__header">Новинки</p>
    <v-sheet
      class="mx-auto"
      elevation="1"
      max-width="1200"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
        show-arrows
      >
        <v-slide-item
          v-for="n in 15"
          :key="n"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
            height="250"
            width="300"
            @click="toggle"
          >
            <v-row
              class="fill-height"
              align="center"
              style="overflow: hidden"
              justify="center"
            >
              <v-img
                height="250"
                :src="require('@/assets/back.jpg')"
              ></v-img>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>

      <v-expand-transition>
        <v-sheet
          v-if="model != null"
          color="grey lighten-4"
          height="200"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <h3 class="title">Selected {{ model }}</h3>
          </v-row>
        </v-sheet>
      </v-expand-transition>
    </v-sheet>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.top-products {

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    font-size: 27px;
  }
}
</style>