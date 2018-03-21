<template lang="html">
  <div class="container-login">
    <div class="yoon">
      <div class="container-id">
        <input class="email" type="email" v-model="email" placeholder="E-mail">
      </div>
      <div class="container-pw">
        <input type="password" v-model="password" placeholder="Password">
      </div>
      <div class="container-pw-confirm">
        <input type="password" v-model="password_confirm" placeholder="CONFIRM Password">
      </div>
      <div class="container-button">
        <button type="button" v-on:click="login">Login</button>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Yoon',
  data () {
    return {
      email_: 'ahnsh09@naver.com',
      password: '1111',
      password_: '1111',
      password_confirm: '1111',
      email: 'ahnsh09@naver.com'
    }
  },
  // computed: {
  //   error: function () {
  //     if (this.password === this.password_confirm) {
  //       return 'Password Correct'
  //     } else {
  //       return 'Password Wrong!!'
  //     }
  //   },
  //   verifyEmail: function () {
  //     var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
  //     if (this.email.match(regExp) !== null) {
  //       return 'good'
  //     } else {
  //       return 'error'
  //     }
  //   }
  // },
  methods: {
    login: function () {
      if (this.email === this.email_ && this.password === this.password_ === this.password_confirm) {
        alert('Login success')
      } else {
        alert('Login Fail')
      }
    }
  }
}
</script>

<style scoped>
  .question-page {

  }
  .container-login {
    margin: 0;
    padding: .75rem;
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;

  }
  .container-id, .container-pw, .container-pw-confirm, .container-button {
    margin: 0;
    background-color: #dcd3d3;
    padding: .75rem;
    max-width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
  }
  .container-id input, .container-pw input, .container-pw-confirm input, .container-button button, .errormessage{
    padding: .5rem 1rem .5rem 1rem;
  }
</style>
