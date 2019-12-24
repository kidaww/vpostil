<template>
  <div class="header-sticky mt-6">
     <v-toolbar flat class="align-center">
        <v-switch v-model="avaiable" class="mx-2" label="В наличии"></v-switch>
        <v-spacer></v-spacer>
        <div>
          <v-select
            class="mx-2"
            :items="items"
            label="Сортировать по"
            outlined
            dense
          ></v-select>
        </div>
        <div>
          <v-select
            class="mx-2"
            :items="types"
            label="Категория"
            outlined
            dense
          ></v-select>
        </div>
     </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    avaiable: false,

    items: [
      'Сначала дешевые',
      'Сначала дорогие',
      'Сначала новые',
      'Сначала старые',
    ],
    types: [
      'Тип 1',
      'Тип 2',
      'Тип 3'
    ]
  })
}
</script>

<style lang="scss" scoped>
.header-sticky {
  max-width: 1200px;
  margin: 0 auto;
}
</style>