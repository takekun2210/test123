
import Vue from 'vue';
import App from '../trip_title.vue';

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(App)
  }).$mount()
  const tripTitle = document.getElementById('dataTitle')
  tripTitle.appendChild(app.$el)
});
