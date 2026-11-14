<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { isLoggedIn, user, fetchUser, logout } = useAuth()

// Setelah halaman di-refresh, token masih ada tapi data user belum dimuat.
// Jika token ditolak server (401), fetchUser otomatis logout; error lain (mis. jaringan) diabaikan.
onMounted(() => {
  if (isLoggedIn.value && !user.value) fetchUser().catch(() => {})
})

const namaTampil = computed(() => user.value?.username || '')

async function onLogout() {
  logout()
  await router.push({ name: 'beranda' })
}
</script>

<template>
  <nav
    class="navbar fixed top-6 left-1/2 -translate-x-1/2 w-1/2 py-4 px-8 bg-white rounded-full border border-[#FF8787] z-50"
    id="navbar">
    <div class="flex items-center justify-between w-full">
      <RouterLink :to="{ name: 'beranda' }">
        <img src="../assets/WIRESHOES.png" alt="logo" class="w-32">
      </RouterLink>

      <!-- Sudah login -->
      <ul v-if="isLoggedIn" class="flex items-center gap-4 font-normal text-slate-500 text-sm font-semibold">
        <li v-if="namaTampil" class="hidden sm:block">Halo, <span class="text-slate-800">{{ namaTampil }}</span></li>
        <li>
          <button type="button"
            class="rounded-full bg-red-700 px-4 py-1.5 text-white transition hover:bg-red-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-300"
            @click="onLogout">
            Keluar
          </button>
        </li>
      </ul>

      <!-- Belum login -->
      <ul v-else class="flex gap-3 font-normal text-slate-500 text-sm font-semibold">
        <li><RouterLink :to="{ name: 'masuk' }" class="transition hover:text-red-700" active-class="text-red-700">Masuk</RouterLink></li>
        <li><RouterLink :to="{ name: 'daftar' }" class="transition hover:text-red-700" active-class="text-red-700">Daftar & Pesan</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>