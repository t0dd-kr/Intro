<template>
  <div class="container-editable-textarea">
    <textarea
      class="editable-textarea"
      rows="1"
      placeholder="EditableTextarea"
      v-on:keydown="autoSize($event)"
      v-on:blur="onBlurDetail($event)"
      v-on:focus="onFocus($event, index)"
      v-model="answer.detail"
    />
  </div>
</template>

<script>
export default {
  name: 'EditableTextarea',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editable-textarea {
  width: 100%;
}
</style>
