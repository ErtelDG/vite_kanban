// router.js
import { createRouter, createWebHistory } from "vue-router";
import Kanban from "./components/Kanban.vue";
import Dashboard from "./components/Dashboard.vue";
import AddTask from "./components/AddTask.vue";
import Contacts from "./components/Contacts.vue";
import PrivacyPolicy from "./components/PrivacyPolicy.vue";
import LegalNotice from "./components/LegalNotice.vue";

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
   {
      path: "/privacy_policy",
      name: "PrivacyPolicy",
      component: PrivacyPolicy,
   },
   {
      path: "/legal_notice",
      name: "LegalNotice",
      component: LegalNotice,
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export default router;
