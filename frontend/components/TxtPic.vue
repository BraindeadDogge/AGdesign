<template id="body">
  <div
    class="about-section"
    :style="`background: no-repeat ${side}/55% url(${url})`"
  >
    <div v-if="side == 'left'" class="inner-container" style="float: right;">
      <h1>
        <slot name="header">
          Lorem, ipsum.
        </slot>
      </h1>
      <p class="text">
        <slot>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod velit
          quos esse aut inventore deleniti sit odio sapiente porro voluptate
          unde iure, at sequi cum cupiditate laboriosam ut. Dignissimos,
          tenetur.
        </slot>
      </p>
      <div class="skills">
        <slot name="footer">
          <span>Lorem.</span>
          <span>Lorem.</span>
          <span>Lorem.</span>
        </slot>
      </div>
    </div>
    <div v-else class="inner-container" style="float: left;">
      <h1>
        <slot name="header">
          Lorem, ipsum.
        </slot>
      </h1>
      <p class="text">
        <slot>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod velit
          quos esse aut inventore deleniti sit odio sapiente porro voluptate
          unde iure, at sequi cum cupiditate laboriosam ut. Dignissimos,
          tenetur.
        </slot>
      </p>
      <div class="skills">
        <slot name="footer">
          <span>
            <span>Lorem.</span>
            <span>Lorem.</span>
            <span>Lorem.</span>
          </span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['url', 'side']
}
</script>

<style lang="css">
.body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
}

.about-section {
  background-color: transparent;
  overflow: hidden;
  padding: 200px 0;
}

.inner-container {
  width: 55%;
  background-color: #f2f2f2;
  padding: 150px;
}

.inner-container h1 {
  margin-bottom: 30px;
  font-size: 35px;
  font-weight: 900;
}

.text {
  font-size: 17.5px;
  color: #545454;
  line-height: 30px;
  text-align: justify;
  margin-bottom: 40px;
}

.skills {
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 20px;
}

#space {
  color: transparent;
  font-size: 0.5px;
}

@media screen and (max-width: 1200px) {
  .inner-container {
    padding: 70px;
  }
}

@media screen and (max-width: 1099px) {
  .about-section {
    background-size: 100% !important;
    padding: 100px 40px;
  }
  .inner-container {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .about-section {
    padding: 0;
  }
  .inner-container {
    padding: 60px;
  }
}
</style>
