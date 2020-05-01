<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      tile
      outlined
      to="/contacts"
      :class="hover ? 'color' : ''"
      style="width: 100%; height: 100%;"
    >
      <v-card-title class="num">
        <slot name="title">Web is cool</slot>
      </v-card-title>
      <v-card-text class="textt">
        <slot>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
          molestiae.
        </slot>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<style css>
.color {
  background-color: #fff5f5 !important;
}
.num {
  font-size: 150px;
  font-weight: 900;
  color: white;
  text-shadow: 0px 0px 30px rgba(129, 236, 236, 0.582);
  transform: translateY(27px) translateX(-20px);
}
.textt {
  font-size: 39px;
  font-weight: 500;
  line-height: 35px;
  transform: translateY(-25px) translateX(30px);
}
@media screen and (max-width: 380px) {
  .textt {
    font-size: 39px;
    font-weight: 500;
    line-height: 35px;
    transform: translateY(-25px) translateX(30px);
  }
}
</style>

<script>
export default {
  name: 'SmallCardNum'
}
</script>
