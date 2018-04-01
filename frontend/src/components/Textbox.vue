<template>
  <div class="Textbox">
      <input v-bind:input="textType" placeholder="입력하세요">
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .Textbox {
    width : 100%
    height : 1.5rem;
    padding: 0.5rem 1.5rem 0.5rem 5rem;
  }
</style>
