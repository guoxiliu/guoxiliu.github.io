import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createGtag } from 'vue-gtag';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/styles.css';

const app = createApp(App);

app.use(router);

app.use(
  createGtag({
    property: {
      id: 'G-R62DBVBYTB', // Google Analytics Measurement ID
    },
  }),
  router
);

app.mount('#app');
