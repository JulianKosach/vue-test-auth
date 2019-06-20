<template>
  <form class="form" @submit="submit($event)">
    <md-field>
      <label>Email</label>
      <md-input required type="email" v-model="form.username"></md-input>
    </md-field>
    <md-field>
      <label>Password</label>
      <md-input required type="password" v-model="form.password"></md-input>
    </md-field>
    <p class="md-subheading err" v-if="err">Error: {{err}}</p>
    <md-button type="submit" class="md-raised md-primary">Login</md-button>
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
          username: '', // test@demo.webitel.com
          password: '' // T2eDYGfhy0rL3nW3
        }),
        err: null,
      }
    },
    methods: {
      submit(event) {
        event.preventDefault();
        this.form.submit('login')
          .then(resp => {
            this.form.reset();
            this.parseResponse(resp);
          })
          .catch(err => {
            this.parseError(err);
          });
      },

      parseResponse(resp) {
        this.err = null;
        localStorage.userToken = resp.data.token;
        localStorage.userKey = resp.data.key;
        this.$router.push('home');
      },

      parseError(err) {
        this.err = err.response.data.message || 'Unknown error';
      }
    }
}
</script>
 
<style>
  .form {
    flex: 1;
    background-color: white;
    margin: auto;
    max-width: 480px;
    padding: 30px;
  }
  .err {
    color: red;
  }
</style>