<template lang="html">
  <div class="window_tile">
    <div class="tile1">
      tile1
    </div>
    <div class="tile2">
      tile2
    </div>
    <div class="tile3">
      <div class="test1">
        tile3-1
      </div>
      <div class="test2">
        tile3-2
      </div>
    </div>
    <div class="tile4">
      tile4
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

  .tile1 {
    background-color : #fbc2eb;
  }
  .tile2 {
    background-color: #f5576c;
  }
  .test1 {
    background-color: #fa709a;
  }
  .test2 {
    background-color: #2575fc;
  }
  .tile4 {
    background-color: #43e97b;
  }
  .tile5{
    background-color : #38f9d7;
  }

  .tile1, .tile2, .tile3, .tile4 {
    width : 100%
  }

  @media (min-width: 600px) {
    .tile2 {
      width: 20%;
    }
    .tile3 {
      width: 80%
    }
  }
  @media (min-width: 800px) {
    .tile2 {
      width: 20%;
    }
    .tile3 {
      width: 60%
    }
    .tile4 {
      width: 20%
    }
  }


</style>
