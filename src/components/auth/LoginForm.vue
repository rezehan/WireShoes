<script setup>
import { useForm } from 'vee-validate'
import BaseInput from '../ui/BaseInput.vue'
import BaseButton from '../ui/BaseButton.vue'
import BaseAlert from '../ui/BaseAlert.vue'
import { loginSchema, eagerAfterError } from '../../validations/authSchemas'

defineProps({
    loading: { type: Boolean, default: false },
    serverError: { type: String, default: '' },
    notice: { type: String, default: '' },
})

const emit = defineEmits(['submit', 'switch-mode'])

const { defineField, errors, handleSubmit } = useForm({ validationSchema: loginSchema })

const [email, emailAttrs] = defineField('email', eagerAfterError)
const [password, passwordAttrs] = defineField('password', eagerAfterError)

// handleSubmit hanya memanggil callback jika semua field valid
const onSubmit = handleSubmit((values) => {
    emit('submit', { email: values.email.trim(), password: values.password })
})
</script>

<template>
    <form novalidate class="space-y-5" @submit.prevent="onSubmit">
        <header class="mb-8">
            <h1
                class="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-900 text-4xl font-extrabold mb-3">
                Masuk ke akunmu
            </h1>
            <p class="text-slate-500 text-lg">Pantau status pengerjaan sepatumu kapan saja.</p>
        </header>

        <BaseAlert v-if="notice" variant="success">{{ notice }}</BaseAlert>
        <BaseAlert v-if="serverError">{{ serverError }}</BaseAlert>

        <BaseInput v-model="email" v-bind="emailAttrs" label="Email" type="email" name="email"
            autocomplete="email" placeholder="nama@email.com" :error="errors.email" />

        <BaseInput v-model="password" v-bind="passwordAttrs" label="Password" type="password" name="password"
            autocomplete="current-password" placeholder="Masukkan password" :error="errors.password" />

        <BaseButton type="submit" block :loading="loading" class="mt-2">
            {{ loading ? 'Memproses…' : 'Masuk' }}
        </BaseButton>

        <p class="text-center text-sm text-slate-500">
            Belum punya akun?
            <button type="button"
                class="font-bold text-red-700 hover:underline focus-visible:underline focus-visible:outline-none"
                @click="emit('switch-mode')">
                Daftar sekarang
            </button>
        </p>
    </form>
</template>