<script setup>
function smoothScroll(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
</script>

<template>
    <div class="relative z-10 flex flex-col items-center justify-center">
        <!-- Logo placeholder with enhanced styling -->
        <div class="w-32 h-32 mb-12 relative">
            <div class="absolute inset-0 rounded-2xl shadow-xl flex items-center justify-center">
                <img src="@/assets/logo/logo-transparent.png" alt="A&R Construction Logo" class="w-20 mb-4 drop-shadow-xl" style="filter: drop-shadow(0 4px 18px rgba(227, 150, 62, 0.2))" />
            </div>
        </div>

        <div class="space-y-2 mb-4">
            <h1 class="text-5xl md:text-7xl font-black mb-2 bg-gradient-to-r from-[#EDA220] via-orange-500 to-yellow-500 bg-clip-text text-transparent tracking-tight leading-tight">Reliable.</h1>
            <h1 class="text-5xl md:text-7xl font-black mb-2 bg-gradient-to-r from-orange-500 via-[#EDA220] to-red-500 bg-clip-text text-transparent tracking-tight leading-tight">Skilled.</h1>
            <h1 class="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-yellow-500 via-orange-500 to-[#EDA220] bg-clip-text text-transparent tracking-tight leading-tight">Purpose-Driven.</h1>
        </div>

        <div class="max-w-4xl mx-auto space-y-6 mb-12">
            <p class="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">At A&R Construction and Remodeling, we bring reliability, craftsmanship, and transparency to a space where those values are often missing.</p>
            <p class="text-lg md:text-xl text-gray-600 leading-relaxed">We believe quality construction starts with people — not just plans — and that a well-built project is the result of a well-supported team.</p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 items-center">
            <Button
                label="Start Your Project"
                @click="smoothScroll('contact')"
                class="!text-lg !px-10 !py-4 text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                style="background: linear-gradient(135deg, #eda220 0%, #f59e0b 100%); border: none; border-radius: 12px"
            />
            <Button
                label="Learn More"
                @click="smoothScroll('about')"
                outlined
                class="!text-lg !px-10 !py-4 !text-[#EDA220] font-bold !border-2 !border-[#EDA220] hover:!bg-[#EDA220] hover:!text-white transition-all duration-300 transform hover:-translate-y-1"
                style="border-radius: 12px"
            />
        </div>
    </div>
</template>
