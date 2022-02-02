<template>
  <div id="nav">
    <NavBar></NavBar>
 
    <!-- <router-link v-if="this.authenticated" to="/login" v-on:click="logout()" replace>Logout>About</router-link> -->
  </div>
  <router-view/>
  
</template>
<script>
  import NavBar from "./components/partials/Nav.vue"
  export default{
      components:{
        NavBar
      },
      data(){
        return {
                authenticated: false,
                mockAccount: {
                    username: "seeker0823",
                    password: "password"
                }
            }
      },
      methods:{
         logout() {
                this.authenticated = false;
            }
      }
      ,
      mounted(){
        // if(!this.authenticated) {
        //         this.$router.replace({ name: "login" });
        //     }
      }
  }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
