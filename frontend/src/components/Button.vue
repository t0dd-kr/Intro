<template lang="html">
  <div class="button">
    <input type="button" value="login" v-on:click="login">
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .button input {
    width: 100%;
    height: 2.5rem;
    font-size: 1rem;
    background-color: #ccc;
    border-radius: 0.5rem;
    border: none;
  }
  .button input:active {
    position: relative;
    top: 2px;
    background-color: #999;
  }


</style>
