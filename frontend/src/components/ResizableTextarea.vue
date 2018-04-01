<template>
  <div class="container-resizable-textarea">
    <textarea
      class="resizable-textarea"
      rows="1"
      placeholder="ResizableTextarea"
      v-on:keydown="autoSize($event)"
      v-on:blur="onBlurDetail($event)"
      v-on:focus="onFocus($event, index)"
      v-model="answer.detail"
    />
  </div>
</template>

<script>
export default {
  name: 'ResizableTextarea',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .resizable-textarea {
    width: 100%;
  }
</style>
