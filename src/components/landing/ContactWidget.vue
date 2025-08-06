<script setup>
import { ref, reactive, computed } from 'vue';

// Form data
const formData = reactive({
    name: '',
    email: '',
    phone: '',
    projectAddress: '',
    projectDetails: ''
});

// Form state
const showError = ref(false);
const errorMessage = ref('');

// Email configuration
const EMAIL_CONFIG = {
    to: 'info@arconstructionservices.com',
    subject: 'New Inquiry from Website'
};

// Generate mailto link with form data
const mailtoLink = computed(() => {
    const body = `Name: 
    
    ${formData.name || '[Name]'}
 
    Project Description:

    ${formData.projectDetails || '[Project description]'}


    Project Address: 
    
    ${formData.projectAddress || '[Not provided]'}


    Contact Information:

    Email: 
    ${formData.email || '[Email]'}

    Phone: 
    ${formData.phone || '[Not provided]'}


    Thank you,

    ${formData.name || '[Name]'}`;

    // Properly encode the subject and body for mailto links
    const encodedSubject = encodeURIComponent(EMAIL_CONFIG.subject);
    const encodedBody = encodeURIComponent(body);

    return `mailto:${EMAIL_CONFIG.to}?subject=${encodedSubject}&body=${encodedBody}`;
});

// Validation
function validateForm() {
    if (!formData.name.trim()) {
        errorMessage.value = 'Please enter your name';
        return false;
    }

    if (!formData.email.trim()) {
        errorMessage.value = 'Please enter your email';
        return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        errorMessage.value = 'Please enter a valid email address';
        return false;
    }

    if (!formData.projectDetails.trim()) {
        errorMessage.value = 'Please describe your project';
        return false;
    }

    return true;
}

// Handle form submission
function handleSubmit() {
    showError.value = false;

    if (!validateForm()) {
        showError.value = true;
        return;
    }

    // Open email client with pre-filled data
    window.location.href = mailtoLink.value;

    // Optional: Clear form after a delay (gives time for email client to capture data)
    setTimeout(() => {
        Object.keys(formData).forEach((key) => {
            formData[key] = '';
        });
    }, 1000);
}

// Reset error when user starts typing
function clearError() {
    if (showError.value) {
        showError.value = false;
        errorMessage.value = '';
    }
}

// Copy email to clipboard
function copyEmail() {
    navigator.clipboard.writeText(EMAIL_CONFIG.to);
    // Could add a toast notification here
}
</script>

<template>
    <section class="py-12 px-6">
        <div class="max-w-6xl mx-auto">
            <!-- Section Header -->
            <div class="text-center mb-20">
                <h2 class="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
                    Let's Build
                    <span class="block text-[#EDA220] font-normal">Together.</span>
                </h2>
                <p class="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">Ready to start your project? We'd love to hear about your vision and discuss how we can bring it to life.</p>
            </div>

            <div class="grid lg:grid-cols-2 gap-20">
                <!-- Contact Information -->
                <div class="space-y-12">
                    <div class="space-y-10">
                        <div class="group">
                            <div class="text-sm text-gray-400 uppercase tracking-wider mb-3 font-light">Email</div>
                            <div class="flex items-center gap-3">
                                <a href="mailto:info@arconstructionservices.com" class="text-2xl text-white hover:text-[#EDA220] transition-colors duration-300 font-light"> info@arconstructionservices.com </a>
                                <button @click="copyEmail" class="text-gray-400 hover:text-[#EDA220] transition-colors" title="Copy email address">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="group">
                            <div class="text-sm text-gray-400 uppercase tracking-wider mb-3 font-light">Phone</div>
                            <a href="tel:4178488071" class="text-2xl text-white hover:text-[#EDA220] transition-colors duration-300 font-light block"> (417) 848-8071 </a>
                        </div>

                        <div class="group">
                            <div class="text-sm text-gray-400 uppercase tracking-wider mb-3 font-light">Service Area</div>
                            <div class="text-2xl text-white font-light">
                                Springfield, Missouri<br />
                                <span class="text-lg text-gray-300">& Surrounding Areas</span>
                            </div>
                        </div>
                    </div>

                    <!-- Quote -->
                    <div class="border-l-2 border-[#EDA220] pl-8 mt-16">
                        <p class="text-lg text-gray-300 font-light italic leading-relaxed">"We believe reliable results come from supporting both our clients and our crew - because strong relationships build stronger projects."</p>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-10">
                    <h3 class="text-2xl font-light text-white mb-8 text-center">Start Your Project</h3>

                    <!-- Error Message -->
                    <div v-if="showError" class="mb-6 p-4 bg-red-600/20 border border-red-600/30 text-red-300 text-center">
                        <div class="flex items-center justify-center space-x-2">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                            </svg>
                            <span>{{ errorMessage }}</span>
                        </div>
                    </div>

                    <form @submit.prevent="handleSubmit" class="space-y-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-3">
                                <label class="block text-sm text-gray-300 font-medium">Name *</label>
                                <input
                                    v-model="formData.name"
                                    @input="clearError"
                                    type="text"
                                    required
                                    class="w-full bg-white/10 border border-white/20 focus:border-[#EDA220] focus:bg-white/15 transition-all duration-300 px-4 py-3 text-white placeholder-gray-400 outline-none rounded-none"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div class="space-y-3">
                                <label class="block text-sm text-gray-300 font-medium">Email *</label>
                                <input
                                    v-model="formData.email"
                                    @input="clearError"
                                    type="email"
                                    required
                                    class="w-full bg-white/10 border border-white/20 focus:border-[#EDA220] focus:bg-white/15 transition-all duration-300 px-4 py-3 text-white placeholder-gray-400 outline-none rounded-none"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div class="space-y-3">
                            <label class="block text-sm text-gray-300 font-medium">Phone</label>
                            <input
                                v-model="formData.phone"
                                @input="clearError"
                                type="tel"
                                class="w-full bg-white/10 border border-white/20 focus:border-[#EDA220] focus:bg-white/15 transition-all duration-300 px-4 py-3 text-white placeholder-gray-400 outline-none rounded-none"
                                placeholder="(417) 848-8071"
                            />
                        </div>

                        <div class="space-y-3">
                            <label class="block text-sm text-gray-300 font-medium">Project Address</label>
                            <input
                                v-model="formData.projectAddress"
                                @input="clearError"
                                type="text"
                                class="w-full bg-white/10 border border-white/20 focus:border-[#EDA220] focus:bg-white/15 transition-all duration-300 px-4 py-3 text-white placeholder-gray-400 outline-none rounded-none"
                                placeholder="123 Main St, Springfield, MO"
                            />
                        </div>

                        <div class="space-y-3">
                            <label class="block text-sm text-gray-300 font-medium">How can we help you? *</label>
                            <textarea
                                v-model="formData.projectDetails"
                                @input="clearError"
                                rows="5"
                                required
                                class="w-full bg-white/10 border border-white/20 focus:border-[#EDA220] focus:bg-white/15 transition-all duration-300 px-4 py-3 text-white placeholder-gray-400 outline-none resize-none rounded-none leading-relaxed"
                                placeholder="Tell us about your project vision, timeline, budget range, and any specific requirements..."
                            ></textarea>
                        </div>

                        <div class="space-y-4">
                            <button type="submit" class="w-full bg-[#EDA220] hover:bg-[#d1901c] text-white font-medium py-4 px-6 transition-all duration-300 text-lg tracking-wide hover:shadow-lg flex items-center justify-center gap-3">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Open Email to Send</span>
                            </button>

                            <p class="text-sm text-gray-400 text-center">This will open your default email app with your message ready to send</p>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Additional CTA -->
            <div class="text-center mt-20 border-t border-white/10 pt-16">
                <p class="text-gray-300 font-light mb-6">
                    Prefer to talk? Give us a call at
                    <a href="tel:4178488071" class="text-[#EDA220] hover:text-white transition-colors">(417) 848-8071</a>
                </p>
                <p class="text-sm text-gray-400">Most project consultations can be scheduled within 48 hours.</p>
            </div>
        </div>
    </section>
</template>
