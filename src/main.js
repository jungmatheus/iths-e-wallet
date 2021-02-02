import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({

  data() { return { 
    
    cardInfo: [
    {
      path: "proletariat card",
      cardNumber: "145789652115",
      cardName: "Matheus Jung",
      bank: "proletariat",
      valid: "03-21",
      ccv: "919",
      logo: "proletariatlogo"
    },

    {
      path: "flower card",
      cardNumber: "485484858547",
      cardName: "Matheus Correa",
      bank: "flower",
      valid: "03-24",
      ccv: "918",
      logo: "flowerlogo"
    }
  ]
  }},
  

  router,
  render: h => h(App)
}).$mount('#app')
