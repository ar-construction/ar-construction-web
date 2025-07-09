<template>
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
            <div class="inline-block p-3 bg-gradient-to-r from-[#EDA220] to-orange-500 rounded-2xl mb-6">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 9L12 2 2 9h3v8h2v-8h2v8h2v-8h2v8h2v-8h3z" />
                </svg>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#EDA220] to-orange-600 bg-clip-text text-transparent">Residential Construction Services</h2>
            <div class="w-24 h-1 bg-gradient-to-r from-[#EDA220] to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="group bg-gradient-to-br from-white to-amber-50/30 rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div class="w-16 h-16 bg-gradient-to-br from-[#EDA220] to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold mb-4 text-[#EDA220]">New Home Construction</h3>
                <p class="text-gray-700 leading-relaxed">Custom homes, ADUs, detached garages, and infill lot development—built for your needs from the ground up.</p>
            </div>

            <div class="group bg-gradient-to-br from-white to-orange-50/30 rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-[#EDA220] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.87-.36 3.64-1.21 5.13-2.4.77-.61 1.49-1.32 2.13-2.1C19.84 21.79 20 19.95 20 17V7l-8-5z" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold mb-4 text-orange-600">Remodeling & Renovation</h3>
                <p class="text-gray-700 leading-relaxed">Kitchen remodels, bathroom upgrades, basement finishes, and full-home renovations that modernize and add value.</p>
            </div>

            <div class="group bg-gradient-to-br from-white to-yellow-50/30 rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-[#EDA220] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold mb-4 text-yellow-600">Project Management</h3>
                <p class="text-gray-700 leading-relaxed">From permits to punch list, we manage your build—budget, schedule, quality, and every detail—so you don't have to.</p>
            </div>

            <div class="group bg-gradient-to-br from-white to-green-50/30 rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-[#EDA220] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold mb-4 text-green-600">Exterior Improvements</h3>
                <p class="text-gray-700 leading-relaxed">Roofing, siding, gutters, windows, decks, patios, and more—built for durability, beauty, and curb appeal.</p>
            </div>

            <div class="group bg-gradient-to-br from-white to-blue-50/30 rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-[#EDA220] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold mb-4 text-blue-600">Interior Finishes</h3>
                <p class="text-gray-700 leading-relaxed">Flooring, trim, cabinetry, tile, and fixtures—all installed with care and an eye for detail.</p>
            </div>

            <div class="group bg-gradient-to-br from-white to-purple-50/30 rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-[#EDA220] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.61 18.99l-9.08-9.08c.93-2.34.45-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11 6.08 7.52 2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.9 1.9 4.66 2.37 7-1.44l9.08 9.08c.78.78 2.05.78 2.83 0 .78-.78.78-2.07-.2-2.76z" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold mb-4 text-purple-600">Structural & Utility Work</h3>
                <p class="text-gray-700 leading-relaxed">Framing, foundations, insulation, plumbing, HVAC, electrical, and energy upgrades that make your home efficient and safe.</p>
            </div>

            <div class="group bg-gradient-to-br from-white to-red-50/30 rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1 lg:col-start-2">
                <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-[#EDA220] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold mb-4 text-red-600">Post-Construction Support</h3>
                <p class="text-gray-700 leading-relaxed">Thorough walkthrough, detailed checklist, cleanup, and warranty support for lasting peace of mind.</p>
            </div>
        </div>
    </div>
</template>
