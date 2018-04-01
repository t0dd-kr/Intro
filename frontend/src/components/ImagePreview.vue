<template lang="html">
  <div class="container-image-preview">
    <div class="darken"></div>
    <div class="image-preview" v-on:click="activeTransition">

    </div>

  </div>
</template>

<script>
export default {
  name: 'ImagePreview',
  data () {

  },
  methods:{
    activeTransition: function (selector, name, index) {
      if (window.$(selector).hasClass(name) === false) {
        window.$(selector).addClass(name)
      }
    },
    deactiveTransition: function (selector, name, index) {
      while (window.$(selector).hasClass(name) === true) {
        window.$(selector).removeClass(name)
      }
    }
}

}
</script>

<style scoped>
  .image-preview {
    /* background-image: "imageSrc"; */
    background-image: url('https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png');
    margin: 1rem;
    width: 300px;
    height: 300px;
    background-repeat:no-repeat;
    background-size: 300px;
  }
  .darken {
    position:fixed;
    top: 0px;
    left: 0px;
    width: 0%;
    height: 0%;
    z-index: -1;
    transition: background-color .25s;
  }
  .darken-active {
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    z-index: 10;
  }
</style>
