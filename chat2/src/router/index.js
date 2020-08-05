import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/components/Welcome";
import Chat from "@/components/Chat";
import Calendar from "@/components/Calendar";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "Welcome",
      component: Welcome
    },
    {
      path: "/chat",
      name: "Chat",
      props: true,
      component: Chat,
      beforeEnter(to, from, next) {
        if (to.params.name) {
          next();
        } else {
          next({
            name: "Welcome"
          });
        }
      }
    },
    {
      path: "/calendar",
      name: "Calendar",
      component: Calendar
    },
  ]
});
