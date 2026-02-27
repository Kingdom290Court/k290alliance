<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col flex-grow relative z-10">
    <nav class="w-full pt-8 pb-4 z-50 relative">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                <div class="flex items-center space-x-6 md:space-x-10">
                    <RouterLink to="/" class="text-[10px] md:text-xs font-medium tracking-ultra-wide uppercase text-gray-300 hover:text-royal-cream transition" active-class="text-royal-cream text-glow">HOME</RouterLink>
                    <RouterLink to="/rules" class="text-[10px] md:text-xs font-medium tracking-ultra-wide uppercase text-gray-300 hover:text-royal-cream transition" active-class="text-royal-cream text-glow">ROE</RouterLink>
                </div>
                
                <div class="flex items-center justify-center">
                    <span class="font-medieval font-bold text-xl md:text-2xl text-royal-gold px-4 text-glow flex items-center gap-2">
                        <i class="fas fa-crown text-base md:text-lg"></i>
                        K290
                    </span>
                </div>

                <div class="flex items-center space-x-6 md:space-x-10">
                    <RouterLink to="/academy" class="text-[10px] md:text-xs font-medium tracking-ultra-wide uppercase text-gray-300 hover:text-royal-cream transition" active-class="text-royal-cream text-glow">ACADEMY</RouterLink>
                    <RouterLink to="/gifts" class="text-[10px] md:text-xs font-medium tracking-ultra-wide uppercase text-gray-300 hover:text-royal-cream transition" active-class="text-royal-cream text-glow">GIFTS</RouterLink>
                </div>
            </div>
        </div>
    </nav>

    <div class="flex-grow">
        <RouterView v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </RouterView>
    </div>

    <footer class="text-center py-10 border-t border-white/5 text-gray-500 text-[10px] tracking-ultra-wide uppercase mt-auto bg-black/40 backdrop-blur-sm">
        <p class="mb-3">© 2026 Kingdom #290 Council. All rights reserved.</p>
        <p>Crafted with valor and honor. Created by Josué R Souza.</p>
    </footer>
  </div>
</template>