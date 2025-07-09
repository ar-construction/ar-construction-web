<template>
    <!-- Construction Image Placeholder -->
    <div class="absolute top-0 right-0 w-64 h-64 opacity-10 overflow-hidden">
        <div class="w-full h-full rounded-full"></div>
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
        <div class="bg-white rounded-3xl shadow-xl p-12 md:p-20 border border-gray-100 relative overflow-hidden">
            <!-- Subtle pattern overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50 rounded-3xl"></div>

            <div class="relative z-10">
                <div class="text-center mb-12">
                    <div class="inline-block p-3 bg-gradient-to-r from-[#EDA220] to-orange-500 rounded-2xl mb-6">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"
                            />
                        </svg>
                    </div>
                    <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#EDA220] to-orange-600 bg-clip-text text-transparent">About A&R Construction</h2>
                    <div class="w-24 h-1 bg-gradient-to-r from-[#EDA220] to-orange-500 mx-auto rounded-full"></div>
                </div>

                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="space-y-6">
                        <p class="text-xl text-gray-700 leading-relaxed">Founded with a vision to raise the standard in residential contracting, A&R exists to serve both the client and the crew. Every decision we make is guided by a dual mission:</p>

                        <div class="space-y-4">
                            <div class="flex items-start space-x-4">
                                <div class="w-8 h-8 bg-gradient-to-r from-[#EDA220] to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <p class="text-lg text-gray-700 leading-relaxed"><strong class="text-[#EDA220]">Deliver real value</strong> to homeowners through honest, high-quality work</p>
                            </div>

                            <div class="flex items-start space-x-4">
                                <div class="w-8 h-8 bg-gradient-to-r from-[#EDA220] to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <p class="text-lg text-gray-700 leading-relaxed"><strong class="text-[#EDA220]">Provide a platform</strong> where hard-working individuals can grow, thrive, and take pride in what they build</p>
                            </div>
                        </div>
                    </div>

                    <!-- Construction tools illustration placeholder -->
                    <div class="relative">
                        <div class="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 flex items-center justify-center">
                            <div class="grid grid-cols-2 gap-4 w-full h-full">
                                <div class="bg-white rounded-xl shadow-md p-4 flex items-center justify-center">
                                    <svg class="w-12 h-12 text-[#EDA220]" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M22.61 18.99l-9.08-9.08c.93-2.34.45-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11 6.08 7.52 2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.9 1.9 4.66 2.37 7-1.44l9.08 9.08c.78.78 2.05.78 2.83 0 .78-.78.78-2.07-.2-2.76z"
                                        />
                                    </svg>
                                </div>
                                <div class="bg-white rounded-xl shadow-md p-4 flex items-center justify-center">
                                    <svg class="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
                                    </svg>
                                </div>
                                <div class="bg-white rounded-xl shadow-md p-4 flex items-center justify-center">
                                    <svg class="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <div class="bg-white rounded-xl shadow-md p-4 flex items-center justify-center">
                                    <svg class="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-12 text-center">
                    <div class="inline-block p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border-2 border-[#EDA220]/20">
                        <p class="text-xl text-gray-700 font-medium leading-relaxed">
                            We're not here to be just another contractor. We're here to raise the bar — for clients and for the people doing the work. If you're looking for a team that values
                            <span class="text-[#EDA220] font-bold">integrity</span>, <span class="text-[#EDA220] font-bold">quality</span>, and <span class="text-[#EDA220] font-bold">long-term results</span>, you're in the right place.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section id="mission" class="py-24 px-6 md:px-16 lg:px-32 bg-gradient-to-br from-gray-50 to-amber-50/30">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <div class="inline-block p-3 bg-gradient-to-r from-[#EDA220] to-orange-500 rounded-2xl mb-6">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                </div>
                <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#EDA220] to-orange-600 bg-clip-text text-transparent">Our Mission</h2>
                <div class="w-24 h-1 bg-gradient-to-r from-[#EDA220] to-orange-500 mx-auto rounded-full mb-8"></div>
                <p class="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                    To be a company people believe in — as clients, as partners, and as employees. We aim to either grow big enough to match the ambitions of top talent, or be the launchpad that helps them reach the next level.
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-12 mt-16">
                <div class="bg-white rounded-3xl shadow-xl p-10 border-l-8 border-[#EDA220] relative overflow-hidden transform hover:scale-105 transition-all duration-300">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#EDA220]/10 to-orange-500/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                    <div class="relative z-10">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-[#EDA220] to-orange-500 rounded-xl flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-[#EDA220]">What You Can Expect</h3>
                        </div>

                        <div class="space-y-4">
                            <div class="flex items-center space-x-4">
                                <div class="w-3 h-3 bg-gradient-to-r from-[#EDA220] to-orange-500 rounded-full"></div>
                                <p class="text-lg text-gray-700">Reliable communication from start to finish</p>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="w-3 h-3 bg-gradient-to-r from-[#EDA220] to-orange-500 rounded-full"></div>
                                <p class="text-lg text-gray-700">High standards and attention to detail</p>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="w-3 h-3 bg-gradient-to-r from-[#EDA220] to-orange-500 rounded-full"></div>
                                <p class="text-lg text-gray-700">Respect for your time, home, and investment</p>
                            </div>
                            <div class="flex items-center space-x-4">
                                <div class="w-3 h-3 bg-gradient-to-r from-[#EDA220] to-orange-500 rounded-full"></div>
                                <p class="text-lg text-gray-700">A crew that cares about the work — and each other</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-3xl shadow-xl p-10 border-l-8 border-orange-500 relative overflow-hidden transform hover:scale-105 transition-all duration-300">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-[#EDA220]/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                    <div class="relative z-10 flex flex-col justify-center h-full">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-[#EDA220] rounded-xl flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-orange-600">Building with Purpose</h3>
                        </div>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            We're not just building houses—we're building <span class="font-bold text-[#EDA220]">trust</span>, <span class="font-bold text-[#EDA220]">opportunity</span>, and
                            <span class="font-bold text-[#EDA220]">long-term relationships</span> in our community.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
