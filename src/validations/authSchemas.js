// Aturan validasi untuk vee-validate (useForm -> validationSchema).
// Setiap aturan mengembalikan `true` jika valid, atau string pesan error jika tidak.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const USERNAME_RE = /^[a-zA-Z0-9_]{3,20}$/
const MIN_PASSWORD_LENGTH = 8

// Jalankan beberapa aturan berurutan, berhenti di error pertama
const compose =
    (...rules) =>
    (value, ctx) => {
        for (const rule of rules) {
            const result = rule(value, ctx)
            if (result !== true) return result
        }
        return true
    }

const required = (message) => (value) =>
    (typeof value === 'string' ? value.trim() !== '' : !!value) || message

const minLength = (min, message) => (value) => String(value ?? '').trim().length >= min || message

const matches = (regex, message) => (value) => regex.test(String(value ?? '').trim()) || message

const sameAs = (otherField, message) => (value, ctx) => value === ctx.form[otherField] || message

const emailRule = compose(
    required('Email wajib diisi.'),
    matches(EMAIL_RE, 'Format email belum benar. Contoh: nama@email.com'),
)

export const loginSchema = {
    email: emailRule,
    password: required('Password wajib diisi.'),
}

export const registerSchema = {
    nama_lengkap: compose(
        required('Nama lengkap wajib diisi.'),
        minLength(3, 'Nama lengkap minimal 3 karakter.'),
    ),
    username: compose(
        required('Username wajib diisi.'),
        matches(USERNAME_RE, 'Gunakan 3–20 karakter: huruf, angka, atau underscore.'),
    ),
    email: emailRule,
    password: compose(
        required('Password wajib diisi.'),
        (value) =>
            String(value ?? '').length >= MIN_PASSWORD_LENGTH ||
            `Password minimal ${MIN_PASSWORD_LENGTH} karakter.`,
    ),
    konfirmasi_password: compose(
        required('Konfirmasi password wajib diisi.'),
        sameAs('password', 'Konfirmasi password tidak sama dengan password.'),
    ),
    alamat: compose(
        required('Alamat wajib diisi.'),
        minLength(10, 'Tulis alamat lebih lengkap (minimal 10 karakter).'),
    ),
}

// Konfigurasi field: validasi saat blur, lalu saat mengetik hanya jika field sudah error
// (supaya pesan error tidak muncul saat pengguna baru mulai mengetik, tapi hilang begitu diperbaiki).
export const eagerAfterError = (state) => ({
    validateOnModelUpdate: state.errors.length > 0,
})