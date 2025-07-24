<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const processElement = ref(null);
const isVisible = ref(false);
const currentStep = ref(0);

let observer = null;
let stepTimer = null;

// Animate through steps progressively
function animateSteps() {
    if (currentStep.value >= 4) {
        // Reset after a pause at the end
        setTimeout(() => {
            currentStep.value = 0;
            setTimeout(() => {
                currentStep.value = 1;
                animateSteps();
            }, 300);
        }, 2000); // Pause for 2 seconds at end before reset
        return;
    }

    stepTimer = setTimeout(() => {
        currentStep.value++;
        animateSteps();
    }, 1200); // Slower: 1.2 seconds between each step
}

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !isVisible.value) {
                    isVisible.value = true;
                    // Start animation after a brief delay
                    setTimeout(() => {
                        currentStep.value = 1;
                        animateSteps();
                    }, 300);
                }
            });
        },
        {
            threshold: 0.3 // Trigger when 30% visible
        }
    );

    if (processElement.value) {
        observer.observe(processElement.value);
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
    if (stepTimer) {
        clearTimeout(stepTimer);
    }
});

// Helper function to check if step is active
function isStepActive(step) {
    return currentStep.value >= step;
}
</script>

<template>
    <section id="process">
        <div class="max-w-6xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-20">
                <h2 class="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
                    How We
                    <span class="text-[#EDA220] font-normal">Work.</span>
                </h2>
                <p class="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">Our proven methodology ensures every project is delivered on time, on budget, and to the highest standards of quality.</p>
            </div>

            <!-- Process Steps -->
            <div ref="processElement" class="grid md:grid-cols-4 gap-12 mb-20 relative">
                <!-- Step 1: Discovery -->
                <div class="text-center group relative">
                    <div class="relative mb-8">
                        <div
                            class="w-16 h-16 mx-auto flex items-center justify-center text-white font-bold text-xl mb-4 transition-all duration-900 border-2"
                            :class="isStepActive(1) ? 'bg-[#EDA220] text-[#2a2a2a] border-[#EDA220] scale-110' : 'bg-transparent border-gray-600'"
                        >
                            01
                        </div>
                    </div>
                    <h3 class="text-xl font-medium mb-3 transition-colors duration-900" :class="isStepActive(1) ? 'text-[#EDA220]' : 'text-gray-400'">Discovery</h3>
                    <p class="font-light leading-relaxed transition-colors duration-900" :class="isStepActive(1) ? 'text-gray-300' : 'text-gray-500'">
                        We start by understanding your vision, lifestyle needs, timeline, and budget through detailed consultation.
                    </p>
                </div>

                <!-- Step 2: Design -->
                <div class="text-center group relative">
                    <div class="relative mb-8">
                        <div
                            class="w-16 h-16 mx-auto flex items-center justify-center text-white font-bold text-xl mb-4 transition-all duration-900 border-2"
                            :class="isStepActive(2) ? 'bg-[#EDA220] text-[#2a2a2a] border-[#EDA220] scale-110' : 'bg-transparent border-gray-600'"
                        >
                            02
                        </div>
                    </div>
                    <h3 class="text-xl font-medium mb-3 transition-colors duration-900" :class="isStepActive(2) ? 'text-[#EDA220]' : 'text-gray-400'">Design & Planning</h3>
                    <p class="font-light leading-relaxed transition-colors duration-900" :class="isStepActive(2) ? 'text-gray-300' : 'text-gray-500'">
                        Detailed architectural plans, material selections, permit acquisition, and transparent project pricing.
                    </p>
                </div>

                <!-- Step 3: Build -->
                <div class="text-center group relative">
                    <div class="relative mb-8">
                        <div
                            class="w-16 h-16 mx-auto flex items-center justify-center text-white font-bold text-xl mb-4 transition-all duration-900 border-2"
                            :class="isStepActive(3) ? 'bg-[#EDA220] text-[#2a2a2a] border-[#EDA220] scale-110' : 'bg-transparent border-gray-600'"
                        >
                            03
                        </div>
                    </div>
                    <h3 class="text-xl font-medium mb-3 transition-colors duration-900" :class="isStepActive(3) ? 'text-[#EDA220]' : 'text-gray-400'">Construction</h3>
                    <p class="font-light leading-relaxed transition-colors duration-900" :class="isStepActive(3) ? 'text-gray-300' : 'text-gray-500'">
                        Expert craftsmanship with regular progress updates, quality checkpoints, and clear communication.
                    </p>
                </div>

                <!-- Step 4: Deliver -->
                <div class="text-center group">
                    <div class="relative mb-8">
                        <div
                            class="w-16 h-16 mx-auto flex items-center justify-center text-white font-bold text-xl mb-4 transition-all duration-900 border-2"
                            :class="isStepActive(4) ? 'bg-[#EDA220] text-[#2a2a2a] border-[#EDA220] scale-110' : 'bg-transparent border-gray-600'"
                        >
                            04
                        </div>
                    </div>
                    <h3 class="text-xl font-medium mb-3 transition-colors duration-900" :class="isStepActive(4) ? 'text-[#EDA220]' : 'text-gray-400'">Delivery</h3>
                    <p class="font-light leading-relaxed transition-colors duration-900" :class="isStepActive(4) ? 'text-gray-300' : 'text-gray-500'">Final walkthrough, project documentation, thorough cleanup, and ongoing warranty support.</p>
                </div>
            </div>

            <!-- Key Principles -->
            <div class="border-t border-[#333] pt-20">
                <div class="text-center mb-16">
                    <h3 class="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
                        Built on
                        <span class="text-[#EDA220] font-normal">Trust.</span>
                    </h3>
                </div>

                <div class="grid md:grid-cols-3 gap-12">
                    <div class="text-center">
                        <div class="w-12 h-12 bg-[#EDA220] mx-auto mb-4 flex items-center justify-center">
                            <svg class="w-6 h-6 text-[#2a2a2a]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.99 9.99 0 01-6.8-2.47A9.964 9.964 0 013 12c0-5.522 4.03-10 9-10s9 4.478 9 10z" />
                            </svg>
                        </div>
                        <h4 class="text-lg text-white font-medium mb-3">Transparent Communication</h4>
                        <p class="text-gray-300 font-light leading-relaxed">Regular updates, clear timelines, and honest conversations about progress, challenges, and solutions.</p>
                    </div>

                    <div class="text-center">
                        <div class="w-12 h-12 bg-[#EDA220] mx-auto mb-4 flex items-center justify-center">
                            <svg class="w-6 h-6 text-[#2a2a2a]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 class="text-lg text-white font-medium mb-3">Quality Standards</h4>
                        <p class="text-gray-300 font-light leading-relaxed">Rigorous quality control at every phase, using premium materials and proven construction techniques.</p>
                    </div>

                    <div class="text-center">
                        <div class="w-12 h-12 bg-[#EDA220] mx-auto mb-4 flex items-center justify-center">
                            <svg class="w-6 h-6 text-[#2a2a2a]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                        <h4 class="text-lg text-white font-medium mb-3">Lasting Relationships</h4>
                        <p class="text-gray-300 font-light leading-relaxed">We're not just building projects—we're building long-term partnerships with homeowners in our community.</p>
                    </div>
                </div>
            </div>

            <!-- Final Quote -->
            <div class="mt-20 text-center">
                <div class="max-w-4xl mx-auto border-t border-[#333] pt-16">
                    <p class="text-2xl text-gray-300 font-light leading-relaxed italic">"You'll always know where your project stands—every step of the way."</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Ensure smooth animations */
.group {
    will-change: transform;
}

/* Custom pulse animation for active steps */
@keyframes pulse-glow {
    0%,
    100% {
        box-shadow: 0 0 0 0 rgba(237, 162, 32, 0.4);
    }
    50% {
        box-shadow: 0 0 0 8px rgba(237, 162, 32, 0);
    }
}

.bg-\[#EDA220\] {
    animation: pulse-glow 2s infinite;
}
</style>
