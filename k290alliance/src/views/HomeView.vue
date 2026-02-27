<script setup>
import { kingdomData } from '../data/db.js'
</script>

<template>
    <div class="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex flex-col items-center">
        
        <!-- Hero Section -->
        <div class="text-center mt-12 mb-24 max-w-4xl mx-auto">
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-medieval font-bold text-royal-cream mb-2 leading-none text-glow">
                {{ kingdomData.title }}
            </h1>
            <h2 class="text-3xl md:text-5xl font-medieval text-royal-gold mb-8 tracking-widest text-glow">
                {{ kingdomData.subtitle }}
            </h2>
            <p class="text-gray-400 text-sm md:text-base uppercase tracking-ultra-wide max-w-2xl mx-auto mt-8">
                {{ kingdomData.desc }}
            </p>
        </div>

        <!-- 3 Columns Layout em Glassmorphism -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            
            <!-- Rules Card -->
            <div class="glass-card p-10 text-center flex flex-col justify-between">
                <div>
                    <h3 class="text-2xl font-medieval font-bold text-royal-cream mb-4 text-glow">Rules & Decrees</h3>
                    <p class="text-xs text-gray-400 uppercase tracking-widest mb-8 leading-relaxed">Stay current with every decree that governs our realm.</p>
                </div>
                <router-link to="/rules" class="inline-block border border-royal-gold/30 hover:border-royal-gold text-royal-gold hover:text-royal-cream transition py-3 px-6 text-xs font-medium uppercase tracking-widest">
                    Read the RoE
                </router-link>
            </div>

            <!-- Calculator Card -->
            <div class="glass-card p-10 text-center flex flex-col justify-between">
                <div>
                    <h3 class="text-2xl font-medieval font-bold text-royal-cream mb-4 text-glow">Loss Calculator</h3>
                    <p class="text-xs text-gray-400 uppercase tracking-widest mb-8 leading-relaxed">Official calculators for claims after unlawful attacks.</p>
                </div>
                <a href="https://bit.ly/K290COMP" target="_blank" class="inline-block bg-royal-gold/20 hover:bg-royal-gold/40 border border-royal-gold/50 text-royal-cream transition py-3 px-6 text-xs font-medium uppercase tracking-widest">
                    Open Calculator
                </a>
            </div>

            <!-- Academy Card -->
            <div class="glass-card p-10 text-center flex flex-col justify-between">
                <div>
                    <h3 class="text-2xl font-medieval font-bold text-royal-cream mb-4 text-glow">Royal Academy</h3>
                    <p class="text-xs text-gray-400 uppercase tracking-widest mb-8 leading-relaxed">Fresh numbers and spreadsheets for strategy planning.</p>
                </div>
                    <router-link to="/library" class="inline-block border border-royal-gold/30 hover:border-royal-gold text-royal-gold hover:text-royal-cream transition py-3 px-6 text-xs font-medium uppercase tracking-widest">
                        Enter Library
                    </router-link>
            </div>
        </div>
    </div>
</template>