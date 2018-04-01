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

textarea {
  resize: none;
  overflow: hidden;
  display: block;
  width: 100%;
  border-collapse: collapse;
  box-sizing: border-box;
  background-color: rgb(237, 237, 237);
  font-size: 1rem;
  border-radius: 0.5rem;
  border: none;
  height: 45px;
  padding: 11px 0px 12px 10px;
  word-wrap: break-word;
}
textarea:focus {
  outline: solid 1px #CCCCCC;
}
.container-editable-textarea {
  width: 100%;
}
.editable-textarea {
  overflow: hidden;
  transition: background-color .25s;
  font-size: 1rem;
}
.editable-textarea:focus {
  background-color: #EDEDED;
  border: none;
}
</style>
