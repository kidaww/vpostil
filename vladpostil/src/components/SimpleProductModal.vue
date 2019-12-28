<template>
  <v-dialog v-model="active" scrollable max-width="500px" @click:outside="$emit('close')">
    <v-card min-width="300px" min-height="300px">
      <product-line/>
    </v-card>
  </v-dialog>
</template>

<script>
import ProductLine from '../components/ProductLine';

export default {
  props: {
    active: Boolean,
  },
  components: {
    ProductLine,
  }
}
</script>

<style lang="scss" scoped>

</style>