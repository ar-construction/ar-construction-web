<template>
    <div>
        <div id="home" class="landing-wrapper min-h-screen flex flex-col pt-14 md:pt-20 lg:pt-20">
            <div class="md:px-12 lg:px-20 flex items-center justify-between relative lg:static">
                <TopbarWidget />
            </div>
            <router-view />
            <FooterWidget class="bg-[#2a2a2a]" />
        </div>
    </div>
</template>
