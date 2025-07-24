<script setup>
import { ref, reactive } from 'vue';

// Form data
const formData = reactive({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    projectDetails: ''
});

// Form state
const isSubmitting = ref(false);
const submitStatus = ref(''); // 'success', 'error', or ''
const errorMessage = ref('');

// Google Form URL - replace with your actual form URL
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSemD0YjubEkWb4W0GLSAaraAMHHtEWMHRJcgHZ14HXgFwV3Mw/viewform?usp=header';

// Google Form field IDs - replace with your actual field IDs
const FORM_FIELDS = {
    name: 'entry.123456789', // Replace with actual field ID
    email: 'entry.987654321', // Replace with actual field ID
    phone: 'entry.456789123', // Replace with actual field ID
    projectType: 'entry.789123456', // Replace with actual field ID
    projectDetails: 'entry.321654987' // Replace with actual field ID
};

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

// Submit form to Google Forms
async function submitForm() {
    if (!validateForm()) {
        submitStatus.value = 'error';
        return;
    }

    isSubmitting.value = true;
    submitStatus.value = '';
    errorMessage.value = '';

    try {
        // Create FormData for Google Forms submission
        const submitData = new FormData();
        submitData.append(FORM_FIELDS.name, formData.name);
        submitData.append(FORM_FIELDS.email, formData.email);
        submitData.append(FORM_FIELDS.phone, formData.phone);
        submitData.append(FORM_FIELDS.projectType, formData.projectType);
        submitData.append(FORM_FIELDS.projectDetails, formData.projectDetails);

        // Submit to Google Forms
        await fetch(GOOGLE_FORM_URL, {
            method: 'POST',
            body: submitData,
            mode: 'no-cors' // Required for Google Forms
        });

        // Google Forms with no-cors always appears to succeed
        // So we assume success if no error is thrown
        submitStatus.value = 'success';

        // Reset form
        Object.keys(formData).forEach((key) => {
            formData[key] = '';
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
            submitStatus.value = '';
        }, 5000);
    } catch (error) {
        console.error('Form submission error:', error);
        submitStatus.value = 'error';
        errorMessage.value = 'There was an error sending your message. Please try again or contact us directly.';
    } finally {
        isSubmitting.value = false;
    }
}

// Reset status when user starts typing
function clearStatus() {
    if (submitStatus.value) {
        submitStatus.value = '';
        errorMessage.value = '';
    }
}
</script>

<template>
    <section class="py-24 px-6">
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
                            <a href="mailto:info@arconstruction.com" class="text-2xl text-white hover:text-[#EDA220] transition-colors duration-300 font-light block"> info@arconstruction.com </a>
                        </div>

                        <div class="group">
                            <div class="text-sm text-gray-400 uppercase tracking-wider mb-3 font-light">Phone</div>
                            <a href="tel:5551234567" class="text-2xl text-white hover:text-[#EDA220] transition-colors duration-300 font-light block"> (555) 123-4567 </a>
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
                        <p class="text-lg text-gray-300 font-light italic leading-relaxed">We believe reliable results come from supporting both our clients and our crew - because strong relationships build stronger projects.</p>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-10">
                    <h3 class="text-2xl font-light text-white mb-8 text-center">Start Your Project</h3>

                    <!-- Success Message -->
                    <div v-if="submitStatus === 'success'" class="mb-6 p-4 bg-green-600/20 border border-green-600/30 text-green-300 text-center">
                        <div class="flex items-center justify-center space-x-2">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span>Thank you! Your message has been sent successfully.</span>
                        </div>
                    </div>

                    <!-- Error Message -->
                    <div v-if="submitStatus === 'error'" class="mb-6 p-4 bg-red-600/20 border border-red-600/30 text-red-300 text-center">
                        <div class="flex items-center justify-center space-x-2">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                            </svg>
                            <span>{{ errorMessage }}</span>
                        </div>
                    </div>

                    <form @submit.prevent="submitForm" class="space-y-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-3">
                                <label class="block text-sm text-gray-300 font-medium">Name *</label>
                                <input
                                    v-model="formData.name"
                                    @input="clearStatus"
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
                                    @input="clearStatus"
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
                                @input="clearStatus"
                                type="tel"
                                class="w-full bg-white/10 border border-white/20 focus:border-[#EDA220] focus:bg-white/15 transition-all duration-300 px-4 py-3 text-white placeholder-gray-400 outline-none rounded-none"
                                placeholder="(555) 123-4567"
                            />
                        </div>

                        <div class="space-y-3">
                            <label class="block text-sm text-gray-300 font-medium">Project Details *</label>
                            <textarea
                                v-model="formData.projectDetails"
                                @input="clearStatus"
                                rows="5"
                                required
                                class="w-full bg-white/10 border border-white/20 focus:border-[#EDA220] focus:bg-white/15 transition-all duration-300 px-4 py-3 text-white placeholder-gray-400 outline-none resize-none rounded-none leading-relaxed"
                                placeholder="Tell us about your project vision, timeline, budget range, and any specific requirements..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            :disabled="isSubmitting"
                            class="w-full bg-[#EDA220] hover:bg-[#d1901c] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-4 px-6 transition-all duration-300 text-lg tracking-wide hover:shadow-lg flex items-center justify-center space-x-2"
                        >
                            <svg v-if="isSubmitting" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
