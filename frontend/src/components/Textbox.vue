<template>
  <div class="textbox">
      <input v-bind:input="textType" placeholder="입력하세요">
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .textbox input{
    width : 100%;
    height : 1.5rem;
    padding-left: 0.5rem;
  }
</style>
