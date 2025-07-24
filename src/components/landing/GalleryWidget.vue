<script setup>
import { ref } from 'vue';

const projects = ref([
    {
        before: new URL('@/assets/gallery/before-1.jpg', import.meta.url).href,
        after: new URL('@/assets/gallery/after-1.jpg', import.meta.url).href,
        title: 'Kitchen Renovation',
        category: 'KITCHEN REMODEL',
        description: 'Full kitchen remodel with custom cabinetry, premium appliances, and thoughtful design that maximizes both form and function.'
    },
    {
        before: new URL('@/assets/gallery/before-2.jpg', import.meta.url).href,
        after: new URL('@/assets/gallery/after-2.jpg', import.meta.url).href,
        title: 'Master Bathroom',
        category: 'BATHROOM RENOVATION',
        description: 'Luxury master bathroom featuring spa-like amenities, custom vanity, and premium finishes throughout.'
    },
    {
        before: new URL('@/assets/gallery/before-3.jpg', import.meta.url).href,
        after: new URL('@/assets/gallery/after-3.jpg', import.meta.url).href,
        title: 'Living Room Transformation',
        category: 'RESIDENTIAL REMODEL',
        description: 'Complete living space modernization with custom millwork, lighting design, and contemporary finishes.'
    }
]);

const sliderValues = ref(Array(projects.value.length).fill(50));

// For lightbox
const showLightbox = ref(false);
const selectedProject = ref(null);
const lightboxSlider = ref(50);

function openLightbox(project, index) {
    selectedProject.value = project;
    lightboxSlider.value = sliderValues.value[index];
    showLightbox.value = true;
}

function closeLightbox() {
    showLightbox.value = false;
}

function smoothScroll(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
</script>

<template>
    <section id="gallery" class="py-24 px-6">
        <div class="max-w-7xl mx-auto">
            <!-- Section Header -->
            <div class="grid lg:grid-cols-2 gap-20 items-start mb-24">
                <div>
                    <h2 class="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight leading-tight">
                        What We
                        <span class="block text-[#EDA220] font-normal">Build.</span>
                    </h2>
                    <p class="text-xl text-gray-300 font-light leading-relaxed mb-8">
                        Rooted in experience and built with care, our work reflects a deep commitment to craftsmanship, clear communication, and long-term value for both clients and our growing team.
                    </p>

                    <!-- Services List -->
                    <div class="space-y-3 mb-8">
                        <div class="flex items-center space-x-3">
                            <div class="w-2 h-2 bg-[#EDA220]"></div>
                            <span class="text-gray-300 font-light tracking-wide">LUXURY RESIDENCES</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-2 h-2 bg-[#EDA220]"></div>
                            <span class="text-gray-300 font-light tracking-wide">KITCHEN & BATHROOM</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-2 h-2 bg-[#EDA220]"></div>
                            <span class="text-gray-300 font-light tracking-wide">WHOLE HOME RENOVATION</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-2 h-2 bg-[#EDA220]"></div>
                            <span class="text-gray-300 font-light tracking-wide">CUSTOM CONSTRUCTION</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-2 h-2 bg-[#EDA220]"></div>
                            <span class="text-gray-300 font-light tracking-wide">EXTERIOR IMPROVEMENTS</span>
                        </div>
                    </div>

                    <button @click="smoothScroll('contact')" class="border border-white text-white px-8 py-3 font-light tracking-wider hover:bg-white hover:text-[#2a2a2a] transition-all duration-300">SERVICES</button>
                </div>

                <!-- Featured Project Slider -->
                <div>
                    <div class="relative aspect-[4/3] overflow-hidden bg-gray-900 group cursor-pointer" @click="openLightbox(projects[0], 0)">
                        <!-- After Image (base layer) -->
                        <img :src="projects[0].after" :alt="projects[0].title + ' after'" class="absolute inset-0 w-full h-full object-cover" />

                        <!-- Before Image (clipped) with proper scaling -->
                        <div class="absolute inset-0 overflow-hidden" :style="{ clipPath: `inset(0 ${100 - sliderValues[0]}% 0 0)` }">
                            <img :src="projects[0].before" :alt="projects[0].title + ' before'" class="w-full h-full object-cover" />
                        </div>

                        <!-- Ultra-clean divider line -->
                        <div class="absolute top-0 bottom-0 w-px bg-white shadow-lg z-20 opacity-80" :style="{ left: sliderValues[0] + '%' }"></div>

                        <!-- Clean labels -->
                        <div class="absolute top-6 left-6 text-white text-sm font-medium tracking-wider opacity-90">BEFORE</div>
                        <div class="absolute top-6 right-6 text-white text-sm font-medium tracking-wider opacity-90">AFTER</div>

                        <!-- Ultra-minimal slider -->
                        <div class="absolute bottom-6 left-6 right-6">
                            <input type="range" min="0" max="100" v-model="sliderValues[0]" class="clean-slider w-full" @click.stop />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Additional Projects Grid -->
            <div class="grid md:grid-cols-2 gap-16">
                <div v-for="(project, idx) in projects.slice(1)" :key="idx + 1" class="space-y-6">
                    <div class="relative aspect-[4/3] overflow-hidden bg-gray-900 group cursor-pointer" @click="openLightbox(project, idx + 1)">
                        <!-- After Image (base layer) -->
                        <img :src="project.after" :alt="project.title + ' after'" class="absolute inset-0 w-full h-full object-cover" />

                        <!-- Before Image (clipped) -->
                        <div class="absolute inset-0 overflow-hidden" :style="{ clipPath: `inset(0 ${100 - sliderValues[idx + 1]}% 0 0)` }">
                            <img :src="project.before" :alt="project.title + ' before'" class="w-full h-full object-cover" />
                        </div>

                        <!-- Clean divider line -->
                        <div class="absolute top-0 bottom-0 w-px bg-white shadow-lg z-20 opacity-80" :style="{ left: sliderValues[idx + 1] + '%' }"></div>

                        <!-- Clean labels -->
                        <div class="absolute top-4 left-4 text-white text-xs font-medium tracking-wider opacity-90">BEFORE</div>
                        <div class="absolute top-4 right-4 text-white text-xs font-medium tracking-wider opacity-90">AFTER</div>

                        <!-- Ultra-minimal slider -->
                        <div class="absolute bottom-4 left-4 right-4">
                            <input type="range" min="0" max="100" v-model="sliderValues[idx + 1]" class="clean-slider w-full" @click.stop />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Lightbox Modal -->
        <div v-if="showLightbox && selectedProject" class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4" @click.self="closeLightbox">
            <div class="relative w-[95vw] max-w-6xl h-[85vh] bg-black overflow-hidden">
                <!-- Close Button -->
                <button @click="closeLightbox" class="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white w-12 h-12 flex items-center justify-center font-bold z-30 transition-colors duration-300 backdrop-blur-sm" aria-label="Close">
                    ×
                </button>

                <!-- Full-screen slider -->
                <div class="relative w-full h-full" @click.stop>
                    <!-- After Image -->
                    <img :src="selectedProject.after" :alt="selectedProject.title + ' after'" class="absolute inset-0 w-full h-full object-contain" />

                    <!-- Before Image (clipped) -->
                    <div class="absolute inset-0 overflow-hidden" :style="{ clipPath: `inset(0 ${100 - lightboxSlider}% 0 0)` }">
                        <img :src="selectedProject.before" :alt="selectedProject.title + ' before'" class="w-full h-full object-contain" />
                    </div>

                    <!-- Clean divider line -->
                    <div class="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl z-20" :style="{ left: lightboxSlider + '%' }"></div>

                    <!-- Labels -->
                    <div class="absolute top-8 left-8 text-white text-lg font-medium tracking-wider bg-black/30 px-4 py-2 backdrop-blur-sm">BEFORE</div>
                    <div class="absolute top-8 right-20 text-white text-lg font-medium tracking-wider bg-black/30 px-4 py-2 backdrop-blur-sm">AFTER</div>

                    <!-- Lightbox slider -->
                    <div class="absolute bottom-8 left-8 right-8">
                        <input type="range" min="0" max="100" v-model="lightboxSlider" class="clean-slider w-full" @click.stop />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.clean-slider {
    appearance: none;
    background: transparent;
    height: 4px;
    outline: none;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
}

.clean-slider::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background: #eda220;
    border: 2px solid white;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
}

.clean-slider::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(237, 162, 32, 0.4);
}

.clean-slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #eda220;
    border: 2px solid white;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
}

/* Smooth transitions */
.group img {
    will-change: transform;
}
</style>
