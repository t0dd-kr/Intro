<template lang="html">
  <div class="window_tile">
    <div class="tile1">

    </div>
    <div class="tile2">

    </div>
    <div class="tile3">

    </div>
    <div class="tile4">

    </div>
    <div class="tile5">

    </div>
    <div class="tile6">

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

  .window_tile{
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
  }
  .window_tile div {
    box-sizing: border-box;
    min-height: 150px;
    min-width: 150px;
  }
  .tile1, .tile2, .tile3, .tile4, .tile5, .tile6 {
    width: 100%;
  }
  .tile1 {
    background-color : #fbc2eb;
  }
  .tile2 {
    background-color: #f5576c;
  }
  .tile3 {
    background-color: #fa709a;
  }
  .tile4 {
    background-color: #43e97b;
  }
  .tile5{
    background-color : #38f9d7;
  }
  .tile6{
    background-color: #f9f586;
  }

  @media (min-width: 480px){
    .tile1, .tile2, .tile3, .tile4, .tile5, .tile6 {
      width: 50%
    }
    .tile1 {
      background-color : #cd9cf2;
    }
    .tile2 {
      background-color: #f6f3ff;
    }
  }
</style>
