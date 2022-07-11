// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/scss/app.scss'

// Vuex store
import Vuex from 'vuex'
import store from '~/store'

// Global Components
import Button from '~/components/Button.vue'
import Input from '~/components/Input.vue'
import Img from '~/components/Img.vue'
import Row from '~/components/Row.vue'
import Col from '~/components/Col.vue'

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)
  appOptions.store = store
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  
  // Components globally
  Vue.component('Button', Button)
  Vue.component('Input', Input)
  Vue.component('Img', Img)
  Vue.component('Row', Row)
  Vue.component('Col', Col)
}
