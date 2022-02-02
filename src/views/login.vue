<template>
  <div class="about">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
        </div>
      </div>
    </div>
    <div class="container">
        <div id = "login">
            <h1>Login</h1>
             <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == "seeker0823" && this.input.password == "password") {
                        this.$emit("authenticated", true);
                        return this.$router.replace({ name: "About" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
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