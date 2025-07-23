<script setup>
// No JS needed for this simple contact form
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
                        <p class="text-lg text-gray-300 font-light italic leading-relaxed">"We believe quality construction starts with people — not just plans — and that a well-built project is the result of a well-supported relationship."</p>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-10">
                    <h3 class="text-2xl font-light text-white mb-8 text-center">Start Your Project</h3>

                    <form class="space-y-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-3">
                                <label class="block text-sm text-gray-300 font-medium">Name</label>
                                <input
                                    type="text"
                                    class="w-full bg-white/10 border border-white/20 focus:border-[#EDA220] focus:bg-white/15 transition-all duration-300 px-4 py-3 text-white placeholder-gray-400 outline-none rounded-none"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div class="space-y-3">
                                <label class="block text-sm text-gray-300 font-medium">Email</label>
                                <input
                                    type="email"
                                    class="w-full bg-white/10 border border-white/20 focus:border-[#EDA220] focus:bg-white/15 transition-all duration-300 px-4 py-3 text-white placeholder-gray-400 outline-none rounded-none"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div class="space-y-3">
                            <label class="block text-sm text-gray-300 font-medium">Phone</label>
                            <input
                                type="tel"
                                class="w-full bg-white/10 border border-white/20 focus:border-[#EDA220] focus:bg-white/15 transition-all duration-300 px-4 py-3 text-white placeholder-gray-400 outline-none rounded-none"
                                placeholder="(555) 123-4567"
                            />
                        </div>

                        <div class="space-y-3">
                            <label class="block text-sm text-gray-300 font-medium">Project Type</label>
                            <select class="w-full bg-white/10 border border-white/20 focus:border-[#EDA220] focus:bg-white/15 transition-all duration-300 px-4 py-3 text-white outline-none rounded-none">
                                <option value="" class="bg-[#2a2a2a] text-white">Select project type...</option>
                                <option value="new-construction" class="bg-[#2a2a2a] text-white">New Construction</option>
                                <option value="remodel" class="bg-[#2a2a2a] text-white">Renovation/Remodel</option>
                                <option value="kitchen" class="bg-[#2a2a2a] text-white">Kitchen</option>
                                <option value="bathroom" class="bg-[#2a2a2a] text-white">Bathroom</option>
                                <option value="exterior" class="bg-[#2a2a2a] text-white">Exterior Work</option>
                                <option value="other" class="bg-[#2a2a2a] text-white">Other</option>
                            </select>
                        </div>

                        <div class="space-y-3">
                            <label class="block text-sm text-gray-300 font-medium">Project Details</label>
                            <textarea
                                rows="5"
                                class="w-full bg-white/10 border border-white/20 focus:border-[#EDA220] focus:bg-white/15 transition-all duration-300 px-4 py-3 text-white placeholder-gray-400 outline-none resize-none rounded-none leading-relaxed"
                                placeholder="Tell us about your project vision, timeline, budget range, and any specific requirements..."
                            ></textarea>
                        </div>

                        <button type="submit" class="w-full bg-[#EDA220] hover:bg-[#d1901c] text-white font-medium py-4 px-6 transition-all duration-300 text-lg tracking-wide hover:shadow-lg">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
