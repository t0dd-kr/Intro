<template lang="html">
  <div class="container">
    <div class="yoon">
      <div class="container-high">
        <div class="container-question-row">
          <div class="high-left-question">
            Q.
        </div>
          <div class="high-center-question">
          What's your e-mail and password?
        </div>
      </div>
      <div class="container-middle">
        <div class="mid-left-answer">
          A.
        </div>
        <div class="mid-center-item">
          <div class="col">
            <div class="answer">
              <input type="email" class="email" name="email" placeholder="e-mail">
            </div>
            <div class="answer1">
              <input type="password" class="password" name="password" placeholder="password">
            </div>
            <div class="answer2">
              <div class="button-1">
                <div class="eff-1"></div>
                <a href="#"> Touch me </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-low">
        <div class="error-notice-low">
          0 error occured
        </div>
      </div>
      </div>
      <div class="container-low">
      </div>
      </div>
      </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .container {
    width: 40%;
    color: #000;
    background-color: rgb(224, 226, 227);
    border-radius: 0.3rem;

  }
  .container-middle {
    background-color: rgb(255, 255, 255);
    padding: .75rem;
  }
  .container-question-row {
    padding: .75rem;
    margin: 0;
    max-width: 100%;
  }
  .high-left-question {
    display: block;
    float: left;
    padding-right: 1rem;
    padding-top: 0rem;
    font-size: 1.5rem;
    line-height: 0.9em;

  }
  .mid-left-answer {

    float: left;
    padding-right: 1rem;
    padding-top: 0rem;
    font-size: 1.5rem;
    line-height: 3em;
}
  .mid-center-item {
    margin-left: 10%;
}

  .high-center-question {
    font-size: 1rem;
  }
  .container-low {
    padding-left: 7rem;
    background-color: rgb(255, 224, 224);
    border-bottom-right-radius: 0.24rem;
    border-bottom-left-radius: 0.24rem;
}
  .button-1{
  width:100%;
  height:40px;
  border:2px solid #34495e;
  text-align:center;
  cursor:pointer;
  position:relative;
  box-sizing:border-box;
  overflow:hidden;
  margin:0 0 5px 0;
}
.button-1 a{
  font-family:arial;
  font-size:18px;
  color:#34495e;
  text-decoration:none;
  line-height:36px;
  transition:all .5s ease;
  z-index:2;
  position:relative;
}
.eff-1{
  width:100%;
  height:50px;
  top:-2px;
  right:100%;
  background:#34495e;
  position:absolute;
  transition:all .5s ease;
  z-index:1;
  }
  .button-1:hover .eff-1{
    right:0;
  }
  .button-1:hover a{
    color:#fff;
  }
  .email {

    width: 98%;
    height: 2rem;
    background-color: #e9e9e9;
    border-radius: 0.3rem;
  }
  .password {
    width: 98%;
    height: 2rem;
    background-color: #e9e9e9;
    border-radius: 0.3rem;
  }

</style>
