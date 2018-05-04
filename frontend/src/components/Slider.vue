<template lang="html">
  <div class="body">
    <div class="slide-container">
      <div class="slide">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="button">
      <input type="button" value="<-" v-on:click="onClick(-1)">
      <input type="button" value="->" v-on:click="onClick(1)">
    </div>
  </div>
</template>
<script>
export default{
  name: 'Body',
  data () {
    return {
      curPosition: 0,
      direction: 0
    }
  },
  methods: {
    onClick: function (n) {
      if (n === 1) {
        this.curPosition += 1
        if (this.curPosition === 3) {
          this.curPosition = 0
        }
      } else if (n === -1) {
        this.curPosition -= 1
        if (this.curPosition === -1) {
          this.curPosition = 2
        }
      }
      switch (this.curPosition) {
        case 0: {
          document.getElementsByClassName('slide')[0].style.left = '0px'
          break
        }
        case 1: {
          document.getElementsByClassName('slide')[0].style.left = '-300px'
          break
        }
        case 2: {
          document.getElementsByClassName('slide')[0].style.left = '-600px'
          break
        }
      }
    }
  }
}
</script>
<style scoped>
  .body {
    background-color:
  }
  .button {
    display: inline-flex;
    width: 60px;
  }
  .slide-container {
    overflow: hidden;
    width: 300px;
    height: 300px;
    display: block;
    margin: auto;
  }
  .slide {
    display: flex;
    width: 900px;
    transition: left .5s;
    left: 0px;
    position: relative;
  }
  .slide > div {
    display: inline-flex;
    width: 300px;
    height: 300px;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  .slide > div:nth-child(1) {
    background-image: url('http://cphoto.asiae.co.kr/listimglink/6/2017053018525594445_1.jpg');
  }
  .slide > div:nth-child(2) {
    background-image: url("http://img.etoday.co.kr/pto_db/2016/05/20160527112846_878147_600_900.jpg");
  }
  .slide > div:nth-child(3) {
    background-image: url("https://t1.daumcdn.net/news/201702/13/chosun/20170213145513172izse.jpg");
  }
  .slide > div:nth-child(4) {
    background-image: url("https://i.pinimg.com/originals/ae/a8/f9/aea8f96726073ca1f4f1e5f9e4c8ff44.jpg");
  }
</style>
