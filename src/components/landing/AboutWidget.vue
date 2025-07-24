<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const displayCount = ref(0);
const counterElement = ref(null);
const targetCount = 75; // Change this to your actual project count
const hasAnimated = ref(false);

let observer = null;

// Animate counter function
function animateCounter() {
    if (hasAnimated.value) return;

    hasAnimated.value = true;
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const increment = targetCount / steps;
    const stepDuration = duration / steps;

    let currentCount = 0;
    const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
            displayCount.value = targetCount;
            clearInterval(timer);
        } else {
            displayCount.value = Math.floor(currentCount);
        }
    }, stepDuration);
}

onMounted(() => {
    // Set up intersection observer for counter animation
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated.value) {
                    animateCounter();
                }
            });
        },
        {
            threshold: 0.5 // Trigger when 50% of element is visible
        }
    );

    // Start observing the counter element
    if (counterElement.value) {
        observer.observe(counterElement.value);
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>
<template>
    <section id="about" class="pt-16">
        <div class="max-w-6xl mx-auto">
            <!-- Main About Section -->
            <div class="mb-32">
                <div class="text-center mb-10">
                    <h2 class="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
                        <span class="block text-[#EDA220] font-normal">We do good for good people, with good people</span>
                    </h2>
                    <p class="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">Founded with a vision to raise the standard in residential contracting, we exist to serve both the client and the crew.</p>
                </div>

                <!-- Mission Content - Full Width -->
                <div class="max-w-4xl mx-auto space-y-12">
                    <div class="text-center">
                        <p class="text-2xl text-gray-300 font-light leading-relaxed mb-12">Every decision we make is guided by a dual mission:</p>
                    </div>

                    <!-- Dual Mission Cards -->
                    <div class="grid md:grid-cols-2 gap-12">
                        <div class="text-center p-8 border border-white/10 bg-white/5">
                            <div class="w-16 h-16 bg-[#EDA220] mx-auto mb-6 flex items-center justify-center">
                                <svg class="w-8 h-8 text-[#2a2a2a]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl text-white font-medium mb-4">Deliver Real Value</h3>
                            <p class="text-lg text-gray-300 font-light leading-relaxed">To homeowners through honest, high-quality work that stands the test of time and exceeds expectations.</p>
                        </div>

                        <div class="text-center p-8 border border-white/10 bg-white/5">
                            <div class="w-16 h-16 bg-[#EDA220] mx-auto mb-6 flex items-center justify-center">
                                <svg class="w-8 h-8 text-[#2a2a2a]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl text-white font-medium mb-4">Provide a Platform</h3>
                            <p class="text-lg text-gray-300 font-light leading-relaxed">Where hard-working individuals can grow, thrive, and take pride in the quality they build.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Values Grid -->
            <div class="grid md:grid-cols-3 gap-12">
                <div class="text-center space-y-4">
                    <div class="w-12 h-12 bg-[#EDA220] mx-auto flex items-center justify-center">
                        <svg class="w-6 h-6 text-[#2a2a2a]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h4 class="text-xl text-white font-medium">Integrity</h4>
                    <p class="text-gray-300 font-light leading-relaxed">Transparent communication and honest pricing from day one through project completion.</p>
                </div>

                <div class="text-center space-y-4">
                    <div class="w-12 h-12 bg-[#EDA220] mx-auto flex items-center justify-center">
                        <svg class="w-6 h-6 text-[#2a2a2a]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.61 18.99l-9.08-9.08c.93-2.34.45-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11 6.08 7.52 2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.9 1.9 4.66 2.37 7-1.44l9.08 9.08c.78.78 2.05.78 2.83 0 .78-.78.78-2.07-.2-2.76z" />
                        </svg>
                    </div>
                    <h4 class="text-xl text-white font-medium">Craftsmanship</h4>
                    <p class="text-gray-300 font-light leading-relaxed">Skilled professionals who take pride in their work and attention to every detail.</p>
                </div>

                <div class="text-center space-y-4">
                    <div class="w-12 h-12 bg-[#EDA220] mx-auto flex items-center justify-center">
                        <svg class="w-6 h-6 text-[#2a2a2a]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </div>
                    <h4 class="text-xl text-white font-medium">Reliability</h4>
                    <p class="text-gray-300 font-light leading-relaxed">Consistent performance, on-time delivery, and respect for your investment.</p>
                </div>
            </div>
        </div>
    </section>
</template>
