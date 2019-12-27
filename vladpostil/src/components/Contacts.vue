<template>
  <div class="contacts">
    <div class="d-flex contacts__content my-12">
      <div class="contacts__text">
        <p class="font-weight-bold display-1 mb-6">Контакты</p>
        <p class="font-weight-light phone">+380509487816</p>
        <p class="font-weight-light phone">+380509487816</p>
        <p class="font-weight-light phone">+380509487816</p>
        <p class="font-weight-light">bulakhvad@gmail.com</p>
        <p class="font-weight-light">п.Песочин, Харьковская область, Украина</p>
      </div>
      <v-divider vertical></v-divider>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.7587198259707!2d36.11112431593123!3d49.95962843048926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41279f41f40a2fbb%3A0x8ab81f14d03f045b!2z0YDRi9C90L7QuiAi0KDRi9C20L7QsiI!5e0!3m2!1sru!2sua!4v1577383698355!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.contacts {

  &__content {
    max-width: 1200px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
  }
  &__text {
    p {
      margin: 5px 0;
      &.phone {
        text-decoration: underline;
      }
    }
  }
}
</style>