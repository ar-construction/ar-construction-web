<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const reviews = [
    {
        name: 'Sarah M.',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        text: 'Wow! Great company! 5 stars!'
    },
    {
        name: 'James R.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        text: 'From start to finish, the process was smooth and stress-free. Our remodel looks amazing and the quality is top-notch.'
    },
    {
        name: 'Emily T.',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: 'Great communication, beautiful work, and they really cared about the details. We love our new space!'
    },
    {
        name: 'Mark D.',
        avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
        text: 'Every promise kept, every detail managed. I’ve already recommended A&R to neighbors!'
    },
    {
        name: 'Lindsey V.',
        avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
        text: 'They respected our budget, our home, and our time. Couldn’t have asked for a better experience.'
    },
    {
        name: 'Paul G.',
        avatar: 'https://randomuser.me/api/portraits/men/90.jpg',
        text: 'The A&R team is courteous, efficient, and the craftsmanship is truly exceptional. Five stars!'
    }
];

const CARD_COUNT = 3;
const INTERVAL = 7000;
const FADE_DURATION = 1000;

// Set initial unique indices
function getInitialIndices() {
    const arr = [];
    while (arr.length < CARD_COUNT) {
        const idx = Math.floor(Math.random() * reviews.length);
        if (!arr.includes(idx)) arr.push(idx);
    }
    return arr;
}
const indices = ref(getInitialIndices());
const fading = ref([false, false, false]);

let timer;
onMounted(() => {
    timer = setInterval(() => {
        // 1. Pick a random card to swap out
        const cardIdx = Math.floor(Math.random() * CARD_COUNT);
        // 2. Find available review indices not currently showing
        const available = [];
        for (let i = 0; i < reviews.length; i++) {
            if (!indices.value.includes(i)) available.push(i);
        }
        if (available.length === 0) return; // All shown; shouldn't happen unless reviews.length <= CARD_COUNT
        // 3. Pick a random review from the available ones
        const newReviewIdx = available[Math.floor(Math.random() * available.length)];
        // 4. Fade out the card, swap content, fade in
        fading.value[cardIdx] = true;
        setTimeout(() => {
            indices.value[cardIdx] = newReviewIdx;
            fading.value[cardIdx] = false;
        }, FADE_DURATION);
    }, INTERVAL);
});
onUnmounted(() => clearInterval(timer));
</script>

<template>
    <section id="testimonials" class="bg-[#2a2a2a] text-white overflow-hidden">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-3 text-[#EDA220] tracking-tight">What Our Clients Say</h2>
                <div class="w-24 h-1 bg-[#EDA220] mx-auto rounded-full mb-7"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div v-for="(idx, card) in indices" :key="'testimonial-card-' + card" class="relative bg-[#333333] rounded-2xl shadow-xl p-8 flex flex-col items-center border border-[#EDA220]/30 group min-h-[340px] max-h-[340px]">
                    <div class="absolute left-1/2 top-0 -translate-x-1/2 w-20 h-1 bg-[#EDA220] rounded-full"></div>
                    <div class="flex flex-col items-center w-full h-full transition-opacity duration-700" :class="{ 'opacity-0': fading[card], 'opacity-100': !fading[card] }">
                        <div class="flex items-center mb-5">
                            <img :src="reviews[idx].avatar" alt="Reviewer photo" class="w-14 h-14 rounded-full border-2 border-[#EDA220] shadow mr-4" />
                            <div>
                                <div class="font-semibold text-[#EDA220] text-lg">{{ reviews[idx].name }}</div>
                                <div class="flex items-center gap-0.5 mt-0.5">
                                    <span v-for="n in 5" :key="n" class="text-[#EDA220] text-base">&#9733;</span>
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-200 italic text-lg leading-relaxed mb-3 text-center flex-1">“{{ reviews[idx].text }}”</p>
                        <div class="mt-auto text-xs text-gray-500 tracking-wide uppercase">Google Review</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
