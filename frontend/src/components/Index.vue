<template>
  <div class="index">
    <div class="container">
      <Textbox/>
    </div>
    <div class="container">
      <Button/>
    </div>
    <div class="container">
      <Chatbox/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
  }
  .container {
    width:100%;
    min-height: 300px;
  }
</style>
