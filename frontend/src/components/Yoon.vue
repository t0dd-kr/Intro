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
            <div class="answer">
              <input type="password" name="password" placeholder="password">
            </div>
            <div class="answer">
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
  </div>

</template>

<script>
export default {
  name: 'yoon',
  data() {
    return {
      email: 'ahnsh09@naver.com',
      password: '1111'
    }
  }
}
</script>

<style scoped>
  .container {
    z-index: 1;
    display: black;
    width: 90%;
    color: #000;
  }
  .container-high {
    margin: 0;
    background-color: #e0e2e3;
    padding: .75rem;
    max-width: 100%;
    border-radius: .4rem .4rem 0 0;
  }
</style>
