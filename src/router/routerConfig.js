const routes = [{
        path: '/index',
        name: 'index',
        children: [{
                path: 'home',
                name: 'home',
                component: () =>
                    import ('@/views/index/home/home.vue')
            },
            {
                path: 'my',
                name: 'my',
                component: () =>
                    import ('@/views/index/my/my.vue')
            },
        ],
        component: () =>
            import ('@/views/index/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/login/login.vue')
    },
    {
        path: "/",
        redirect: '/index/home'
    }
]
export default routes