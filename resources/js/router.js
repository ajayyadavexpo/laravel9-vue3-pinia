import { createWebHistory, createRouter } from 'vue-router';
import home from './pages/home.vue';
import login from './pages/login.vue';
import register from './pages/register.vue';
import dashboard from './pages/dashboard.vue';
import { UserStore } from '@/store/UserStore';

const routes = [
    {
        path : '/',
        name : 'Home',
        component : home
    },
    {
        path : '/login',
        name : 'Login',
        component : login,
        meta:{
            requiresAuth:false
        }
    },
    {
        path : '/register',
        name : 'Register',
        component : register,
        meta:{
            requiresAuth:false
        }
    },
    {
        path : '/dashboard',
        name : 'Dashboard',
        component : dashboard,
        meta:{
            requiresAuth:true
        }
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});


router.beforeEach((to,from) =>{

    const store = UserStore()

    if(to.meta.requiresAuth && store.token == 0){
        return { name : 'Login'}
    }
    if(to.meta.requiresAuth == false && store.token != 0){
        return { name : 'Dashboard'}
    }
})

export default router;
