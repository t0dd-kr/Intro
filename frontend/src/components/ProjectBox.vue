<template>
  <div class="projectBox">
    <!-- 프로젝트 박스 내부의 사진 -->
    <div class="projectPicture">

    </div>
    <!-- 프로젝트 내부 설명 글  -->
    <div class="projectExplain">
      <p>비탈릭 부테린</p>
      <p>이더리움 프로젝트</p>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .projectBox{
    height: 280px;
    width : 330px;
    box-shadow: 0px 5px 5px 0px;
    overflow: auto;
  }

  .projectBox .projectPicture{
    /* display: inline-block; */
    width : 100%;
    height: 230px;
    margin-top: 0px;
    text-align:center;
    vertical-align: middle;
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/VitalikButerinProfile.jpg/500px-VitalikButerinProfile.jpg");
    background-size: cover;
  }
  .projectBox .projectPicture img{
    position: relative;
    text-align: center;
    max-width: 100%;
    max-height: 100%;
  }
  .projectBox .projectExplain{
    display: block;
    text-align: center;
    overflow: auto;
  }
  .projectBox .projectExplain p{
    display: block;
    margin: 2px 0px 2px 0px;
  }
</style>
