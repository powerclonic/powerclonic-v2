import { createRouter, createWebHistory } from "vue-router";
import PrincipalView from "@/views/PrincipalView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: PrincipalView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
