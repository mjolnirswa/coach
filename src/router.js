import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

// import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachList from './pages/coaches/CoachesList.vue';
// import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import NotFound from './pages/NotFound.vue';
// import ContactCoach from './pages/requests/ContactCoach.vue';
// import RequestReceived from './pages/requests/RequestReceived.vue';
// import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const CoachDetails = defineAsyncComponent(() => import('./pages/coaches/CoachDetails.vue'));
const CoachRegistration = defineAsyncComponent(() => import('./pages/coaches/CoachRegistration.vue'));
const ContactCoach = defineAsyncComponent(() => import('./pages/requests/ContactCoach.vue'));
const RequestReceived = defineAsyncComponent(() => import('./pages/requests/RequestReceived.vue'));
const UserAuth = defineAsyncComponent(() => import('./pages/auth/UserAuth.vue'));

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachList },
        { 
            path: '/coaches/:id', 
            component: CoachDetails,
            props: true, 
            children: [
            { path: 'contact', component: ContactCoach },
            ] 
        },
        { path: '/register', component: CoachRegistration, meta: { requiresAuth: true } },
        { path: '/request', component: RequestReceived, meta: { requiresAuth: true } },
        { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/:notFound(.*)', component: NotFound },
    ],
});

router.beforeEach((to, _from, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuth) {
        next('/auth');
    } else if (to.meta.requiresUnauth && store.getters.isAuth) {
        next('/coaches');
    } else {
        next();
    }
});

export default router;