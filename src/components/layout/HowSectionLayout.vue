<template>
    <section id="how-it-works" class="relative w-full h-1/2 overflow-hidden">
        <!-- Background (ganti nama file sesuai punyamu) -->
        <img src="../../assets/how-section.png" alt="" class="absolute inset-0 w-full h-full object-cover">

        <!-- Overlay supaya teks tetap terbaca -->
        <div class="absolute inset-0 bg-gradient-to-br from-red-700/80 to-red-900/90"></div>

        <div class="relative container mx-auto px-8 py-24">
            <!-- Heading -->
            <div class="text-center mb-16">
                <p class="font-poppins text-sm font-bold tracking-[0.25em] text-white mb-3">ALUR LAYANAN</p>
                <h2 class="font-poppins text-4xl font-extrabold text-white">Semudah 4 Langkah di WIRESHOES</h2>
            </div>

            <!-- Steps -->
            <div class="relative">
                <!-- Garis penghubung (hanya tampil di layar md ke atas) -->
                <div
                    class="hidden md:block absolute top-[26px] left-[12.5%] right-[12.5%] h-[3px] bg-white/90 rounded-full">
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
                    <!-- 1 -->
                    <div class="relative z-10 flex flex-col items-center text-center">
                        <div
                            class="w-14 h-14 rounded-full bg-white text-red-700 font-poppins font-extrabold text-lg flex items-center justify-center shadow-lg mb-5">
                            1
                        </div>
                        <h4 class="font-poppins text-lg font-bold text-white mb-2">Buat Akun</h4>
                        <p class="text-sm text-white/75 max-w-[240px]">
                            Daftar dengan nama, nomor WhatsApp, dan alamat untuk penjemputan sepatu
                        </p>
                    </div>

                    <!-- 2 -->
                    <div class="relative z-10 flex flex-col items-center text-center">
                        <div
                            class="w-14 h-14 rounded-full bg-white text-red-700 font-poppins font-extrabold text-lg flex items-center justify-center shadow-lg mb-5">
                            2
                        </div>
                        <h4 class="font-poppins text-lg font-bold text-white mb-2">Memilih Layanan</h4>
                        <p class="text-sm text-white/75 max-w-[240px]">
                            Pilih layanan cuci atau perbaikan sesuai kondisi sepatumu
                        </p>
                    </div>

                    <!-- 3 -->
                    <div class="relative z-10 flex flex-col items-center text-center">
                        <div
                            class="w-14 h-14 rounded-full bg-white text-red-700 font-poppins font-extrabold text-lg flex items-center justify-center shadow-lg mb-5">
                            3
                        </div>
                        <h4 class="font-poppins text-lg font-bold text-white mb-2">Menunggu Layanan</h4>
                        <p class="text-sm text-white/75 max-w-[240px]">
                            Sepatumu kami kerjakan, pantau statusnya langsung dari akunmu
                        </p>
                    </div>

                    <!-- 4 -->
                    <div class="relative z-10 flex flex-col items-center text-center">
                        <div
                            class="w-14 h-14 rounded-full bg-white text-red-700 font-poppins font-extrabold text-lg flex items-center justify-center shadow-lg mb-5">
                            4
                        </div>
                        <h4 class="font-poppins text-lg font-bold text-white mb-2">Selesai</h4>
                        <p class="text-sm text-white/75 max-w-[240px]">
                            Sepatu bersih dan seperti baru, siap diantar atau diambil
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>