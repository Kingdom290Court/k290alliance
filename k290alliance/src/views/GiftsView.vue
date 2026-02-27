<script setup>
import { ref } from 'vue'
import { allGiftCategories } from '../data/dataGifts.js'

const copiedGiftId = ref(null);

const copyCode = (code, id) => {
    const textArea = document.createElement("textarea");
    textArea.value = code;
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        copiedGiftId.value = id;
        setTimeout(() => {
            if (copiedGiftId.value === id) copiedGiftId.value = null;
        }, 2000);
    } catch (err) {
        console.error('Falha ao copiar o código do presente', err);
    }
    
    document.body.removeChild(textArea);
};
</script>

<template>
    <div class="pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto min-h-screen">
        <div class="text-center mb-16">
            <h1 class="text-5xl font-medieval font-bold text-royal-cream mb-4 text-glow">Treasure Room</h1>
            <p class="text-royal-gold uppercase tracking-ultra-wide text-xs">"Gold for the army, glory for the clan."</p>
        </div>

        <!-- Loop através das Categorias -->
        <div v-for="(category, index) in allGiftCategories" :key="index" class="mb-16">
            
            <h2 class="text-2xl font-medieval font-bold text-royal-cream mb-6 border-b border-royal-gold/20 pb-3 text-glow">
                {{ category.categoryName }}
            </h2>

            <div class="glass-card overflow-x-auto custom-scrollbar">
                <table class="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr class="bg-black/40 border-b border-white/10 text-gray-400 text-[10px] md:text-xs uppercase tracking-ultra-wide">
                            <th class="p-4 md:p-6 font-normal w-1/3">Reward</th>
                            <th class="p-4 md:p-6 font-normal">Code</th>
                            <th class="p-4 md:p-6 font-normal text-right">Direct Links & Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="gift in category.items" :key="gift.id" class="border-b border-white/5 last:border-0 hover:bg-white/5 transition">
                            
                            <!-- Nome da Recompensa -->
                            <td class="p-4 md:p-6 text-sm text-gray-200 font-medium">{{ gift.name }}</td>
                            
                            <!-- Código Visual -->
                            <td class="p-4 md:p-6 text-xs font-mono text-royal-gold/70">
                                <span class="truncate block max-w-[150px] lg:max-w-xs">{{ gift.code }}</span>
                            </td>
                            
                            <!-- Botões de Ação Dinâmicos -->
                            <td class="p-4 md:p-6 text-right">
                                <div class="flex flex-wrap items-center justify-end gap-2">
                                    
                                    <!-- Mobile Link -->
                                    <a :href="gift.mobile" target="_blank" 
                                       class="px-3 py-2 border border-white/10 hover:border-royal-gold text-gray-400 hover:text-royal-cream transition text-[10px] uppercase tracking-ultra-wide flex items-center gap-2"
                                       title="Open in Mobile App">
                                        <i class="fas fa-mobile-alt"></i> Mobile
                                    </a>

                                    <!-- Browser Link -->
                                    <a :href="gift.browser" target="_blank" 
                                       class="px-3 py-2 border border-white/10 hover:border-royal-gold text-gray-400 hover:text-royal-cream transition text-[10px] uppercase tracking-ultra-wide flex items-center gap-2"
                                       title="Open in Browser">
                                        <i class="fas fa-globe"></i> Web
                                    </a>

                                    <!-- Triumph Link -->
                                    <a :href="gift.triumph" target="_blank" 
                                       class="px-3 py-2 border border-white/10 hover:border-royal-gold text-gray-400 hover:text-royal-cream transition text-[10px] uppercase tracking-ultra-wide flex items-center gap-2"
                                       title="Open in Triumph">
                                        <i class="fas fa-desktop"></i> Triumph
                                    </a>

                                    <!-- Copy Code -->
                                    <button @click="copyCode(gift.code, gift.id)" 
                                            class="ml-2 px-4 py-2 border transition text-[10px] uppercase tracking-ultra-wide min-w-[100px] text-center"
                                            :class="copiedGiftId === gift.id ? 'border-green-500 text-green-400 bg-green-500/10' : 'border-royal-gold/50 text-royal-gold hover:bg-royal-gold hover:text-black'">
                                        <i class="fas" :class="copiedGiftId === gift.id ? 'fa-check' : 'fa-copy'"></i>
                                        {{ copiedGiftId === gift.id ? ' COPIED' : ' CODE' }}
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    </div>
</template>