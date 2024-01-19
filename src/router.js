// router.js
import { createRouter, createWebHistory } from "vue-router";
import Kanban from "./components/Kanban.vue";
import Dashboard from "./components/Dashboard.vue";
import AddTask from "./components/AddTask.vue";
import Contacts from "./components/Contacts.vue";

const routes = [
   {
      path: "/kanban",
      name: "Kanban",
      component: Kanban,
   },
   {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
   },
   {
      path: "/addtask",
      name: "AddTask",
      component: AddTask,
   },
   {
      path: "/contacts",
      name: "Contacts",
      component: Contacts,
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;
