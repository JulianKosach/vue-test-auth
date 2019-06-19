<template>
  <div class="home">
    <md-toolbar class="md-primary header">
      <h3 class="md-title">Home</h3>
      <md-button @click="logout">Logout</md-button>
    </md-toolbar>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {

  },
  methods: {
    logout() {
      this.$router.replace('/login');
    }
  }
}
</script>

<style>
  .home {
    display: flex;
    flex: 1;
    background-color: #eaeaea;
    justify-content: stretch;
    align-items: flex-start;
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
</style>

