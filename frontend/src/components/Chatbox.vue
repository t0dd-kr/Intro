<template lang="html">
  <div class="chatbox">
    <div class="mychat">
      test-mychat
    </div>
    <div class="yourchat">
      test-yourchat
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style scoped>
  .chatbox{
    width: 4rem;
  }
  .mychat {
      display: inline-block;
      position: relative;
      background: #94c1f7;
      height: 7rem;
      width: 10rem;
      margin: 1rem;
      border-radius: 10px;
      margin-left: 5rem;
  }
  .mychat::after {
      content: '';
      position: absolute;
      height: 50px;
      width: 50px;
      border-radius: 25px;
      z-index: -1;
      background: #fff;
      bottom: -20px;
      left: 8.5rem;
  }
  .mychat::before {
      content: '';
      position: absolute;
      height: 50px;
      width: 50px;
      border-radius: 25px;
      z-index: -1;
      background: #94c1f7;
      bottom: -15px;
      left: 7.5rem;
  }
  .yourchat {
      display: inline-block;
      position: relative;
      background: #efabe2;
      height: 7rem;
      width: 10rem;
      margin: 1rem;
      border-radius: 10px;
  }
.yourchat::after {
    content: '';
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 25px;
    z-index: -1;
    background: #fff;
    bottom: -20px;
    left: -1.5rem;
}
.yourchat::before {
    content: '';
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    z-index: -1;
    background: #efabe2;
    bottom: -15px;
    left: -0.5rem;
}
</style>
