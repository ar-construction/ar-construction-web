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
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-surface-200">
        <div class="flex items-center justify-between w-full h-25 px-4 md:px-8 lg:px-16">
            <!-- Logo -->
            <div class="flex-1 flex justify-start">
                <a href="/" class="flex items-center">
                    <img src="@/assets/logo/logo-transparent.png" alt="A&R Logo" class="h-24 transition-all mt-2 mb-2" />
                </a>
            </div>

            <!-- Desktop menu -->
            <ul class="hidden lg:flex flex-1 justify-center items-center gap-8">
                <li><a @click="smoothScroll('hero')" class="block menu-link">Home</a></li>
                <li><a @click="smoothScroll('about')" class="block menu-link">About</a></li>
                <li><a @click="smoothScroll('services')" class="block menu-link">Services</a></li>
                <li><a @click="smoothScroll('gallery')" class="block menu-link">Results</a></li>
                <li><a @click="smoothScroll('contact')" class="block menu-link">Contact</a></li>
            </ul>

            <!-- Desktop buttons -->
            <div class="hidden lg:flex flex-1 justify-end gap-2">
                <Button label="Contact " @click="smoothScroll('contact')" class="px-4 py-2 mr-3 font-bold rounded" style="background: #eda220; color: white; border: none" />
            </div>

            <!-- Mobile hamburger -->
            <div class="flex lg:hidden flex-1 justify-end">
                <Button text severity="secondary" rounded @click="toggleMobileMenu">
                    <i class="pi pi-bars !text-2xl" style="color: #eda220"></i>
                </Button>
            </div>
        </div>

        <!-- Mobile menu -->
        <div v-if="isMobileOpen" class="lg:hidden shadow-md">
            <ul class="flex flex-col gap-2 p-2 text-center">
                <li><a @click="smoothScroll('hero')" class="block menu-link">Home</a></li>
                <li><a @click="smoothScroll('highlights')" class="block menu-link">About</a></li>
                <li><a @click="smoothScroll('decks')" class="block menu-link">Services</a></li>
                <li><a @click="smoothScroll('features')" class="block menu-link">Results</a></li>
                <li><a @click="smoothScroll('pricing')" class="block menu-link">Contact</a></li>
                <li class="mt-2 mr-2">
                    <Button label="Contact" as="router-link" to="/contact" class="px-4 py-2 mr-3 font-bold rounded" style="background: #eda220; color: white; border: none" />
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="css" scoped>
.menu-link {
    padding-left: 0;
    padding-right: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: 500;
    font-size: 1.25rem;
    cursor: pointer;
}

.menu-link:hover {
    color: #e3963e;
}
</style>
