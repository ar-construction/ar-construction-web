<template>
    <footer class="w-full border-t border-surface-200 pt-10 pb-6 px-6 lg:px-20">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <!-- Logo Left -->
            <a href="/" class="flex items-center justify-center md:justify-start">
                <img src="@/assets/logo/logo-transparent.png" alt="A&R Construction Logo" class="h-14 md:h-20 transition-all duration-300 drop-shadow-sm" />
            </a>
            <div class="max-w-6xl mx-auto text-center">
                <p class="text-gray-400 mb-6">Building trust, opportunity, and lasting relationships in our community.</p>
                <p class="mt-8 text-center text-surface-400 text-sm tracking-wide">© {{ new Date().getFullYear() }} A&R Construction and Remodeling. All rights reserved.</p>
            </div>
            <!-- Nav Links -->
            <!-- <div class="flex flex-col md:flex-row md:items-center gap-3 md:gap-7 text-surface-600 text-lg font-medium">
                <router-link to="/about" class="hover:text-[#E3963E] transition-colors duration-200">About</router-link>
                <router-link to="/contact" class="hover:text-[#E3963E] transition-colors duration-200">Contact</router-link>
                <router-link to="/arkhorizon" class="hover:text-[#E3963E] transition-colors duration-200">Ark Horizon</router-link>
                <router-link to="/faq" class="hover:text-[#E3963E] transition-colors duration-200">FAQ</router-link>
                <router-link to="/blog" class="hover:text-[#E3963E] transition-colors duration-200">Blog</router-link>
            </div> -->
        </div>
        <!-- Copyright -->
    </footer>
</template>
