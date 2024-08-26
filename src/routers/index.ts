import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("@/views/Layout/index.vue"),
            children: [
                {
                    path: "",
                    name: "Home",
                    component: () => import("@/views/Home/index.vue"),
                },
                {
                    path: "category/:id",
                    name: "Category",
                    component: () => import("@/views/Category/index.vue"),
                },
                {
                    path: "category/sub/:id",
                    name: "SubCategory",
                    component: () => import("@/views/SubCategory/index.vue"),
                },
                {
                    path: "detail/:id",
                    name: "Detail",
                    component: () => import("@/views/Detail/index.vue"),
                },
                {
                    path: "cartlist",
                    name: "cartlist",
                    component: () => import("@/views/CartList/index.vue"),
                },
                {
                    path: "checkout",
                    name: "checkout",
                    component: () => import("@/views/Checkout/index.vue"),
                },
                {
                    path: "pay",
                    name: "pay",
                    component: () => import("@/views/Pay/index.vue"),
                },
                {
                    path: "paycallback",
                    name: "callback",
                    component: () => import("@/views/Pay/PayBack.vue"),
                },
                {
                    path: "member",
                    name: "member",
                    component: () => import("@/views/Member/index.vue"),
                    children: [{
                        path: "user",
                        name: "user",
                        component: () => import("@/views/Member/components/UserInfo.vue"),
                    }, {
                        path: "order",
                        name: "order",
                        component: () => import("@/views/Member/components/UserOrder.vue"),
                    }]
                },
            ],
        },
        {
            path: "/login",
            name: "Login",
            component: () => import("@/views/Login/index.vue"),
        },
    ],
    scrollBehavior() {
        return {top: 0};
    },
});

export default router;
