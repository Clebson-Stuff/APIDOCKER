'use strict'
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import LoadScript from 'vue-plugin-load-script';

//Paginas:
import HomeDev from './routes/HomeDev.vue';
import NotFound from './routes/NotFound.vue';
import RegisterDev from './routes/RegisterDev.vue';

Vue.use(LoadScript)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path:('/'), name:'Home Desenvolvedor',component:HomeDev},
  {path:('/cadastro'), name:'Cadastro',component:RegisterDev}
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render: h => h(App),
})
