<template>
  <form class="form">
    <md-field>
      <label>Email</label>
      <md-input type="email"  v-model="form.email"></md-input>
    </md-field>
    <md-field>
      <label>Password</label>
      <md-input type="password"  v-model="form.pwd"></md-input>
    </md-field>
    <md-button class="md-raised md-primary" @click="submit">Login</md-button>
  </form>
</template>
 
<script>
  import Form from '@/classes/Form';

  export default  {
    name: 'login-form',
    props: [],
    data() {
      return {
        form: new Form({
          email: '',
          pwd: ''
        })
      }
    },
    methods: {
      submit() {
        this.form.submit('POST', 'https://cloud-ua1.webitel.com/engine/login')
      }
    }
}
</script>
 
<style>
  .form {
    background-color: white;
    margin: auto;
    max-width: 300px;
    padding: 30px;
  }
</style>