<template lang="html">
  <div class="index">
    <div class="header">
      <Header/>
    </div>
    <div class="intro-main-logo">
      <img src="../assets/main_logo.png" alt="메인로고">
        <div class="main-text">
          최고의 팀과 최고의 프로젝트를 시작하세요
        </div>
    </div>
  </div>

</template>

<script>
import Header from './Header'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped>
.header{
  width: 100%;
}
.intro-main-logo{
  width: 100%;
  background-color: rgb(241,247,251);
  text-align: center;
}
.intro-main-logo img{
  display: block;
  margin: auto;
  padding: 50px 0 30px 0;
}
.main-text{
  padding: 0 0 40px 0 ;
}

</style>
