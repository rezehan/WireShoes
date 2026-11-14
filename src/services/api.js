import axios from 'axios'

const api = axios.create({
    // Samakan dengan folder API di server lokal. Bisa diganti lewat .env: VITE_API_URL=...
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost/wireshoes-api',
    headers: { Accept: 'application/json' },
    timeout: 15000,
})

// Sertakan token di setiap request bila sudah login
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
})

// Ubah error axios jadi Error biasa berisi pesan dari server,
// supaya `error.message` langsung bisa ditampilkan di BaseAlert.
api.interceptors.response.use(
    (response) => response,
    (error) => {
        let message
        if (error.response) {
            // Server menjawab. Pakai pesan dari API; kalau bukan JSON (mis. 404 HTML dari Apache), beri petunjuk.
            message =
                error.response.data?.message ||
                `Server menjawab dengan error ${error.response.status}. Periksa alamat API (VITE_API_URL).`
        } else if (error.request) {
            message = 'Tidak dapat terhubung ke server. Pastikan API sudah berjalan.'
        } else {
            message = error.message
        }

        const wrapped = new Error(message)
        wrapped.status = error.response?.status
        wrapped.errors = error.response?.data?.errors || {}
        return Promise.reject(wrapped)
    },
)

export default api