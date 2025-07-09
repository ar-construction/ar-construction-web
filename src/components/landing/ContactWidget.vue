<script setup></script>

<template>
    <div class="max-w-5xl mx-auto">
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-2xl p-12 md:p-20 border border-orange-200 relative overflow-hidden">
            <!-- Background decoration -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#EDA220]/10 to-orange-500/10 rounded-full transform translate-x-32 -translate-y-32"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-orange-500/10 to-[#EDA220]/10 rounded-full transform -translate-x-24 translate-y-24"></div>

            <div class="relative z-10">
                <div class="text-center mb-12">
                    <div class="inline-block p-4 bg-gradient-to-r from-[#EDA220] to-orange-500 rounded-3xl mb-8">
                        <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                    </div>
                    <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#EDA220] to-orange-600 bg-clip-text text-transparent">Let's Build Something That Lasts</h2>
                    <div class="w-24 h-1 bg-gradient-to-r from-[#EDA220] to-orange-500 mx-auto rounded-full mb-8"></div>
                    <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">Reach out for a consultation. We'll guide you through the process, bring clarity to every step, and deliver results built to last.</p>
                </div>

                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="space-y-6">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 bg-gradient-to-r from-[#EDA220] to-orange-500 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-[#EDA220]">Email Us</h3>
                                <p class="text-gray-700">info@arconstruction.com</p>
                            </div>
                        </div>

                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 bg-gradient-to-r from-[#EDA220] to-orange-500 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-[#EDA220]">Call Us</h3>
                                <p class="text-gray-700">(555) 123-4567</p>
                            </div>
                        </div>

                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 bg-gradient-to-r from-[#EDA220] to-orange-500 rounded-xl flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-[#EDA220]">Visit Us</h3>
                                <p class="text-gray-700">Springfield, Missouri Area</p>
                            </div>
                        </div>
                    </div>

                    <form class="space-y-6">
                        <div>
                            <input type="text" placeholder="Your Name" class="w-full p-4 rounded-xl border-2 border-gray-200 bg-white focus:border-[#EDA220] focus:outline-none transition-colors text-gray-900 placeholder-gray-500" />
                        </div>
                        <div>
                            <input type="email" placeholder="Your Email" class="w-full p-4 rounded-xl border-2 border-gray-200 bg-white focus:border-[#EDA220] focus:outline-none transition-colors text-gray-900 placeholder-gray-500" />
                        </div>
                        <div>
                            <input type="tel" placeholder="Your Phone" class="w-full p-4 rounded-xl border-2 border-gray-200 bg-white focus:border-[#EDA220] focus:outline-none transition-colors text-gray-900 placeholder-gray-500" />
                        </div>
                        <div>
                            <textarea
                                placeholder="Tell us about your project..."
                                class="w-full p-4 rounded-xl border-2 border-gray-200 bg-white focus:border-[#EDA220] focus:outline-none transition-colors text-gray-900 placeholder-gray-500 h-32 resize-none"
                            ></textarea>
                        </div>
                        <Button
                            label="Send Message"
                            type="submit"
                            class="w-full !text-lg !py-4 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                            style="background: linear-gradient(135deg, #eda220 0%, #f59e0b 100%); border: none; border-radius: 12px"
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
