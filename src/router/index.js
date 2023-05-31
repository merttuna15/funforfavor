import Vue from "vue";
import Router from "vue-router";
import HomePage from '../views/HomePage';
import AboutPage from '@/views/AboutPage';
import EventPage from '@/views/EventsPage';
import ContactPage from '@/views/ContactPage'




Vue.use(Router);



export default new Router({
    mode: 'history',

    routes: [
    // Routes
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
      path: "/hakkimizda",
      name: "aboutPage",
      component: AboutPage,
    },
    {
      path: "/etkinlikler",
      name: "EventsPage",
      component: EventPage,
    },
    {
      path: "/iletisim",
      name: "ContactPage",
      component: ContactPage,
    },
  ]
});
