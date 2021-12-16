import VueRouter from "vue-router";
import AuthGuard from "./auth-guard"

import ApanelLayout from "../pages/Admin/Layout";
import ApanelLayoutPosts from "../pages/Admin/Content/Posts";


import BasicLayout from "../pages/Basic/Layout";
import BasicLayoutHome from "../pages/Basic/Content/Home";
import BasicLayoutRecord from "../pages/Basic/Content/Record";
import BasicLayoutLogin from "../pages/Basic/Content/Login";
import BasicLayoutRegister from "../pages/Basic/Content/Register";
import NotFound from "../pages/NotFound";

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'basic',
            component: BasicLayout,
            redirect: {name: 'home'},
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: BasicLayoutLogin,
                },
                {
                    path: '/register',
                    name: 'register',
                    component: BasicLayoutRegister,
                },
                {
                    path: '/home',
                    name: 'home',
                    component: BasicLayoutHome,
                },
                {
                    path: '/record',
                    name: 'record',
                    component: BasicLayoutRecord,
                    meta: {role: 'user'},
                }
            ]
        },
        {
            path: '/apanel',
            name: 'apanel',
            component: ApanelLayout,
            redirect: {name: 'apanel_posts'},
            children: [
                {
                    path: 'posts',
                    name: 'apanel_posts',
                    component: ApanelLayoutPosts,
                },
            ]
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        }
    ],
    mode: 'history'
});

router.beforeEach(AuthGuard)
