<template>
  <div class="textbox">
      <input v-bind:type="textType" placeholder="입력하세요">
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .textbox input{
    width : 100%;
    height : 2rem;
    border: none;
    padding-left: 0.5rem;
    border-radius: 0.5rem;
    background-color: rgb(237,237,237)
  }
</style>
