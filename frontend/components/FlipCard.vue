<template>
  <div :class="flipped ? 'flip-container flipped' : 'flip-container'">
    <div
      class="flipper"
      @mouseover="flipped = true"
      @mouseleave="flipped = false"
    >
      <div class="front">
        <v-img
          src="/ph/cardfront.png"
          lazy-src="/ph/cardfront-lazy.png"
          class="flip-card"
        >
          <v-card color="transparent" elevation="0" dark style="padding: 15px">
            <v-card-title style="word-break: normal;">
              <slot name="header">Lorem, ipsum.</slot>
            </v-card-title>
          </v-card>
        </v-img>
      </div>
      <div class="back">
        <v-card
          style="padding:35px 35px 0px;"
          elevation="4"
          to="/contacts"
          class="flip-card"
        >
          <slot>
            <h1>John Doe</h1>
            <p style="margin-top: 5px">Architect & Engineer</p>
            <p>We love that guy</p>
          </slot>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlipCard',
  data() {
    return {
      flipped: false
    }
  }
}
</script>

<style type="text/css" scoped>
.flip-container {
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  -o-perspective: 1000px;
  perspective: 1000px;
}
.flip-container {
  margin-top: 10px;
}
.flipper {
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  position: relative;
  padding: 0px;
}
.front,
.back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  -ms-transition: 0.6s;
  -ms-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  top: 0;
  left: 0;
}
.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  position: absolute;
}
.flip-container.flipped .back {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.flip-container.flipped .front {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.front {
  z-index: 2;
}
.flip-card {
  height: 440px;
  width: 400px;
}
@media screen and (max-width: 465px) {
  .flip-card {
    height: 440px;
    width: 400px;
    transform: scale(0.9);
  }
}
@media screen and (max-width: 380px) {
  .flip-card {
    height: 440px;
    width: 100vw;
    transform: scale(0.87);
  }
}
</style>
