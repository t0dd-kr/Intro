<template>
  <div class="container-editable-textarea">
    <textarea
      class="editable-textarea"
      rows="1"
      placeholder="editableTextarea"
      v-on:keydown="autoSize($event)"
      v-on:blur="onBlur($event)"
    />
  </div>
</template>

<script>
export default {
  name: 'EditableTextarea',
  data () {
    return {
      enterAble: true
    }
  },
  methods: {
    autoSize: function (event) {
      var el = event.target
      if (event.keyCode === 13) {
        if (!this.enterAble) {
          event.preventDefault()
          el.blur()
        }
      }
      setTimeout(function () {
        el.style.cssText = 'height:auto; padding:0'
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = 'height:' + (el.scrollHeight + 21) + 'px'
      }, 0)
    },
    onBlur: function (event) {
      var el = event.target
      while (el.value[el.value.length - 1] === '\n') {
        el.value = el.value.slice(0, -1)
        this.autoSize(event)
      }
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
  height: 39px;
  padding: 11px 0px 12px 10px;
  word-wrap: break-word;
}
textarea:focus {
  outline: solid 1px #CCC;
}
.container-editable-textarea {
  width: 100%;
}
.editable-textarea {
  background-color: #FFF;
  overflow: hidden;
  transition: background-color .25s;
  font-size: 1rem;
}
.editable-textarea:focus {
  background-color: #EDEDED;
  border: none;
}
</style>
