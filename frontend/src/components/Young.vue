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
      Let's Introduce your self
      Let's2
      Let's3
    </div>
    <div class="tile5">
      Let's Introduce your self
    </div>
    <div class="tile6">
      tile6
    </div>
    <div class="wrap">
      <div class="container">
        <h1>Without transition</h1>
        <div class="box1 box">

        </div>
      </div>
      <div class="container">
        <h1>With transition</h1>
        <div class="box2 box">

        </div>

      </div>
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
    animation-duration: 3s;
    animation-name: slidein;
  }
  .tile2_1{
    font-size: 5rem;
    animation-duration: 3s;
    animation-name: slidein2;
    animation-iteration-count: infinite;
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
    font-family: lato;
    font-size: 20px;
  }
  .tile5{
    transition: all 3s;
    height: 10rem;
    line-height: 18rem;
    font-family: lato;
    font-size: 20px;
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

  .wrap {
    margin: 50px;
  }

  .container {
    display: inline-block;
    width: 100%;
    border-color: red;
    border-style: solid;
  }

  h1 {
    color: lightgray;
    font-family: lato;
    font-size: 20px;
    font-weight: 2000;
    padding: 20px;
    text-align: center;
    text-transform: uppercase;
  }

  .box {
    border-radius: 5px;
    height: 40px;
    margin: 50px auto;
    width: 80px;
  }
  .wrap:hover .box {
    transform: scale(2);
  }

  .box1 {
    background: mediumturquoise;
  }

  .box2 {
    background: #2b3f53;
    transition: all 1s;
  }

  /* p */
  p {
  animation-duration: 3s;
  animation-name: slidein;
  }

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
    color: red;
  }

  to {
    margin-left: 2.5rem;
    width: 100%;
    color: blue;
  }
}
@keyframes slidein2{
  from {
    margin-left: 0;
    width: 300%;
    color: red;
  }

  to {
    margin-left: 2.5rem;
    width: 100%;
    color: blue;
  }
}

</style>
