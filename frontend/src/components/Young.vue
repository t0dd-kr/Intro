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

</style>
