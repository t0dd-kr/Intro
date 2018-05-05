<template>
  <div class="header">
    <div class="responsive-container">
      <div class="search-box">
        <input type="text" placeholder="검색">
        <img src="../assets/search.svg" onclick="">
      </div>
      <div class="name">
        <img src="../assets/header_logo.png" alt="">
      </div>
        <div class="btn-join">
          <a href="./login">로그인</a>
          <a href="#" style="border-style: solid; border-width: 1px; padding : 5px 8px 3px 8px ;border-radius: 4px; margin-left: 10px ;">회원가입</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .header{
    top : 0;
    background-color: rgb(4,147,243);
    width: 100%;
    height : 60px;
  }
  .responsive-container{
    margin: auto;
    width: 1200px;
    text-align: center;
    vertical-align: middle;
  }
  .search-box{
    display: inline-flex;
    float: left;
    margin-left: 60px;
    margin-top: 13px;
  }
  .search-box input{
    height: 30px;
    width: 200px;
    padding-left: 8px;
    border-style: none;
    border-radius: 8px 0px 0px 8px;
    outline-style: none;
  }
  .search-box img{
    width: 20px;
    height: 32px;
    padding-right: 8px;
    background-color: white;
    border-radius: 0px 8px 8px 0px;
  }
  .name{
    display: inline-block;
    margin-top: 5px;
  }
  .name img{
    margin-top: 8px;
  }
  .btn-join{
    float: right;
    margin-top: 22px;
    margin-right: 60px;
    font-size: 16px;
  }
  .btn-join a{
    text-decoration: none;
    color: white;
  }

</style>
