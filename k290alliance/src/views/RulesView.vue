<script setup>
import { ref } from 'vue'
import { rulesData, channelsData } from '../data/db.js'

const copiedId = ref(null);

const getIndentClass = (id) => {
    const depth = id.split('.').filter(Boolean).length;
    if (depth === 1) return 'mt-12 mb-6';
    if (depth === 2) return 'ml-4 md:ml-8 mb-4';
    if (depth === 3) return 'ml-8 md:ml-16 mb-3';
    if (depth >= 4) return 'ml-12 md:ml-24 mb-2';
    return 'mb-2';
};

const getTextClass = (id) => {
    const depth = id.split('.').filter(Boolean).length;
    if (depth === 1) return 'text-3xl font-medieval font-bold text-royal-cream text-glow';
    if (depth === 2) return 'text-gray-200 text-sm md:text-base';
    return 'text-gray-400 text-sm';
};

const isMainSection = (id) => id.split('.').filter(Boolean).length === 1;

const copyRule = (rule) => {
    // Pega a regra atual e todas as suas sub-regras (ex: se id for "1", pega "1.1", "1.2", etc.)
    const prefix = rule.id + '.';
    const rulesToCopy = rulesData.filter(r => r.id === rule.id || r.id.startsWith(prefix));
    
    // Junta todas as regras encontradas com uma quebra de linha
    const textToCopy = rulesToCopy.map(r => `ROE ${r.id}: ${r.text}`).join('\n');
    
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        copiedId.value = rule.id;
        setTimeout(() => {
            if (copiedId.value === rule.id) copiedId.value = null;
        }, 2000);
    } catch (err) {
        console.error('Falha ao copiar a regra', err);
    }
    
    document.body.removeChild(textArea);
};
</script>

<template>
    <div class="pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-screen">
        
        <div class="text-center mb-16">
            <h1 class="text-5xl font-medieval font-bold text-royal-cream mb-4 text-glow">Rules of Engagement</h1>
            <p class="text-royal-gold uppercase tracking-ultra-wide text-xs">Supreme Law of Kingdom #290</p>
        </div>

        <!-- Lista de Regras -->
        <div class="glass-card p-8 md:p-16 mb-16">
            <div v-for="rule in rulesData" :key="rule.id" :class="[getIndentClass(rule.id), 'relative group']">
                
                <!-- Tópicos Principais -->
                <div v-if="isMainSection(rule.id)" class="flex items-end justify-between border-b border-royal-gold/20 pb-4">
                    <h2 :class="getTextClass(rule.id)" class="pr-4">
                        <span class="text-royal-gold mr-3">{{ rule.id }}.</span> {{ rule.text }}
                    </h2>
                    <button @click="copyRule(rule)" class="text-gray-500 hover:text-royal-gold transition opacity-100 md:opacity-0 md:group-hover:opacity-100 mb-1" title="Copiar Seção Completa">
                        <i :class="copiedId === rule.id ? 'fas fa-check text-green-400' : 'far fa-copy'"></i>
                    </button>
                </div>
                
                <!-- Sub-tópicos -->
                <div v-else class="flex items-start">
                    <span class="text-royal-gold/60 group-hover:text-royal-gold font-medieval mr-4 shrink-0 mt-[2px] min-w-[2.5rem] text-sm transition">{{ rule.id }}</span>
                    <p :class="getTextClass(rule.id)" class="leading-relaxed pr-8">{{ rule.text }}</p>
                    <button @click="copyRule(rule)" class="absolute right-0 top-0 text-gray-500 hover:text-royal-gold transition opacity-100 md:opacity-0 md:group-hover:opacity-100 p-1" title="Copiar Regra e Sub-regras">
                        <i :class="copiedId === rule.id ? 'fas fa-check text-green-400' : 'far fa-copy'"></i>
                    </button>
                </div>
                
            </div>
        </div>

        <!-- Canais Oficiais -->
        <div class="text-center mb-16">
            <h2 class="text-4xl font-medieval font-bold text-royal-cream mb-12 text-glow">Official Channels</h2>
            <div class="glass-card overflow-hidden">
                <div v-for="(channel, idx) in channelsData" :key="idx" class="p-6 border-b border-white/5 last:border-0 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:bg-white/5 transition text-left">
                    <span class="text-royal-gold font-medieval font-bold tracking-widest text-sm md:w-1/3">{{ channel.name }}</span>
                    <span class="text-gray-300 text-sm md:w-2/3 leading-relaxed">{{ channel.desc }}</span>
                </div>
            </div>
        </div>

    </div>
</template>