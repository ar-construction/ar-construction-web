<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const isMobileOpen = ref(false);
const router = useRouter();
const route = useRoute();

function toggleMobileMenu() {
    isMobileOpen.value = !isMobileOpen.value;
}

function smoothScroll(id) {
    if (route.path === '/') {
        // On landing page: smooth scroll
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            isMobileOpen.value = false;
        }
    } else {
        // On another page: navigate to landing with hash
        router.push({ path: '/' });
        isMobileOpen.value = false;
    }
}
</script>

<template>
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[#2a2a2a]/95 backdrop-blur-sm border-b border-[#333]">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex items-center justify-between h-20">
                <!-- Logo (left) -->
                <div class="flex-shrink-0 mr-auto">
                    <a href="/" class="flex items-center">
                        <img src="@/assets/logo/logo-white-transparent.png" alt="A&R Construction" class="h-20 w-24 transition-opacity duration-300 hover:opacity-80" />
                    </a>
                </div>

                <!-- Desktop Navigation (right) -->
                <div class="hidden lg:flex items-center space-x-12 justify-end text-right ml-8">
                    <a @click="smoothScroll('hero')" class="nav-link">Home</a>
                    <a @click="smoothScroll('about')" class="nav-link">About</a>
                    <a @click="smoothScroll('services')" class="nav-link">Services</a>
                    <a @click="smoothScroll('gallery')" class="nav-link">Gallery</a>
                </div>

                <!-- Desktop CTA (right) -->
                <div class="hidden lg:flex items-center justify-end ml-8">
                    <Button label="Contact" @click="smoothScroll('contact')" class="!px-6 !py-3 !bg-[#EDA220] hover:!bg-[#d1901c] !text-white font-medium transition-colors duration-300 !border-none" style="border-radius: 2px" />
                </div>

                <!-- Mobile Menu Button (right) -->
                <div class="lg:hidden">
                    <button @click="toggleMobileMenu" class="p-2 text-white hover:text-[#EDA220] transition-colors duration-300" aria-label="Toggle menu">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path v-if="!isMobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="isMobileOpen" class="lg:hidden bg-[#2a2a2a] border-t border-[#333]">
            <div class="px-6 py-4 space-y-1">
                <a @click="smoothScroll('hero')" class="mobile-nav-link">Home</a>
                <a @click="smoothScroll('about')" class="mobile-nav-link">About</a>
                <a @click="smoothScroll('services')" class="mobile-nav-link">Services</a>
                <a @click="smoothScroll('gallery')" class="mobile-nav-link">Gallery</a>

                <div class="pt-4 border-t border-[#333] mt-4">
                    <Button label="Contact" @click="smoothScroll('contact')" class="w-full !px-6 !py-3 !bg-[#EDA220] hover:!bg-[#d1901c] !text-white font-medium transition-colors duration-300 !border-none" style="border-radius: 2px" />
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="css" scoped>
.nav-link {
    color: #ffffff;
    font-weight: 400;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s ease;
    letter-spacing: 0.025em;
}

.nav-link:hover {
    color: #eda220;
}

.mobile-nav-link {
    display: block;
    color: #ffffff;
    font-weight: 400;
    font-size: 1.125rem;
    cursor: pointer;
    padding: 0.75rem 0;
    transition: color 0.3s ease;
    border-bottom: 1px solid transparent;
}

.mobile-nav-link:hover {
    color: #eda220;
    border-bottom-color: #333;
}

/* Smooth backdrop blur support */
@supports (backdrop-filter: blur(8px)) {
    nav {
        backdrop-filter: blur(8px);
    }
}
</style>
