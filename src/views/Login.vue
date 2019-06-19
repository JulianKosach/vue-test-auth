<template>
  <div class="login">
    <login-form/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm';

export default {
  name: 'login',
  components: {
    LoginForm,
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
