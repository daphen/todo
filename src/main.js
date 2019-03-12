import Vue from 'vue'
import Firebase from 'firebase'
import dbConf from './firebaseConf'
import store from './store'
import App from './App.vue'

import './registerServiceWorker'

Vue.config.productionTip = false

const firebaseApp = Firebase.initializeApp(dbConf)
const firestore = firebaseApp.firestore()

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
