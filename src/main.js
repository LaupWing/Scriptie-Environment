import Vue from 'vue'
import App from './App.vue'
import './firebase/init'
import './index.css'
import 'default-passive-events'
import store from './store'
import Editor from '@tinymce/tinymce-vue'

Vue.config.productionTip = false

new Vue({
   render: h => h(App),
   store,
   components: {
      Editor
   },
}).$mount('#app')
