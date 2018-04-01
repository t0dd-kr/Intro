<template lang="html">
  <div class="button">
    <input type="button" value="login">
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .button input{
    width: 100%;
    height: 39px;
    font-size: 1rem;
    background-color: #ccc;
    border-radius: 0.5rem;
    border: none;
    outline: none;
  }
  .button input:active{
    position: relative;
    background-color: #999;
    outline: none;
  }
</style>
