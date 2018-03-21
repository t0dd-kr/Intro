<template lang="html">
  <div class="container">
    <div class="yoon">
      <div class="container-high">
        <div class="container-question row">
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
              <input type="email" name="email" placeholder="e-mail">
            </div>
            <div class="answer1">
              <input type="password" name="password" placeholder="password">
            </div>
            <div class="answer2">
              <button type="button"> sign in</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container-low">
        <div class="error-notice low">
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
    z-index: 1;
    display: black;
    float: left;
    width: 33%;
    color: #000;
  }
  .container-high, .container-middle {
    margin: 0;
    background-color: #e0e2e3;
    padding: .75rem;
    max-width: 100%;
    border-radius: .4rem .4rem 0 0;
  }
  .container-question row {
    margin: 0;
    background-color: #e0e2e3;
    padding: .75rem;
    max-width: 100%;
    border-radius: .4rem .4rem 0 0;
  }
  .high-left-question {
    font-size: 1.5rem;
    max-width: 20%;
    width: 100%;
    min-height: 5px;
    padding-left: 10px;
    padding-right: 10px;
    float: left;
    width: 15%;
  }
  .mid-left-answer {
    font-size: 1.5rem;
    max-width: 20%;
    width: 100%;
    min-height: 5px;
    padding-right: 10px;
    float: left;
    width: 15%;
  }
  .high-center-question {
    font-size: 1.5rem;
    max-width: 100%;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .mid-center-item {
    display: block;
    width: 90;
    border-collapse: collapse;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .answer {
    display: block;
    width: 90%;
  }
</style>
