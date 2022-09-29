import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/product",
        name: "product",
        component: () => import("@/views/ProductView.vue"),
    },
    {
        path: "/cart",
        name: "cart",
        component: () => import("@/views/CartView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
