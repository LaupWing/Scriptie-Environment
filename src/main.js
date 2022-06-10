import Vue from 'vue'
import App from './App.vue'
import './index.css'
import 'default-passive-events'
import Editor from '@tinymce/tinymce-vue'

Vue.config.productionTip = false

new Vue({
   render: h => h(App),
   components: {
      Editor
   },
}).$mount('#app')
