<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong class="is-size-4">First website</strong>
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item" >About</router-link>
      </div>
      <div class="navbar-end">
        <div>
    <label for="example-datepicker">Choose a date</label>
     <datepicker v-model="this.picked" inputFormat = "yyyy-MM-dd" @click="formatDate(this.picked)" />
    <p>Value: '{{ this.newDate    }}'</p>
  </div>
      </div>
    </div>
  </nav>
</template>
<script>
  import Datepicker from 'vue3-datepicker'
  import { ref } from 'vue'
  import dayjs from 'dayjs'
    const picked = ref(new Date())
  export default {
    name: 'Nav',
    components: {
      Datepicker
    },
    data(){
      return {
        value:'',
        picked:picked,
        newDate:null
      }
    },
    methods:{
      formatDate(picked) {
            const date = dayjs(picked);
                // Then specify how you want your dates to be formatted
             date.format('DD/MM/YYYY')
             return this.newDate = date
        }
      

    }
  };
</script>
<style lang="scss" scoped>
  nav {
    margin-top: 25px;
    margin-bottom: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #d88d00;
      }
    }
  }
</style>