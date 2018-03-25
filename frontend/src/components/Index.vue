<template>
  <div class="index">
    <div class="c1">
    </div>
    <div class="c2">
    </div>
    <div class="c3">
    </div>
    <div class="c4">
    </div>
    <div class="c5">
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

  .index div {
    box-sizing: border-box;
    min-height: 150px;
    min-width: 150px;
  }

  .c1, .c2, .c3, .c4, .c5 {
    width: 100%;
  }

  .c1 {
    background-color: #1d4586;
  }
  .c2 {
    background-color: #3c77d9;
  }
  .c3 {
    background-color: #cadaf8;
  }
  .c4 {
    background-color: #d6dff0;
  }
  .c5 {
    background-color: #dfe1e6;
  }
  @media (min-width: 600px) {
    .c2, .c3, .c4, .c5 {
      width: 50%;
    }
  }

  @media (min-width: 800px) {
    .c1 {
      width: 60%;
    }
    .c2 {
      width: 40%;
    }
    .c3, .c4, .c5 {
      width: 33.33%;
    }
  }

  @media (min-width: 800px) {
    .index {
      width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
