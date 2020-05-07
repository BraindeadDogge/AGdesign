<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      tile
      to="/contacts"
      :class="hover ? 'color' : ''"
      style="width: 100%; height: 100%;"
    >
      <v-card-title style="word-break: normal;">
        <v-icon large left>
          <slot name="icon">mdi-circle-slice-8</slot>
        </v-icon>
        <span class="title font-weight-light">
          <slot name="title">Web is cool</slot>
        </span>
      </v-card-title>
      <v-card-text class="headline font-weight-bold">
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
  background-color: #303030 !important;
}
</style>

<script>
export default {
  name: 'SmallCard'
}
</script>
