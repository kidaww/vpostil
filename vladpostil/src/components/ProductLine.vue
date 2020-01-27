<template>
  <div class="product-line-wrapper">
    <div class="product-line">
      <div class="product-line__photo">
        <img :src="require('@/assets/back.jpg')" alt="">
      </div>
      <div class="d-flex flex-column justify-space-around w-100" style="height: 100%">
        <p class="font-weight-thin ma-0 text-center" style="font-size: 21px">Луура 05</p>
        <div class="d-flex justify-space-between align-center w-100">
          <div class="product-line__select mx-2">
            <p class="font-weight-bold">Двойной</p>
          </div>
          <div class="product-line__count">
            <div class="d-flex w-100 align-center">
              <v-btn class="mx-2" fab dark small color="primary">
                <v-icon dark>mdi-minus</v-icon>
              </v-btn>
              <v-text-field
                class="product-content__input"
                label="Количество"
                solo
                rounded
                value="1"
                readonly
                hide-details
              ></v-text-field>
              <v-btn class="mx-2" fab dark small color="primary">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="product-line__select mx-2">
            <p class="font-weight-thin display-1">300 ГРН</p>
          </div>
          <div class="product-line__buttons d-flex justify-center align-center">
            <!-- TODO 
            <v-btn class="mr-2" outlined small fab color="indigo">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            -->
            <v-btn class="mr-2" outlined small fab color="red">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  data: () => ({
    sizeItems: [
      'Размер: Полуторный',
      'Размер: Двойной',
      'Размер: Семеный',
      'Размер: Евро'
    ]
  })
}
</script>

<style lang="scss" scoped>
.product-line-wrapper {
  width: 100%;
  height: 100px;
}
.product-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
 

  &__photo {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__select {
    p {
      margin: 0;
      text-align: center;
    }
  }

  &__count {
    width: 200px;
  }
}
</style>

<style lang="scss">
.product-content__input input {
  text-align: center;
}
</style>