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
    width: 2rem;
  }
  .mychat {
    position: relative;
    background: #88b7d5;
    border: 4px solid #caeaff;
  }
  .arrow_box:after, .arrow_box:before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  .arrow_box:after {
    border-color: rgba(136, 183, 213, 0);
    border-top-color: #88b7d5;
    border-width: 30px;
    margin-left: -30px;
  }
  .arrow_box:before {
    border-color: rgba(202, 234, 255, 0);
    border-top-color: #caeaff;
    border-width: 36px;
    margin-left: -36px;
  }
</style>
