import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const routes = [
    { path: '/', name: 'beranda', component: () => import('../pages/BerandaView.vue') },
    {
        path: '/masuk',
        name: 'masuk',
        component: () => import('../pages/AuthView.vue'),
        props: { mode: 'login' },
        meta: { guestOnly: true },
    },
    {
        path: '/daftar',
        name: 'daftar',
        component: () => import('../pages/AuthView.vue'),
        props: { mode: 'register' },
        meta: { guestOnly: true },
    },
    // {
    //     path: '/akun',
    //     name: 'akun',
    //     component: () => import('../pages/AkunView.vue'),
    //     meta: { requiresAuth: true },
    //     // untuk halaman khusus staf nanti: meta: { requiresAuth: true, roles: ['admin', 'kasir'] }
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to) => {
    const { isLoggedIn, user, fetchUser } = useAuth()

    // Sudah login tapi membuka /masuk atau /daftar -> kembali ke beranda
    if (to.meta.guestOnly && isLoggedIn.value) {
        return { name: 'beranda' }
    }

    if (to.meta.requiresAuth) {
        const keMasuk = { name: 'masuk', query: { redirect: to.fullPath } }

        if (!isLoggedIn.value) return keMasuk

        // Muat data user sekali (juga memastikan token masih diterima server)
        if (!user.value) {
            try {
                await fetchUser()
            } catch {
                // Jika error jaringan, biarkan halaman menampilkan pesannya sendiri
            }
            // Token ditolak server -> fetchUser sudah memanggil logout()
            if (!isLoggedIn.value) return keMasuk
        }

        // Batasi per role bila route menentukan `meta.roles`
        if (to.meta.roles && !to.meta.roles.includes(user.value?.role)) {
            return { name: 'beranda' }
        }
    }
})

export default router