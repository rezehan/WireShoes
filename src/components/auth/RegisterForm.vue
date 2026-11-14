<script setup>
import { watch } from 'vue'
import { useForm } from 'vee-validate'
import BaseInput from '../ui/BaseInput.vue'
import BaseButton from '../ui/BaseButton.vue'
import BaseAlert from '../ui/BaseAlert.vue'
import { registerSchema, eagerAfterError } from '../../validations/authSchemas'

defineProps({
    loading: { type: Boolean, default: false },
    serverError: { type: String, default: '' },
})

const emit = defineEmits(['submit', 'switch-mode'])

const { defineField, errors, handleSubmit, validateField } = useForm({
    validationSchema: registerSchema,
})

const [namaLengkap, namaLengkapAttrs] = defineField('nama_lengkap', eagerAfterError)
const [username, usernameAttrs] = defineField('username', eagerAfterError)
const [email, emailAttrs] = defineField('email', eagerAfterError)
const [password, passwordAttrs] = defineField('password', eagerAfterError)
const [konfirmasi, konfirmasiAttrs] = defineField('konfirmasi_password', eagerAfterError)
const [alamat, alamatAttrs] = defineField('alamat', eagerAfterError)

// Password diubah setelah konfirmasi terisi -> cek ulang kecocokannya
watch(password, () => {
    if (konfirmasi.value) validateField('konfirmasi_password')
})

// handleSubmit hanya memanggil callback jika semua field valid.
// konfirmasi_password sengaja tidak dikirim ke server (cukup divalidasi di sini).
const onSubmit = handleSubmit((values) => {
    emit('submit', {
        nama_lengkap: values.nama_lengkap.trim(),
        username: values.username.trim(),
        email: values.email.trim().toLowerCase(),
        password: values.password,
        alamat: values.alamat.trim(),
    })
})
</script>

<template>
    <form novalidate class="space-y-5" @submit.prevent="onSubmit">
        <header class="mb-8">
            <h1
                class="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-900 text-4xl font-extrabold mb-3">
                Buat akun baru
            </h1>
            <p class="text-slate-500 text-lg">Daftar untuk memesan dan memantau layanan sepatumu.</p>
        </header>

        <BaseInput v-model="namaLengkap" v-bind="namaLengkapAttrs" label="Nama lengkap" name="nama_lengkap"
            autocomplete="name" placeholder="Nama sesuai identitas" maxlength="100"
            :error="errors.nama_lengkap" />

        <BaseInput v-model="username" v-bind="usernameAttrs" label="Username" name="username"
            autocomplete="username" placeholder="renlveed" maxlength="20"
            hint="3–20 karakter: huruf, angka, atau underscore." :error="errors.username" />

        <BaseInput v-model="email" v-bind="emailAttrs" label="Email" type="email" name="email"
            autocomplete="email" placeholder="nama@email.com" maxlength="255" :error="errors.email" />

        <BaseInput v-model="password" v-bind="passwordAttrs" label="Password" type="password" name="password"
            autocomplete="new-password" placeholder="Minimal 8 karakter" maxlength="72"
            :error="errors.password" />

        <BaseInput v-model="konfirmasi" v-bind="konfirmasiAttrs" label="Konfirmasi password" type="password"
            name="konfirmasi_password" autocomplete="new-password" placeholder="Ulangi password"
            maxlength="72" :error="errors.konfirmasi_password" />

        <BaseInput v-model="alamat" v-bind="alamatAttrs" label="Alamat" type="textarea" name="alamat"
            autocomplete="street-address" placeholder="Jalan, nomor, kelurahan, kota" maxlength="255"
            :error="errors.alamat" />

        <BaseAlert v-if="serverError">{{ serverError }}</BaseAlert>

        <BaseButton type="submit" block :loading="loading" class="mt-2">
            {{ loading ? 'Memproses…' : 'Daftar' }}
        </BaseButton>

        <p class="text-center text-sm text-slate-500">
            Sudah punya akun?
            <button type="button"
                class="font-bold text-red-700 hover:underline focus-visible:underline focus-visible:outline-none"
                @click="emit('switch-mode')">
                Masuk
            </button>
        </p>
    </form>
</template>