<template>
  <div class="home">
    <md-toolbar class="md-primary header">
      <h3 class="md-title">Home</h3>
      <md-button @click="logout">Logout</md-button>
    </md-toolbar>
    <md-content class="scrollwrap md-scrollbar">
      <md-list>
        <md-list-item>
          <span class="md-list-item-text md-title">Name</span>
          <span class="md-list-item-text md-title">agent.status</span>
          <span class="md-list-item-text md-title">status</span>
        </md-list-item>
        <md-list-item v-bind:key="i" v-for="(account, i) in accounts">
          <span class="md-list-item-text">{{account.name}}</span>
          <span class="md-list-item-text">{{account['agent.status']}}</span>
          <span class="md-list-item-text">{{account.status}}</span>
        </md-list-item>
      </md-list>
    </md-content>
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
    if (!HttpService.isUserLogged()) {
      this.$router.replace('/login');
    }
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
          const infoObj = resp.data.info;
          const accounts = [];
          for (let key in infoObj) {
            accounts.push(infoObj[key]);
          }
          this.accounts = accounts;
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
    max-height: 100vh;
    overflow: hidden;
  }
  .header {
    display: flex;
    flex: 0;
    justify-content: space-between;
  }
  .scrollwrap {
    flex: 1;
    width: 100%;
    overflow: auto;
  }
</style>

