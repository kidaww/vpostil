<template>
  <v-dialog v-model="active" scrollable max-width="300px" @click:outside="$emit('close')">
    <v-card width="300px" height="300px">

    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    active: Boolean,
  }
}
</script>

<style lang="scss" scoped>

</style>