<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Track which sections are visible
const visibleSections = ref(new Set());

// Track scroll position for back-to-top button
const showBackToTop = ref(false);

// Intersection Observer for fade-in animations
let observer = null;

onMounted(() => {
    // Create intersection observer
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    visibleSections.value.add(entry.target.id);
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of element is visible
            rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully in view
        }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
        observer?.observe(section);
    });

    // Add scroll listener for back-to-top button
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / documentHeight;

        // Show button when scrolled more than 50%
        showBackToTop.value = scrollPercent > 0.5;
    };

    window.addEventListener('scroll', handleScroll);

    // Store reference for cleanup in a local variable
    cleanupScrollListener = () => {
        window.removeEventListener('scroll', handleScroll);
    };
});

let cleanupScrollListener = null;

onUnmounted(() => {
    observer?.disconnect();
    // Cleanup scroll listener
    if (cleanupScrollListener) {
        cleanupScrollListener();
    }
});

// Check if section is visible
function isVisible(sectionId) {
    return visibleSections.value.has(sectionId);
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
</script>

<template>
    <div class="min-h-screen text-gray-900 bg-[#2a2a2a]">
        <!-- HERO SECTION -->
        <section
            id="hero"
            class="relative text-center overflow-hidden transition-all duration-1000 ease-out"
            :class="{
                'opacity-100 translate-y-0': isVisible('hero'),
                'opacity-0 translate-y-8': !isVisible('hero')
            }"
        >
            <HeroWidget />
        </section>

        <!-- ABOUT SECTION -->
        <section
            id="about"
            class="py-16 px-6 md:px-16 lg:px-32 relative transition-all duration-1000 ease-out delay-100"
            :class="{
                'opacity-100 translate-y-0': isVisible('about'),
                'opacity-0 translate-y-12': !isVisible('about')
            }"
        >
            <AboutWidget />
        </section>

        <!-- SERVICES SECTION -->
        <section
            id="services"
            class="py-16 px-6 md:px-16 lg:px-32 transition-all duration-1000 ease-out delay-200"
            :class="{
                'opacity-100 translate-y-0': isVisible('services'),
                'opacity-0 translate-y-12': !isVisible('services')
            }"
        >
            <ServicesWidget />
        </section>

        <!-- PROCESS SECTION -->
        <section
            id="process"
            class="py-16 px-6 md:px-16 lg:px-32 transition-all duration-1000 ease-out delay-300"
            :class="{
                'opacity-100 translate-y-0': isVisible('process'),
                'opacity-0 translate-y-12': !isVisible('process')
            }"
        >
            <ProcessesWidget />
        </section>

        <!-- GALLERY SECTION -->
        <section
            id="gallery"
            class="py-16 px-6 md:px-16 lg:px-32 transition-all duration-1000 ease-out delay-100"
            :class="{
                'opacity-100 translate-y-0': isVisible('gallery'),
                'opacity-0 translate-y-12': !isVisible('gallery')
            }"
        >
            <GalleryWidget />
        </section>

        <!-- TESTIMONIALS SECTION -->
        <section
            id="testimonials"
            class="py-16 px-6 md:px-16 lg:px-32 transition-all duration-1000 ease-out delay-200"
            :class="{
                'opacity-100 translate-y-0': isVisible('testimonials'),
                'opacity-0 translate-y-12': !isVisible('testimonials')
            }"
        >
            <TestimonialsWidget />
        </section>

        <!-- PROJECT MAP SECTION -->
        <section
            id="completed-jobs-map"
            class="py-16 px-6 md:px-16 lg:px-32 transition-all duration-1000 ease-out delay-300"
            :class="{
                'opacity-100 translate-y-0': isVisible('completed-jobs-map'),
                'opacity-0 translate-y-12': !isVisible('completed-jobs-map')
            }"
        >
            <ProjectMapWidget />
        </section>

        <!-- CONTACT SECTION -->
        <section
            id="contact"
            class="py-16 px-6 md:px-16 lg:px-32 transition-all duration-1200 ease-out delay-100"
            :class="{
                'opacity-100 translate-y-0': isVisible('contact'),
                'opacity-0 translate-y-12': !isVisible('contact')
            }"
        >
            <ContactWidget />
        </section>

        <!-- Back to Top Button -->
        <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-4 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-4 scale-95"
        >
            <button
                v-if="showBackToTop"
                @click="scrollToTop"
                class="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#EDA220] hover:bg-[#d1901c] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                aria-label="Back to top"
            >
                <svg class="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
            </button>
        </Transition>
    </div>
</template>

<style scoped>
/* Ensure smooth transitions */
section {
    will-change: transform, opacity;
}

/* Add subtle scale effect for extra elegance */
section:not(#hero) {
    transform-origin: center bottom;
}

@media (prefers-reduced-motion: reduce) {
    section {
        transition: none !important;
    }
}
</style>
