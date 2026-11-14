<script setup>
defineProps({
    asideTitle: { type: String, default: '' },
    asideText: { type: String, default: '' },
})
</script>

<template>
    <div class="min-h-screen grid lg:grid-cols-2 bg-white">
        <!-- Kolom form -->
        <main class="flex flex-col px-6 py-8 sm:px-12 lg:px-16">
            <RouterLink :to="{ name: 'beranda' }" class="self-start">
                <img src="../../assets/WIRESHOES.png" alt="WIRESHOES" class="w-32">
            </RouterLink>

            <div class="flex flex-1 items-center">
                <div class="w-full max-w-lg mx-auto py-10">
                    <slot />
                </div>
            </div>
        </main>

        <!-- Kolom visual (hanya tampil di layar besar) -->
        <aside class="relative hidden lg:flex flex-col justify-between sticky top-0 h-screen overflow-hidden p-14">
            <img src="../../assets/how-section.png" alt="" aria-hidden="true"
                class="absolute inset-0 w-full h-full object-cover pointer-events-none">
            <div class="absolute inset-0 bg-gradient-to-br from-red-700/80 to-red-900/90"></div>

            <div class="relative flex flex-1 items-center justify-center">
                <img src="../../assets/sepatu.png" alt="Sepasang sneakers krem"
                    class="w-[85%] max-w-md drop-shadow-2xl animate-float-bounce motion-reduce:animate-none">
            </div>

            <div class="relative max-w-md">
                <h2 class="font-poppins text-3xl font-extrabold text-white mb-3">{{ asideTitle }}</h2>
                <p class="text-lg text-white/90">{{ asideText }}</p>
            </div>
        </aside>
    </div>
</template>