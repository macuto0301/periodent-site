import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ServiciosView from '@/views/ServiciosView.vue'
import PreciosView from '@/views/PreciosView.vue'
import ContactoView from '@/views/ContactoView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/servicios',
        name: 'servicios',
        component: ServiciosView
    },
    {
        path: '/precios',
        name: 'precios',
        component: PreciosView
    },
    {
        path: '/contacto',
        name: 'contacto',
        component: ContactoView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
