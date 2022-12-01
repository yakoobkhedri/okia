import index from "./pages/index/index.vue";
import AboutUs from "./pages/AboutUs/about.vue";
import Services from "./pages/services/services.vue";
import profile from "./pages/profile/profile.vue";
import weblog from "./pages/weblog/weblog.vue";
import blog from "./pages/blog/blog.vue";
import error from "./pages/404/404.vue";

export const Routes = [{
        path: '/',
        component: index,
    },
    {
        path: '/AboutUs',
        component: AboutUs,
    },
    {
        path: '/profile',
        component: profile,
    },
    {
        path: '/Services',
        component: Services,
    },
    {
        path: '/weblog',
        component: weblog,
    },
    {
        path: '/blog',
        component: blog,
    },
    {
        path: '/404',
        component: error,
    }
];