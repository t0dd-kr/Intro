<template lang="html">
  <div class="window_tile">
    <div class="tile1">
    </div>
    <div class="tile2">
      Say
    </div>
    <div class="tile2_1">
      Hello
    </div>
    <div class="tile3">
    </div>
    <div class="tile4">
      <p>
      Let's Introduce your self
      </p>
      <p>Let's2</p>
      Let's3
    </div>
    <div class="tile5">
      Let's Introduce your self
    </div>
    <div class="tile6">
      tile6
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
    min-width: 50px;
  }

  .tile1, .tile2, .tile2_1, .tile3, .tile4, .tile5, .tile6 {
    width: 100%;
    align-content: center;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    /*border-radius: 1rem;*/
    /*border-style: solid;*/
    border-color: red;
    font-family: "Chronicle Display A","Chronicle Display B",Georgia;
  }
  .tile1 {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 10px;

    background-image: url(../assets/logo.png);
    background-repeat: no-repeat;
    background-color: #96fbc4;
    background-size:contain;
    background-position: center;
    line-height: 4rem;
    height: 2rem;
    width: 100%;
    color: white;
    margin-top: 1rem;
  }
  .tile2 {
    font-size: 5rem;
    height: 20rem;
    line-height: 35rem;
  }
  .tile2_1{
    font-size: 5rem;
  }
  .tile3 {
    height: 1rem;
    background-color: red;
    width:40%;
    height: 3px;
  }
  .tile4{
    height: 10rem;
    line-height: 18rem;
  }
  .tile5{
    height: 10rem;
    line-height: 18rem;
  }
  .tile6{
    height: 50rem;
    background-color: #f9f586;
  }

  @media (min-width: 600px) {
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

  @media (min-width: 800px) {
    .window_tile {
      width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
