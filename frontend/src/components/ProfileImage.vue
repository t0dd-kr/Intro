<template>
  <div class="container-profile-image">
    <a href="javascript:loadImg();">
      <div class="profile-image">
        <img src="" alt=""/>
        <input type="file" accept="image/*"/>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ProfileImage',
  data () {
    return {
    }
  },
  methods: {
    loadImg: function () {
    }
  }
}
</script>

<style scoped>
  .profile-image, a {
    width: 200px;
    height: 200px;
  }
</style>
