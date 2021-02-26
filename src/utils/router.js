import Vue from 'vue';

import VueRouter from 'vue-router';
import Quiz from '../components/Quiz';

Vue.use(VueRouter);

const routes = [
  {path: '/quiz', component: Quiz}
];

const router = new VueRouter({routes});

export default router;
