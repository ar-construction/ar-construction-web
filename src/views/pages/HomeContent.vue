<script setup lang="ts">
import ProcessesWidget from '../../components/landing/ProcessesWidget.vue';
</script>

<template>
    <div class="min-h-screen text-gray-900">
        <!-- HERO SECTION -->
        <section id="hero" class="relative pt-32 pb-40 px-6 md:px-16 lg:px-32 text-center overflow-hidden">
            <HeroWidget />
        </section>

        <!-- ABOUT SECTION -->
        <section id="about" class="py-24 px-6 md:px-16 lg:px-32 relative">
            <AboutWidget />
        </section>

        <!-- SERVICES SECTION -->
        <section id="services" class="py-24 px-6 md:px-16 lg:px-32">
            <ServicesWidget />
        </section>

        <!-- TESTIMONIAL/PROCESS SECTION -->
        <section id="gallery" class="py-24 px-6 md:px-16 lg:px-32">
            <ProcessesWidget />
        </section>

        <!-- GALLERY SECTION -->
        <section id="gallery" class="py-24 px-6 md:px-16 lg:px-32">
            <GalleryWidget />
        </section>

        <!-- CONTACT SECTION -->
        <section id="contact" class="py-24 px-6 md:px-16 lg:px-32">
            <ContactWidget />
        </section>
    </div>
</template>
