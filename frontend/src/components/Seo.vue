<template>
  <div class="seo">
    <div class="s1">
    </div>
    <div class="s2">
    </div>
    <div class="s3">
      <div class="s3-1">
      </div>
      <div class="s3-2">
      </div>
    </div>
    <div class="s4">
    </div>
  </div>
</template>
<script>
export default {
}
</script>

<style scoped>
  .seo {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
  }

  .seo div {
    box-sizing: border-box;
    min-height: 150px;
    min-width: 150px;
  }

  .s1, .s2, .s3, .s3-1, .s3-2, .s4 {
    width: 100%;
  }

  .s1 {
    background-color: #1d4586;
  }
  .s2 {
    background-color: #3c77d9;
  }
  .s3-1 {
    background-color: #cadaf8;
  }
  .s3-2 {
    background-color: #ffffff;
  }
  .s4 {
    background-color: #cadaf8;
  }

  @media (min-width: 600px) {
    .s1, .s2, .s3, .s4 {
      width: 100%;
    }
  }

  @media (min-width: 700px) {
    .s1 {
      width: 100%;
    }
    .s2 {
      width: 30%;
    }
    .s3 {
      width: 70%;
    }
    .s4 {
      width :100%;
    }
  }

  @media (min-width: 800px) {
    .s1 {
      width: 100%;
    }
    .s2 {
      width: 20%;
    }
    .s3 {
      width: 60%;
    }
    .s4 {
      width: 20%;
    }
  }
</style>
