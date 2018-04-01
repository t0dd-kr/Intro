<template>
  <div class="container-profile-image">
    <a href="javascript:loadImg();">
      <div class="profile-image">
        <img src="../assets/profile.png" alt="" width="200px" height="200px"/>
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
  .container-profile-image {
    width: 100%;
  }
  .profile-image, a {
    padding: 0;
    margin: 0;
    width: 200px;
    height: 200px;
  }
</style>
