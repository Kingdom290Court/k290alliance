<script setup>
import { ref } from 'vue';
import { researchData } from '../data/dataResearch.js';

// Transforma o objeto de dados num array para as abas
const categories = Object.keys(researchData).map(key => ({
  id: key,
  ...researchData[key]
}));

// Estado para a aba ativa (por defeito a primeira: Guardsmen)
const activeTab = ref(categories[0].id);
</script>

<template>
  <div class="pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
    
    <!-- Header Especial da Biblioteca -->
    <div class="text-center mb-16 relative">
      <div class="absolute left-1/2 -translate-x-1/2 top-0 -z-10 opacity-20">
        <i class="fas fa-book-journal-whills text-[150px] text-royal-gold"></i>
      </div>
      <h1 class="text-5xl md:text-6xl font-ornate text-royal-cream mb-4 text-glow">Royal Library</h1>
      <p class="text-royal-gold uppercase tracking-ultra-wide text-xs">Valor Points (VP) Research Spreadsheets</p>
    </div>

    <div class="glass-card p-6 md:p-8 rounded border border-white/5">
      
      <!-- Navegação das Tabelas -->
      <div class="flex flex-wrap gap-2 border-b border-royal-gold/20 pb-4 mb-6">
        <button v-for="cat in categories" :key="cat.id" 
                @click="activeTab = cat.id"
                class="px-5 py-3 transition text-xs font-medium uppercase tracking-ultra-wide rounded-t flex items-center gap-2"
                :class="activeTab === cat.id 
                        ? 'bg-royal-gold/20 text-royal-cream border border-b-0 border-royal-gold text-glow' 
                        : 'bg-black/40 text-gray-400 hover:text-gray-200 border border-white/5'">
          <i :class="['fas', cat.icon]"></i>
          {{ cat.title }}
        </button>
      </div>

      <!-- Tabela Principal (Spreadsheet Look) -->
      <div v-for="cat in categories" :key="'table-'+cat.id" v-show="activeTab === cat.id">
        <div class="overflow-x-auto custom-scrollbar border border-white/10 rounded bg-black/50">
          <table class="w-full text-left border-collapse whitespace-nowrap min-w-[1000px]">
            <thead>
              <tr class="bg-black/80 border-b border-white/20 text-royal-gold text-[10px] uppercase tracking-widest font-medieval font-bold">
                <th class="p-4 border-r border-white/5 sticky left-0 bg-black/90 z-10 w-64">Research</th>
                <th class="p-4 border-r border-white/5 text-center">Unlock / Lvl 1</th>
                <th class="p-4 border-r border-white/5 text-center text-gray-500">Lvl 2</th>
                <th class="p-4 border-r border-white/5 text-center text-gray-500">Lvl 3</th>
                <th class="p-4 border-r border-white/5 text-center text-gray-500">Lvl 4</th>
                <th class="p-4 border-r border-white/5 text-center text-gray-500">Lvl 5</th>
                <th class="p-4 border-r border-white/5 text-center text-gray-500">Lvl 6</th>
                <th class="p-4 border-r border-white/5 text-center text-gray-500">Lvl 7</th>
                <th class="p-4 border-r border-white/5 text-center text-gray-500">Lvl 8</th>
                <th class="p-4 border-r border-white/5 text-center text-gray-500">Lvl 9</th>
                <th class="p-4 border-r border-white/5 text-center text-gray-500">Lvl 10</th>
                <th class="p-4 text-center bg-royal-gold/10">Total VP</th>
              </tr>
            </thead>
            <tbody class="text-xs text-gray-300 font-light font-mono">
              <tr v-for="(item, idx) in cat.items" :key="idx" class="border-b border-white/5 hover:bg-white/5 transition">
                
                <!-- Nome (Congelado na esquerda) -->
                <td class="p-4 border-r border-white/5 sticky left-0 z-10 truncate max-w-[250px]" 
                    :class="idx % 2 === 0 ? 'bg-[#0f0f0f]' : 'bg-[#141414]'" 
                    :title="item.name">
                  <span class="font-sans text-gray-200 tracking-wide">{{ item.name }}</span>
                </td>
                
                <!-- Nível 1 -->
                <td class="p-4 border-r border-white/5 text-center text-royal-cream font-medium">
                  {{ item.unlock }}
                </td>

                <!-- Níveis 2 ao 10 (Loop) -->
                <td v-for="(val, vIdx) in item.levels" :key="vIdx" 
                    class="p-4 border-r border-white/5 text-center"
                    :class="val === '-' ? 'text-gray-600' : 'text-gray-400'">
                  {{ val }}
                </td>

                <!-- Total -->
                <td class="p-4 text-center font-bold text-royal-gold bg-royal-gold/5">
                  {{ item.total }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Um pequeno ajuste para garantir que as linhas "zebradas" do cabeçalho fixo 
fiquem legíveis no scroll horizontal */
td.sticky {
  backdrop-filter: blur(5px);
}
</style>