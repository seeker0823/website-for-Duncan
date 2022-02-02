<template>
  <div class="about">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">the first image</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <p class="org-description is-size-4">
        
      </p>
      <div id="app">
           {{ records }}
           <p> the below text is the request for IP</p>
           {{ test }}
           <p>table test </p>
           <table-for
            class="table table-bordered"
              :records="records"
               >
              <td name="user" />
               <td name="last_name" />
                <td name="email" />
  </table-for>

      </div>
    </div>
    <button @click="logout()"> Log out</button>
  </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: 'App',
        data() {
          return{
          authenticated: this.$parent.authenticated,
          info: null,
          test: null,
          records:[]
        }
        },
        components:{
            
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.$parent.authenticated = false;
                this.$router.push('/');
                
            }
        },
        mounted () {
    axios
      .get('https://cat-fact.herokuapp.com/facts')
      .then(response =>{this.records = response.data})
    axios 
      .get('https://api.ipify.org?format=json')
      .then(response => (this.test = response.data.ip))
  }
    }
</script>

<style lang="scss" scoped>
  .hero {
    text-align: center;
    background-image: url('C:/Users/seeke/Programming/first-website/src/assets/Homeworld-Fan-Art-Bisart-Homeworld.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
  }
</style>