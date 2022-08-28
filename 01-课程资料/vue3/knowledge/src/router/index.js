import { createRouter, createWebHashHistory } from "vue-router";
import Vote from "@/pages/Vote.vue";
import Test from "@/pages/Test.vue";

const routes = [{
    path: '/',
    component: Vote,
}, {
    path: '/test',
    component: Test,
}, {
    path: '/:pathMatch(.*)*',
    redirect: '/'
}];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;