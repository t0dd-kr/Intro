<template>
  <div class="header">
    <div class="responsive-container">
      <div class="search-box">
        <input type="text" placeholder="검색">
        <img src="../assets/search.svg" onclick="">
      </div>

      <div class="name">
        <img src="../assets/header_logo.png">
      </div>

        <div class="button">
          <div class="login-button">
            <a href="#">로그인</a>
          </div>
          <div class="join-button">
            <a href="#">회원가입</a>
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
  .header{
    top : 0;
    background-color: rgb(4,147,243);
    width: 100%;
    height : 60px;
  }
  .responsive-container{
    position: relative;
    margin: auto;
    width: 1200px;
    text-align: center;
    top : 15px;
  }
  .search-box{
    position: absolute;
    display: inline-flex;
    float: left;

    left: 50px;

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
    top: 20px;
  }

  .button{
    display: inline-block;
    position: absolute;
    right: 50px;
    top : 8px;
    font-size: 16px;
  }
  .login-button, .join-button{
    text-decoration: none;
    color: white;
    display: inline;
  }
  .login-button{
    margin-right: 15px;
  }
  .join-button{
    border-style: solid;
    border-width: 1px;
    padding : 5px 8px 3px 8px ;
    border-radius: 4px;
  }
  a{
    text-decoration: none;
    color: white;
  }
</style>
