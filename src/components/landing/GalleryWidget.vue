<script setup>
import { ref } from 'vue';

const projects = ref([
    {
        before: new URL('@/assets/gallery/before-1.jpg', import.meta.url).href,
        after: new URL('@/assets/gallery/after-1.jpg', import.meta.url).href,
        alt: 'Living Room Transformation'
    },
    {
        before: new URL('@/assets/gallery/before-2.jpg', import.meta.url).href,
        after: new URL('@/assets/gallery/after-2.jpg', import.meta.url).href,
        alt: 'Modern Bathroom Upgrade'
    },
    {
        before: new URL('@/assets/gallery/before-3.jpg', import.meta.url).href,
        after: new URL('@/assets/gallery/after-3.jpg', import.meta.url).href,
        alt: 'Kitchen Renovation'
    }
]);

const sliderValue = ref(Array(projects.value.length).fill(50));

// For lightbox
const showLightbox = ref(false);
const selectedIndex = ref(0);
const lightboxSlider = ref(50);

function openLightbox(idx) {
    selectedIndex.value = idx;
    lightboxSlider.value = sliderValue.value[idx];
    showLightbox.value = true;
}
function closeLightbox() {
    showLightbox.value = false;
}
</script>

<template>
    <section id="gallery" class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-[#EDA220] text-center mb-10">Our Work Gallery</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div v-for="(project, idx) in projects" :key="idx" class="overflow-hidden rounded-lg shadow-lg bg-white p-2 cursor-pointer" @click="openLightbox(idx)">
                <div class="relative w-full h-48 select-none">
                    <!-- After Image (full, always visible) -->
                    <img :src="project.after" :alt="project.alt + ' after'" class="absolute inset-0 w-full h-full object-cover rounded-lg" draggable="false" />
                    <!-- Before Image (clipped horizontally, same size as after) -->
                    <div class="absolute inset-0 h-full" :style="{ width: sliderValue[idx] + '%' }" style="overflow: hidden; pointer-events: none">
                        <img :src="project.before" :alt="project.alt + ' before'" class="w-full h-full object-cover rounded-lg" draggable="false" />
                    </div>
                    <!-- Divider line -->
                    <div class="absolute top-0 bottom-0" :style="{ left: `calc(${sliderValue[idx]}% - 1px)` }" style="width: 2px; background: #eda220; z-index: 1; pointer-events: none"></div>
                    <!-- Labels -->
                    <span class="absolute left-2 top-2 bg-white/80 text-xs px-2 py-1 rounded font-semibold text-gray-700 shadow">Before</span>
                    <span class="absolute right-2 top-2 bg-white/80 text-xs px-2 py-1 rounded font-semibold text-gray-700 shadow">After</span>
                    <!-- Slider handle (stop click from bubbling up to open lightbox) -->
                    <input type="range" min="0" max="100" v-model="sliderValue[idx]" class="absolute bottom-2 left-1/2 -translate-x-1/2 w-11/12 accent-[#EDA220]" style="z-index: 2" @click.stop />
                </div>
                <div class="mt-3 text-center text-gray-700 font-medium">{{ project.alt }}</div>
            </div>
        </div>

        <!-- Lightbox Modal -->
        <div v-if="showLightbox" class="fixed inset-0 z-50 flex items-center justify-center bg-white/55 backdrop-blur-sm transition" @click.self="closeLightbox">
            <div class="relative">
                <button @click="closeLightbox" class="absolute -top-4 -left-4 bg-white rounded-full shadow p-2 text-2xl text-gray-700 hover:text-[#EDA220] font-bold focus:outline-none z-10" aria-label="Close" style="line-height: 1">&times;</button>
                <div class="relative w-[80vw] max-w-3xl h-[60vh] min-h-[300px] select-none bg-white rounded-xl shadow-2xl border border-gray-200 flex items-center justify-center">
                    <!-- After Image (full, always visible) -->
                    <img :src="projects[selectedIndex].after" :alt="projects[selectedIndex].alt + ' after'" class="absolute inset-0 w-full h-full object-cover rounded-xl" draggable="false" />
                    <!-- Before Image (clipped horizontally, same size as after) -->
                    <div class="absolute inset-0 h-full" :style="{ width: lightboxSlider + '%' }" style="overflow: hidden; pointer-events: none">
                        <img :src="projects[selectedIndex].before" :alt="projects[selectedIndex].alt + ' before'" class="w-full h-full object-cover rounded-xl" draggable="false" />
                    </div>
                    <!-- Divider line -->
                    <div class="absolute top-0 bottom-0" :style="{ left: `calc(${lightboxSlider}% - 1px)` }" style="width: 2px; background: #eda220; z-index: 1; pointer-events: none"></div>
                    <!-- Labels -->
                    <span class="absolute left-4 top-4 bg-white/80 text-sm px-3 py-1 rounded font-semibold text-gray-700 shadow">Before</span>
                    <span class="absolute right-4 top-4 bg-white/80 text-sm px-3 py-1 rounded font-semibold text-gray-700 shadow">After</span>
                    <!-- Slider handle -->
                    <input type="range" min="0" max="100" v-model="lightboxSlider" class="absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 accent-[#EDA220]" style="z-index: 2" @click.stop />
                </div>
                <div class="mt-6 text-center text-gray-700 font-medium text-lg">{{ projects[selectedIndex].alt }}</div>
            </div>
        </div>
    </section>
</template>
