<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AuthLayout from '../components/auth/AuthLayout.vue'
import LoginForm from '../components/auth/LoginForm.vue'
import RegisterForm from '../components/auth/RegisterForm.vue'
import { useAuth } from '../composables/useAuth'

const props = defineProps({
    // login | register — diisi dari `props` pada definisi route
    mode: {
        type: String,
        default: 'login',
        validator: (value) => ['login', 'register'].includes(value),
    },
})

const route = useRoute()
const router = useRouter()
const { login, register } = useAuth()

const loading = ref(false)
const serverError = ref('')

// Setelah daftar berhasil, pengguna diarahkan ke /masuk?registered=1
const notice = computed(() =>
    props.mode === 'login' && route.query.registered === '1'
        ? 'Akun berhasil dibuat. Masuk dengan email dan password barumu.'
        : '',
)

// Tujuan setelah login: halaman yang tadi dituju (hanya path internal), atau beranda
const afterLogin = computed(() => {
    const target = route.query.redirect
    const aman = typeof target === 'string' && target.startsWith('/') && !target.startsWith('//')
    return aman ? target : { name: 'beranda' }
})

const asideCopy = {
    login: {
        title: 'Sepatumu siap kembali seperti baru',
        text: 'Masuk untuk melihat status pengerjaan dan estimasi waktu selesai pesananmu.',
    },
    register: {
        title: 'Satu akun untuk semua pesananmu',
        text: 'Pesan layanan cuci dan perbaikan sepatu, lalu pantau setiap tahapnya dalam satu tempat.',
    },
}

// Pindah halaman login <-> daftar: bersihkan error lama
watch(() => props.mode, () => {
    serverError.value = ''
    loading.value = false
})

function switchMode() {
    router.push({ name: props.mode === 'login' ? 'daftar' : 'masuk' })
}

async function handleLogin(payload) {
    loading.value = true
    serverError.value = ''
    try {
        await login(payload)
        await router.push(afterLogin.value)
    } catch (error) {
        serverError.value = error?.message || 'Gagal masuk. Periksa email dan password, lalu coba lagi.'
    } finally {
        loading.value = false
    }
}

async function handleRegister(payload) {
    loading.value = true
    serverError.value = ''
    try {
        await register(payload)
        await router.push({ name: 'masuk', query: { registered: '1' } })
    } catch (error) {
        serverError.value = error?.message || 'Gagal membuat akun. Coba lagi beberapa saat.'
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <AuthLayout :aside-title="asideCopy[mode].title" :aside-text="asideCopy[mode].text">
        <LoginForm v-if="mode === 'login'" :loading="loading" :server-error="serverError" :notice="notice"
            @submit="handleLogin" @switch-mode="switchMode" />
        <RegisterForm v-else :loading="loading" :server-error="serverError" @submit="handleRegister"
            @switch-mode="switchMode" />
    </AuthLayout>
</template>