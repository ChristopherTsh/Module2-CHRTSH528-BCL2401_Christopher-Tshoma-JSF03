import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import axios from 'axios';
import './index.css';

const app = createApp(App);

axios.get('/api/loadState')
  .then(response => {
    store.commit('setState', response.data);
    app.use(store).mount('#app');
  })
  .catch(error => {
    console.error('Error loading initial state:', error);
    app.use(store).mount('#app');
  });

app.use(router);
app.use(store);

app.mount('#app');
