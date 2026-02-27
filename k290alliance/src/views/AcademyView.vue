<script setup>
import { ref, computed } from 'vue'

// Importação dos seus componentes de guias
// (Você precisará criar a pasta src/components/guides/ e os arquivos .vue)
import GuideIniciante from '../components/guides/GuideIniciante.vue'
import GuideEconomia from '../components/guides/GuideEconomia.vue'
import GuideMilitar from '../components/guides/GuideMilitar.vue'
import GuideEventos from '../components/guides/GuideEventos.vue'
import GuideDicas from '../components/guides/GuideDicas.vue'

const activeTabId = ref('iniciante');

const tabs = [
    { id: 'iniciante', label: 'First Steps', component: GuideIniciante },
    { id: 'economia', label: 'Economy', component: GuideEconomia },
    { id: 'militar', label: 'Military', component: GuideMilitar },
    { id: 'eventos', label: 'Events', component: GuideEventos },
    { id: 'dicas', label: 'Pro Tips', component: GuideDicas }
];

const currentComponent = computed(() => {
    const tab = tabs.find(t => t.id === activeTabId.value);
    return tab ? tab.component : GuideIniciante;
});
</script>

<template>
    <div class="pt-12 min-h-screen pb-20 max-w-6xl mx-auto px-4 sm:px-6">
        <header class="text-center mb-16">
            <h1 class="text-5xl font-medieval font-bold text-royal-cream mb-4 text-glow">Royal Academy</h1>
            <p class="text-royal-gold uppercase tracking-ultra-wide text-xs">Access our complete library of strategies</p>
        </header>

        <div class="flex flex-col md:flex-row gap-8">
            
            <!-- Menu Lateral Estilizado -->
            <aside class="md:w-64 shrink-0">
                <div class="glass-card p-4 flex flex-row md:flex-col overflow-x-auto md:overflow-visible custom-scrollbar">
                    <nav class="flex flex-row md:flex-col gap-2 min-w-max md:min-w-0">
                        <button 
                            v-for="tab in tabs" 
                            :key="tab.id"
                            @click="activeTabId = tab.id"
                            class="text-left px-5 py-4 transition text-xs font-medium uppercase tracking-ultra-wide"
                            :class="activeTabId === tab.id 
                                    ? 'bg-royal-gold/20 text-royal-cream border-l-2 border-royal-gold text-glow' 
                                    : 'text-gray-400 hover:bg-white/5 hover:text-gray-200 border-l-2 border-transparent'"
                        >
                            {{ tab.label }}
                        </button>
                    </nav>
                </div>
            </aside>

            <!-- Área de Conteúdo dinâmico -->
            <main class="flex-1 min-w-0">
                <Transition name="fade" mode="out-in">
                    <component :is="currentComponent" :key="activeTabId" />
                </Transition>
            </main>
            
        </div>
    </div>
</template>