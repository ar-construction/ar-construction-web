<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import after1 from '@/assets/gallery/after-1.jpg';
import after2 from '@/assets/gallery/after-2.jpg';
import after3 from '@/assets/gallery/after-3.jpg';
const projectImages = [after1, after2, after3];

const currentImageIndex = ref(0);
let intervalId = null;

function smoothScroll(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

onMounted(() => {
    // Auto-advance carousel every 8 seconds
    intervalId = setInterval(() => {
        currentImageIndex.value = (currentImageIndex.value + 1) % projectImages.length;
    }, 8000);
});

onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
});

function setImage(index) {
    currentImageIndex.value = index;
}
</script>

<template>
    <div class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Background Carousel -->
        <div class="absolute inset-0 z-0">
            <!-- Single active image -->
            <div class="absolute inset-0">
                <div class="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out" :style="{ backgroundImage: `url(${projectImages[currentImageIndex]})` }"></div>
            </div>

            <!-- Dark overlay for text readability -->
            <div class="absolute inset-0 bg-black/60 z-10"></div>

            <!-- Subtle gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 flex flex-col items-center justify-center max-w-6xl mx-auto px-6 py-20">
            <!-- Hero headline -->
            <div class="text-center mb-16 space-y-4">
                <h1 class="text-6xl md:text-8xl font-light text-white tracking-tight leading-none mb-8 drop-shadow-lg">
                    Where
                    <span class="block text-[#EDA220] font-normal drop-shadow-lg">Craftmanship</span>
                    <span class="block font-light drop-shadow-lg">Meets</span>
                    <span class="block text-[#EDA220] font-normal drop-shadow-lg">Accountability</span>
                </h1>
            </div>

            <!-- Description -->
            <div class="text-center mb-16 max-w-3xl">
                <p class="text-xl md:text-2xl text-white font-light leading-relaxed drop-shadow-md">
                    We’re here to raise the standard in residential construction - delivering dependable work, transparent service, and long-term value for clients and crew alike.
                </p>
            </div>

            <!-- CTA buttons -->
            <div class="flex flex-col sm:flex-row gap-6 items-center mb-16">
                <Button label="About A&R" @click="smoothScroll('about')" class="!px-12 !py-4 !text-lg font-medium !bg-[#EDA220] !text-white hover:!bg-[#d1901c] transition-all duration-300 !border-none shadow-xl" style="border-radius: 2px" />
            </div>

            <!-- Carousel indicators -->
            <div class="flex space-x-3 mb-12">
                <button
                    v-for="(image, index) in projectImages"
                    :key="index"
                    @click="setImage(index)"
                    class="w-2 h-2 transition-all duration-300"
                    :class="currentImageIndex === index ? 'bg-[#EDA220] w-8' : 'bg-white/50 hover:bg-white/75'"
                    :aria-label="`View project ${index + 1}`"
                ></button>
            </div>

            <!-- Tagline -->
            <!-- <div class="text-center mb-8">
                <p class="text-sm text-white/80 font-light tracking-wider uppercase drop-shadow">
                    We do good for good people,<br />
                    with good people
                </p>
            </div> -->

            <!-- Scroll indicator (now just below the text) -->
            <div class="mx-auto mt-4 flex items-center justify-center cursor-pointer z-20" @click="smoothScroll('about')" aria-label="Scroll to About">
                <svg class="w-10 h-10 text-[#EDA220] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Smooth transitions for carousel */
.transition-opacity {
    transition: opacity 2s ease-in-out;
}

/* Enhanced drop shadow for better text visibility */
.drop-shadow-lg {
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5));
}

.drop-shadow-md {
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
}

/* Ensure full height on mobile */
@media (max-height: 600px) {
    .min-h-screen {
        min-height: 100vh;
    }
}
</style>
