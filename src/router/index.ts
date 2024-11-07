import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/pages/AboutPage.vue"),
  },
  {
    path: "/alert",
    name: "alert",
    component: () => import("@/pages/AlertsPage.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;