<template>
    <footer class="w-full bg-red-50/60 border-t border-red-100">
        <div class="container mx-auto px-8 pt-16 pb-8">
            <!-- Atas: logo + kolom tautan -->
            <div class="flex flex-col md:flex-row md:justify-between gap-12 pb-12 border-b border-red-100">
                <!-- Logo -->
                <RouterLink :to="{ name: 'beranda' }" class="self-start md:self-center">
                    <img src="../../assets/WIRESHOES.png" alt="WIRESHOES" class="w-40">
                </RouterLink>

                <!-- Kolom tautan -->
                <div class="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
                    <!-- Navigasi -->
                    <div>
                        <h5 class="font-poppins font-bold text-red-900 mb-4">Navigasi</h5>
                        <ul class="space-y-3 text-slate-500">
                            <li><RouterLink :to="{ name: 'beranda' }" class="transition hover:text-red-700">Beranda</RouterLink></li>
                            <li><RouterLink :to="{ name: 'beranda', hash: '#how-it-works' }" class="transition hover:text-red-700">Alur Layanan</RouterLink></li>
                            <li><RouterLink :to="{ name: 'beranda', hash: '#features' }" class="transition hover:text-red-700">Fitur</RouterLink></li>
                        </ul>
                    </div>

                    <!-- Akun -->
                    <div>
                        <h5 class="font-poppins font-bold text-red-900 mb-4">Akun</h5>
                        <ul class="space-y-3 text-slate-500">
                            <li><RouterLink :to="{ name: 'masuk' }" class="transition hover:text-red-700">Masuk</RouterLink></li>
                            <li><RouterLink :to="{ name: 'daftar' }" class="transition hover:text-red-700">Daftar</RouterLink></li>
                        </ul>
                    </div>

                    <!-- Kontak -->
                    <div class="col-span-2 md:col-span-1">
                        <h5 class="font-poppins font-bold text-red-900 mb-4">Kontak</h5>
                        <ul class="space-y-3 text-slate-500">
                            <li><a href="mailto:email@wireshoes.com"
                                    class="transition hover:text-red-700">email@wireshoes.com</a></li>
                            <li><a href="#" class="transition hover:text-red-700">Instagram</a></li>
                            <li><a href="#" class="transition hover:text-red-700">WhatsApp</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Bawah: hak cipta -->
            <div class="flex flex-col md:flex-row md:justify-between gap-2 pt-8 text-sm text-slate-400">
                <p>© 2026 WIRESHOES. All Rights Reserved.</p>
                <p>Make Your Shoes Look Brand New</p>
            </div>
        </div>
    </footer>
</template>