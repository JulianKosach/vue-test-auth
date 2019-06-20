<template>
  <div class="login">
    <login-form/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm';
import HttpService from '@/services/HttpService';

export default {
  name: 'login',
  components: {
    LoginForm,
  },
  mounted() {
    if (HttpService.isUserLogged()) {
      this.$router.replace('/home');
    }
  }
}
</script>

<style>
  .login {
    display: flex;
    flex: 1;
    background-color: #eaeaea;
    align-items: center;
    justify-content: center;
  }
</style>
