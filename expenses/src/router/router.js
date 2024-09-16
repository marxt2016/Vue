import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../components/Homepage'

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [

        {
            path: '/quickAdd',
            component: () => import('../components/NewItemQuick'),
            name: 'quick'
        },
        {
            path: '/quickAdd/option/',
            component: () => import('../components/NewItemQuick'),
            name: 'quick1'

        },
        {
            path: '/',
            component: Homepage,
            name: 'home'
        },
    ],
})
export default router