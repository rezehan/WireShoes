<template>
    <section id="cta" class="relative w-full overflow-hidden">
        <!-- Background (sama dengan section alur layanan, ganti kalau punya gambar lain) -->
        <img src="../../assets/how-section.png" alt=""
            class="absolute inset-0 w-full h-full object-cover pointer-events-none">

        <!-- Overlay supaya teks tetap terbaca -->
        <div class="absolute inset-0 bg-gradient-to-br from-red-700/80 to-red-900/90"></div>

        <div class="relative container mx-auto px-8 py-28 text-center">
            <p class="font-poppins text-sm font-bold tracking-[0.25em] text-white mb-3">LANGKAH AWAL</p>
            <h2 class="font-poppins text-4xl md:text-5xl font-extrabold text-white mb-5">
                Siap Membuat Sepatumu Seperti Baru?
            </h2>
            <p class="text-white/90 text-lg max-w-xl mx-auto mb-10">
                Pesan layanan cuci dan perbaikan sepatu dengan mudah, lalu pantau statusnya kapan saja dalam satu
                tempat.
            </p>
            <a href="/"
                class="inline-block px-10 py-4 rounded-full bg-white text-red-700 font-poppins font-bold shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                Daftar Sekarang
            </a>
        </div>
    </section>
</template>