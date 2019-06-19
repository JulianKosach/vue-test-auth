<template>
  <div class="home">
    <md-toolbar class="md-primary header">
      <h3 class="md-title">Home</h3>
      <md-button @click="logout">Logout</md-button>
    </md-toolbar>
    <p>{{accounts}}</p>
  </div>
</template>

<script>
import HttpService from '@/services/HttpService';

export default {
  name: 'home',
  components: {

  },
  data(){
    return {
      accounts: {},
    }
  },
  mounted() {
    this.getAccounts();
  },
  methods: {
    logout() {
      HttpService.logout()
        .then(() => {
          this.$router.replace('/login');
        })
        .catch(err => {
          alert(err);
        });
    },

    getAccounts(){
      HttpService.getAccounts()
        .then(resp => {
          this.accounts = resp.data.info;
        })
        .catch(err => {
          alert(err);
        });
    }
  }
}
</script>

<style>
  .home {
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: #eaeaea;
    justify-content: stretch;
    align-items: flex-start;
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
</style>

