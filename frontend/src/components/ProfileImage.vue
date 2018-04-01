<template>
  <div class="container-profile-image">
    <div class="profile-image">
      <label for="imgFile">
        <img src="../assets/profile_temp.png" alt="" width="300px" height="300px"/>
      </label>
      <input type="file" id="imgFile" accept="image/*" @change="readURL"/>
    </div>
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
    readURL: function (event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = function (e) {
          document.getElementsByTagName('img')[0].setAttribute('src', e.target.result)
        }
        reader.readAsDataURL(input.files[0])
      }
    }
  }
}
</script>

<style scoped>
  .container-profile-image, .profile-image, a, input {
    padding: 0;
    margin: 0;
    width: 300px;
    height: 300px;
  }
  img {
    background-image: url('../assets/profile_edit.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }
  input[type="file"] {
    display: none;
  }
</style>
