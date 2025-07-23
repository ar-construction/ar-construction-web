<template>
    <footer class="w-full pt-10 pb-6 px-6 lg:px-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <!-- Logo Left -->
            <a href="/" class="flex items-center justify-center md:justify-start">
                <img src="@/assets/logo/logo-white-transparent.png" alt="A&R Construction Logo" class="h-14 md:h-20 transition-all duration-300 drop-shadow-sm" />
            </a>
            <div class="max-w-6xl mx-auto text-center">
                <p class="text-gray-400 mb-6">Building <span class="text-[#EDA220]">trust</span>, <span class="text-[#EDA220]">opportunity</span>, and <span class="text-[#EDA220]">lasting relationships</span> in our community.</p>
                <p class="mt-8 text-center text-surface-400 text-sm tracking-wide">© {{ new Date().getFullYear() }} A&R Construction and Remodeling. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>
