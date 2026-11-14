import { computed, ref } from 'vue'
import api from '../services/api'

const TOKEN_KEY = 'token'

const token = ref(localStorage.getItem(TOKEN_KEY) || '')
const user = ref(null)

export function useAuth() {
    const isLoggedIn = computed(() => !!token.value)

    async function login(payload) {
        const { data } = await api.post('/auth/login', payload)
        token.value = data.token
        user.value = data.user
        localStorage.setItem(TOKEN_KEY, data.token)
        return data.user
    }

    async function register(payload) {
        await api.post('/auth/register', payload)
    }

    // Ambil data user dari server. Jika token ditolak (401), otomatis logout.
    async function fetchUser() {
        if (!token.value) return null
        try {
            const { data } = await api.get('/auth/me')
            user.value = data.user
            return user.value
        } catch (error) {
            if (error.status === 401) logout()
            throw error
        }
    }

    function logout() {
        token.value = ''
        user.value = null
        localStorage.removeItem(TOKEN_KEY)
    }

    return { token, user, isLoggedIn, login, register, fetchUser, logout }
}