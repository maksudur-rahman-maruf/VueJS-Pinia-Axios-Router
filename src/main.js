import { createApp } from 'vue'
import { createPinia } from 'pinia' // Import
import { Vue3Mq, MqResponsive } from "vue3-mq";
import { createLogger } from 'vue-logger-plugin'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


import App from './App.vue'
import router from './router/router'

const app = createApp(App)

app.use(createPinia()) // Create the root store
app.use(router)

app.use(Vue3Mq, {
    breakpoints: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1264,
        xl: 1904,
    }
})
app.use(createLogger())
app.component('mq-responsive', MqResponsive);

app.mount('#app')