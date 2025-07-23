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

// For lightbox
const showLightbox = ref(false);
const selectedProject = ref(null);

function openLightbox(project) {
    selectedProject.value = project;
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
                        We provide our clients with years of experience of work with premium materials, traditional craftsmanship and the most refined finishes which set the standard for superior quality and an exceptional result.
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

                <!-- Featured Project - Stacked Images -->
                <div>
                    <div class="space-y-6">
                        <!-- Before Image -->
                        <div class="group cursor-pointer" @click="openLightbox(projects[0])">
                            <div class="relative aspect-[4/3] overflow-hidden">
                                <img :src="projects[0].before" :alt="projects[0].title + ' before'" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                                <div class="absolute top-4 left-4 bg-white/90 text-gray-900 text-xs px-3 py-1 font-medium tracking-wider">BEFORE</div>
                            </div>
                        </div>

                        <!-- After Image -->
                        <div class="group cursor-pointer" @click="openLightbox(projects[0])">
                            <div class="relative aspect-[4/3] overflow-hidden">
                                <img :src="projects[0].after" :alt="projects[0].title + ' after'" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                                <div class="absolute top-4 left-4 bg-[#EDA220] text-white text-xs px-3 py-1 font-medium tracking-wider">AFTER</div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6">
                        <div class="text-xs text-gray-400 font-medium tracking-wider mb-2">{{ projects[0].category }}</div>
                        <h3 class="text-2xl text-white font-light mb-3">{{ projects[0].title }}</h3>
                        <p class="text-gray-400 font-light leading-relaxed">{{ projects[0].description }}</p>
                    </div>
                </div>
            </div>

            <!-- Additional Projects Grid -->
            <div class="grid md:grid-cols-2 gap-16">
                <div v-for="(project, idx) in projects.slice(1)" :key="idx + 1" class="space-y-6">
                    <!-- Before Image -->
                    <div class="group cursor-pointer" @click="openLightbox(project)">
                        <div class="relative aspect-[4/3] overflow-hidden">
                            <img :src="project.before" :alt="project.title + ' before'" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                            <div class="absolute top-4 left-4 bg-white/90 text-gray-900 text-xs px-3 py-1 font-medium tracking-wider">BEFORE</div>
                        </div>
                    </div>

                    <!-- After Image -->
                    <div class="group cursor-pointer" @click="openLightbox(project)">
                        <div class="relative aspect-[4/3] overflow-hidden">
                            <img :src="project.after" :alt="project.title + ' after'" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                            <div class="absolute top-4 left-4 bg-[#EDA220] text-white text-xs px-3 py-1 font-medium tracking-wider">AFTER</div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <div class="text-xs text-gray-400 font-medium tracking-wider mb-2">{{ project.category }}</div>
                        <h3 class="text-xl text-white font-light mb-3">{{ project.title }}</h3>
                        <p class="text-gray-400 font-light text-sm leading-relaxed">{{ project.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Lightbox Modal -->
        <div v-if="showLightbox && selectedProject" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" @click.self="closeLightbox">
            <div class="relative max-w-6xl w-full bg-white overflow-hidden">
                <!-- Close Button -->
                <button @click="closeLightbox" class="absolute top-4 right-4 bg-black/80 hover:bg-black text-white w-12 h-12 flex items-center justify-center font-bold z-20 transition-colors duration-300" aria-label="Close">×</button>

                <!-- Stacked Images in Lightbox -->
                <div class="grid md:grid-cols-2 gap-4 p-8">
                    <!-- Before -->
                    <div>
                        <div class="relative aspect-[4/3] overflow-hidden mb-4">
                            <img :src="selectedProject.before" :alt="selectedProject.title + ' before'" class="w-full h-full object-cover" />
                            <div class="absolute top-4 left-4 bg-white text-gray-900 text-sm px-4 py-2 font-medium tracking-wider">BEFORE</div>
                        </div>
                    </div>

                    <!-- After -->
                    <div>
                        <div class="relative aspect-[4/3] overflow-hidden mb-4">
                            <img :src="selectedProject.after" :alt="selectedProject.title + ' after'" class="w-full h-full object-cover" />
                            <div class="absolute top-4 left-4 bg-[#EDA220] text-white text-sm px-4 py-2 font-medium tracking-wider">AFTER</div>
                        </div>
                    </div>
                </div>

                <!-- Project Details -->
                <div class="px-8 pb-8">
                    <div class="text-xs text-gray-500 font-medium tracking-wider mb-2">{{ selectedProject.category }}</div>
                    <h3 class="text-3xl font-light text-gray-900 mb-4">{{ selectedProject.title }}</h3>
                    <p class="text-gray-600 font-light leading-relaxed text-lg">{{ selectedProject.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Ensure smooth hover transitions */
.group img {
    will-change: transform;
}
</style>
