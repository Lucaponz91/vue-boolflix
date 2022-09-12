import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret, fas)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
// BEBAS NEUE FONT
import "@fontsource/bebas-neue"

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
