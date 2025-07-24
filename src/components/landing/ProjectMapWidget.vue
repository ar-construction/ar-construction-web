<script setup>
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
import L from 'leaflet';

const projects = [
    { lat: 37.208957, lng: -93.292299, label: 'Kitchen Renovation', type: 'Residential Remodel' },
    { lat: 37.195096, lng: -93.289857, label: 'Custom Deck Build', type: 'Exterior Addition' },
    { lat: 37.180096, lng: -93.250857, label: 'Whole Home Renovation', type: 'Complete Remodel' },
    { lat: 37.210096, lng: -93.270857, label: 'Bathroom Remodel', type: 'Interior Renovation' },
    { lat: 37.185096, lng: -93.275857, label: 'New Construction', type: 'Custom Home' }
];

// Clean, minimal marker icon
const projectIcon = new L.Icon({
    iconUrl:
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="%23EDA220" stroke="white" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="white"/></svg>',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
    shadowUrl: null,
    shadowSize: null
});
</script>

<template>
    <section id="service-area">
        <div class="max-w-6xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
                    Proudly Serving
                    <span class="block text-[#EDA220] font-normal">Springfield.</span>
                </h2>
                <p class="text-lg text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">Each project represents our commitment to quality construction and lasting relationships in the Springfield community.</p>
            </div>

            <!-- Map Container -->
            <div class="bg-[#1a1a1a] border border-[#333] overflow-hidden mb-12" style="height: 480px">
                <LMap
                    :zoom="12"
                    :center="[37.1951, -93.2899]"
                    style="height: 100%; width: 100%"
                    :options="{
                        zoomControl: true,
                        attributionControl: false,
                        scrollWheelZoom: false
                    }"
                >
                    <LTileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" attribution="&copy; CartoDB" />
                    <LMarker v-for="(project, idx) in projects" :key="idx" :lat-lng="[project.lat, project.lng]" :icon="projectIcon">
                        <template #popup>
                            <div class="text-center p-2">
                                <div class="font-medium text-[#EDA220] mb-1">{{ project.label }}</div>
                                <div class="text-sm text-gray-600">{{ project.type }}</div>
                            </div>
                        </template>
                    </LMarker>
                </LMap>
            </div>

            <!-- Service Area Info -->
            <div class="grid md:grid-cols-3 gap-8 text-center">
                <div class="space-y-3">
                    <div class="w-12 h-12 bg-[#EDA220] mx-auto flex items-center justify-center">
                        <svg class="w-6 h-6 text-[#2a2a2a]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                    </div>
                    <h3 class="text-lg text-white font-medium">Springfield Metro</h3>
                    <p class="text-gray-300 font-light text-sm leading-relaxed">Comprehensive coverage throughout Springfield and surrounding communities.</p>
                </div>

                <div class="space-y-3">
                    <div class="w-12 h-12 bg-[#EDA220] mx-auto flex items-center justify-center">
                        <svg class="w-6 h-6 text-[#2a2a2a]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                    <h3 class="text-lg text-white font-medium">Local Knowledge</h3>
                    <p class="text-gray-300 font-light text-sm leading-relaxed">Deep understanding of local building codes, climate, and community needs.</p>
                </div>

                <div class="space-y-3">
                    <div class="w-12 h-12 bg-[#EDA220] mx-auto flex items-center justify-center">
                        <svg class="w-6 h-6 text-[#2a2a2a]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-lg text-white font-medium">Proven Track Record</h3>
                    <p class="text-gray-300 font-light text-sm leading-relaxed">Established relationships with local suppliers, contractors, and permit offices.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Custom map styling */
:deep(.leaflet-control-zoom) {
    border: 1px solid #333 !important;
    background: #1a1a1a !important;
}

:deep(.leaflet-control-zoom a) {
    background: #1a1a1a !important;
    color: #eda220 !important;
    border: none !important;
}

:deep(.leaflet-control-zoom a:hover) {
    background: #333 !important;
}

:deep(.leaflet-popup-content-wrapper) {
    background: white !important;
    border-radius: 4px !important;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3) !important;
}

:deep(.leaflet-popup-tip) {
    background: white !important;
}
</style>
