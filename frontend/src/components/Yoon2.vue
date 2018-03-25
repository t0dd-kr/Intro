<template lang="html">
  <div class="ex">
    <div class="ex1">
    </div>
    <div class="ex2">
    </div>
    <div class="box">
      <div class="ex3">
      </div>
      <div class="ex4">
      </div>
    </div>
    <div class="ex5">
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style scoped>

  .ex {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
  }
  .ex div {
    box-sizing: border-box;
    min-height: 150px;
    min-width: 150px;
  }
  .ex1, .ex2, .ex3, .ex4, .ex5 {
    width: 100%;
  }
  .ex1 {
    background-color : #1d4586;
  }
  .ex2 {
    background-color: #3c77d9;
  }
  .ex3 {
    background-color: #cadaf8;
  }
  .ex4 {
    background-color: #d6dff0;
  }
  .ex5 {
    background-color: #dfe1e6;
  }
  @media (min-width: 600px) {
    .ex1, .ex2, .ex3, .ex4, .ex5 {
      width: 100%;
    }
  }
  @media (min-width: 600px) {
    .c1 {
      width: 100%;
    }
    .c2 {
      width: 20%;
    }
    .box {
      width: 80%;
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
