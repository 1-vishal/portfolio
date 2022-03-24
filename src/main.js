import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "glightbox/dist/js/glightbox.min.js"
import "glightbox/src/js/glightbox.js"
import "@srexi/purecounterjs/purecounter.js"
// import "waypoints/lib/noframework.waypoints.js"
import AOS from "aos";
import "aos/dist/aos.css";
App.AOS = new AOS.init({ disable: "phone" });
import "swiper/swiper-bundle.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import "boxicons/css/boxicons.min.css"
import "swiper/swiper-bundle.min.css"
import "glightbox/dist/css/glightbox.min.css"


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
