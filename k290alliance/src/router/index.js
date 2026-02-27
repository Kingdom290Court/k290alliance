import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RulesView from "../views/RulesView.vue";
import GiftsView from "../views/GiftsView.vue";
import AcademyView from "../views/AcademyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/rules", name: "rules", component: RulesView },
    { path: "/gifts", name: "gifts", component: GiftsView },
    { path: "/academy", name: "academy", component: AcademyView },
  ],
});

export default router;
