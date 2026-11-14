<template>
    <section id="features" class="relative w-full py-24 overflow-hidden">
        <img src="../../assets/features-section.png" alt=""
            class="absolute inset-0 w-full h-full object-cover pointer-events-none">
        <div class="relative container mx-auto px-8">
            <!-- Heading -->
            <div class="text-center mb-16">
                <p class="font-poppins text-sm font-bold tracking-[0.25em] text-red-700 mb-3">FITUR UTAMA</p>
                <h2 class="font-poppins text-4xl font-extrabold text-red-700 mb-4">Satu Sistem, Semua Pesanan Terkelola
                </h2>
                <p class="text-slate-500 text-lg max-w-xl mx-auto">
                    Dari pesanan masuk sampai sepatu selesai, semuanya tercatat rapi dan bisa dipantau kapan saja.
                </p>
            </div>

            <!-- Cards -->
            <div class="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                <!-- 1. Login Admin -->
                <div
                    class="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-3xl border border-red-100 bg-white/70 backdrop-blur p-8 transition hover:-translate-y-1 hover:shadow-lg">
                    <svg class="w-8 h-8 text-red-700 mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="5" y="11" width="14" height="10" rx="2" />
                        <path d="M8 11V7a4 4 0 018 0v4" />
                    </svg>
                    <h4 class="font-poppins text-lg font-bold text-slate-900 mb-2">Login Admin</h4>
                    <p class="text-slate-500">
                        Akses sistem hanya untuk kasir dan admin, sehingga data pesanan tetap aman.
                    </p>
                </div>

                <!-- 2. Pengelolaan Pesanan -->
                <div
                    class="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-3xl border border-red-100 bg-white/70 backdrop-blur p-8 transition hover:-translate-y-1 hover:shadow-lg">
                    <svg class="w-8 h-8 text-red-700 mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="6" y="4" width="12" height="17" rx="2" />
                        <path d="M9 4h6v3H9z" />
                        <path d="M9 12h6M9 16h4" />
                    </svg>
                    <h4 class="font-poppins text-lg font-bold text-slate-900 mb-2">Input & Pengelolaan Pesanan</h4>
                    <p class="text-slate-500">
                        Catat pesanan pelanggan dengan cepat, lalu ubah atau pantau kapan pun dibutuhkan.
                    </p>
                </div>

                <!-- 3. Data Sepatu per Pesanan -->
                <div
                    class="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-3xl border border-red-100 bg-white/70 backdrop-blur p-8 transition hover:-translate-y-1 hover:shadow-lg">
                    <svg class="w-8 h-8 text-red-700 mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 3l9 5-9 5-9-5 9-5z" />
                        <path d="M3 13l9 5 9-5" />
                    </svg>
                    <h4 class="font-poppins text-lg font-bold text-slate-900 mb-2">Banyak Sepatu, Satu Pesanan</h4>
                    <p class="text-slate-500">
                        Satu pelanggan bisa membawa beberapa pasang sepatu, dan tiap sepatu tercatat tersendiri
                        dalam pesanan yang sama.
                    </p>
                </div>

                <!-- 4. Kode Unik -->
                <div
                    class="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-3xl border border-red-100 bg-white/70 backdrop-blur p-8 transition hover:-translate-y-1 hover:shadow-lg">
                    <svg class="w-8 h-8 text-red-700 mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 9h14M5 15h14M10 4L8 20M16 4l-2 16" />
                    </svg>
                    <h4 class="font-poppins text-lg font-bold text-slate-900 mb-2">Kode Unik Pelanggan</h4>
                    <p class="text-slate-500">
                        Setiap pelanggan menerima kode unik dari kasir untuk mengecek status sepatunya kapan saja.
                    </p>
                </div>

                <!-- 5. Update Status -->
                <div
                    class="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-3xl border border-red-100 bg-white/70 backdrop-blur p-8 transition hover:-translate-y-1 hover:shadow-lg">
                    <svg class="w-8 h-8 text-red-700 mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 20h4L19 9a2.8 2.8 0 00-4-4L4 16v4z" />
                        <path d="M13.5 6.5l4 4" />
                    </svg>
                    <h4 class="font-poppins text-lg font-bold text-slate-900 mb-2">Update Status Pengerjaan</h4>
                    <p class="text-slate-500 mb-4">
                        Tambah, ubah, dan hapus status pengerjaan sepatu sesuai tahap yang sedang berjalan.
                    </p>
                    <span class="inline-block px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold">
                        Dasbor Admin
                    </span>
                </div>

                <!-- 6. Cek Status Pesanan -->
                <div
                    class="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-3xl border border-red-100 bg-white/70 backdrop-blur p-8 transition hover:-translate-y-1 hover:shadow-lg">
                    <svg class="w-8 h-8 text-red-700 mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="6" />
                        <path d="M20 20l-4.5-4.5" />
                    </svg>
                    <h4 class="font-poppins text-lg font-bold text-slate-900 mb-2">Cek Status Pesanan</h4>
                    <p class="text-slate-500 mb-4">
                        Masukkan kode unik pelanggan untuk melihat status pengerjaan seluruh sepatunya.
                    </p>
                    <span class="inline-block px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold">
                        Dasbor Admin
                    </span>
                </div>

                <!-- 7. Estimasi Waktu -->
                <div
                    class="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-3xl border border-red-100 bg-white/70 backdrop-blur p-8 transition hover:-translate-y-1 hover:shadow-lg">
                    <svg class="w-8 h-8 text-red-700 mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                    </svg>
                    <h4 class="font-poppins text-lg font-bold text-slate-900 mb-2">Estimasi Waktu Selesai</h4>
                    <p class="text-slate-500 mb-4">
                        Tentukan perkiraan sepatu selesai agar pelanggan tahu kapan bisa mengambilnya.
                    </p>
                    <span class="inline-block px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold">
                        Dasbor Admin
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>