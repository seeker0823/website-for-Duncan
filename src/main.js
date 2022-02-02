import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css'
import TableFor from 'vue-table-for'


createApp(App).use(router).mount('#app')
createApp(App).use(TableFor)