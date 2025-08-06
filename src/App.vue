<script setup>
import { Analytics } from '@vercel/analytics/nuxt';
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
</script>

<template>
    <Toast />
    <Analytics />
    <SpeedInsights />
    <router-view />
</template>

<style></style>
