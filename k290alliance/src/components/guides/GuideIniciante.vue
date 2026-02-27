<script setup>
import { computed } from 'vue';
// Certifique-se de que o caminho de importação dos dados está correto no seu projeto
import { captainsData } from '../../data/data';

const getImageUrl = (folder, name) => {
  return new URL(`../../assets/${folder}/${name}.jpg`, import.meta.url).href;
};

const tutorialCaptains = computed(() => {
  const targets = ['Sofia', 'Tengel', 'Logos'];
  let found = [];
  
  if (captainsData) {
      captainsData.forEach(tier => {
        tier.units.forEach(cap => {
          if (targets.includes(cap.unit)) {
            found.push(cap);
          }
        });
      });
  }
  
  return found.sort((a, b) => targets.indexOf(a.unit) - targets.indexOf(b.unit));
});
</script>

<template>
  <div class="space-y-8">
    
    <!-- Introduction -->
    <div class="glass-card p-8 md:p-12 rounded border border-white/5">
      <h2 class="text-4xl font-ornate text-royal-cream mb-6 border-b border-royal-gold/20 pb-4 text-glow">
        Starting Your Journey
      </h2>
      <p class="text-gray-300 font-light leading-relaxed text-sm md:text-base">
        The start in Total Battle can be brutal. Your first <strong class="text-white font-normal">few days</strong> will define whether you will be a military powerhouse or just a farm for others.
      </p>
    </div>

    <!-- CRITICAL ALERT: Hero's Test -->
    <div class="glass-card p-8 md:p-10 rounded border border-red-500/40 relative overflow-hidden shadow-[0_0_20px_rgba(239,68,68,0.1)]">
      <div class="absolute top-0 right-0 p-6 opacity-10 pointer-events-none text-red-500">
        <i class="fas fa-hourglass-half text-9xl"></i>
      </div>

      <div class="relative z-10">
        <div class="flex items-center gap-4 mb-4">
          <div class="bg-red-500/20 text-red-400 w-8 h-8 flex items-center justify-center rounded border border-red-500/50">
            <i class="fas fa-exclamation"></i>
          </div>
          <h3 class="text-2xl font-medieval font-bold text-red-400 text-glow uppercase tracking-widest">Crucial: Hero's Test (7 Days)</h3>
        </div>
        
        <p class="text-gray-300 font-light mb-6 leading-relaxed">
          As soon as you create your account, a temporary event called <strong class="text-white font-normal">"Hero's Test"</strong> begins. You have exactly <strong class="text-red-400 font-bold">7 days</strong> to complete it. Do not ignore this event!
        </p>

        <div class="bg-black/60 border-l-2 border-red-500 p-5 rounded text-sm text-gray-300 font-light space-y-3">
          <p>This event is the absolute best source of <strong class="text-royal-gold">Gold</strong>, <strong class="text-white">Speedups</strong>, and <strong class="text-blue-400">Hero XP</strong> in the early game.</p>
          <ul class="list-disc pl-5 space-y-2 text-gray-400">
            <li>Focus <strong class="text-white">100% of your initial actions</strong> on completing its specific tasks.</li>
            <li>It will guide you to level up your Capitol, train troops, and research. Follow its steps meticulously.</li>
            <li>Failing to complete this event puts you weeks behind other players in your kingdom and lost a <br>FREE AVATAR HERO.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- STEP 0: Aydae's Saga -->
    <div class="glass-card p-8 md:p-10 rounded border border-royal-gold/30 relative overflow-hidden">
      <div class="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
        <i class="fas fa-book-open text-9xl text-royal-cream"></i>
      </div>

      <div class="relative z-10">
        <div class="flex items-center gap-4 mb-6">
          <div class="border border-royal-gold/50 text-royal-gold w-8 h-8 flex items-center justify-center rounded font-medieval font-bold">0</div>
          <h3 class="text-2xl font-medieval font-bold text-royal-cream text-glow">Aydae's Saga (Tutorial)</h3>
        </div>
        
        <p class="text-gray-300 font-light mb-8 leading-relaxed">
          Before thinking about war, you have a mission: <strong class="text-white font-normal">Save Princess Aydae</strong>. 
          Do not ignore the tutorial chapters! They are not just story; they are the source of your first and most important Captains.
        </p>

        <div class="bg-black/40 rounded p-6 border border-white/5">
          <h4 class="text-royal-gold font-medieval font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-3">
            <i class="fas fa-chess-queen"></i> Chapter Rewards:
          </h4>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div v-for="cap in tutorialCaptains" :key="cap.unit" 
                 class="bg-white/5 p-5 rounded border border-transparent hover:border-royal-gold/30 transition text-center group">
              
              <img :src="getImageUrl('capitains', cap.unit)" :alt="cap.unit"
                   class="w-16 h-16 rounded-full object-cover mx-auto mb-4 border border-white/10 group-hover:scale-110 group-hover:border-royal-gold transition bg-black">
              
              <h5 class="text-royal-cream font-medieval tracking-widest uppercase text-sm mb-2">{{ cap.unit }}</h5>
              <p class="text-[10px] text-gray-400 font-light leading-relaxed line-clamp-3">{{ cap.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- STEP 1: Capitol Rush -->
    <div class="glass-card p-8 md:p-10 rounded border border-white/5">
      <div class="flex items-center gap-4 mb-4">
        <div class="border border-white/20 text-gray-300 w-8 h-8 flex items-center justify-center rounded font-medieval font-bold">1</div>
        <h3 class="text-2xl font-medieval font-bold text-royal-cream text-glow">Capitol Rush</h3>
      </div>
      
      <p class="text-gray-300 font-light leading-relaxed mb-6">
        Don't waste time training excessive low-level troops (T1/T2). Your goal is to level up the <strong class="text-white font-normal">Capitol</strong> as fast as possible to unlock superior technologies.
      </p>

      <div class="bg-black/40 p-5 border-l-2 border-blue-500 rounded flex items-start gap-4">
        <i class="fas fa-info-circle text-blue-400 mt-1"></i>
        <div>
          <strong class="text-blue-400 block mb-1 font-medieval tracking-widest uppercase text-xs">Vital Economy Tip:</strong> 
          <span class="text-gray-400 font-light text-sm leading-relaxed">Use your speedups only on constructions and research that take <strong class="text-white font-normal">more than 4 hours</strong>. For short times, use the alliance "Help" button.</span>
        </div>
      </div>
    </div>

    <!-- STEP 2: Join a Clan -->
    <div class="glass-card p-8 md:p-10 rounded border border-white/5">
      <div class="flex items-center gap-4 mb-6">
        <div class="border border-white/20 text-gray-300 w-8 h-8 flex items-center justify-center rounded font-medieval font-bold">2</div>
        <h3 class="text-2xl font-medieval font-bold text-royal-cream text-glow">Join a Clan (Immediately!)</h3>
      </div>
      
      <ul class="grid md:grid-cols-3 gap-6 text-sm">
        <li class="flex flex-col items-center text-center gap-3 bg-black/40 p-6 rounded border border-white/5">
          <i class="fas fa-hand-holding-medical text-green-500 text-2xl"></i>
          <span class="text-gray-300 font-light">Help reduces construction time</span>
        </li>
        <li class="flex flex-col items-center text-center gap-3 bg-black/40 p-6 rounded border border-white/5">
          <i class="fas fa-gift text-royal-gold text-2xl"></i>
          <span class="text-gray-300 font-light">Clan Chests (Resources/Gold)</span>
        </li>
        <li class="flex flex-col items-center text-center gap-3 bg-black/40 p-6 rounded border border-white/5">
          <i class="fas fa-shield-alt text-blue-500 text-2xl"></i>
          <span class="text-gray-300 font-light">Protection against attacks</span>
        </li>
      </ul>
    </div>

    <!-- STEP 3: The 200 Points Rule -->
    <div class="glass-card p-8 md:p-10 rounded border border-white/5">
      <div class="flex items-center gap-4 mb-6">
        <div class="border border-white/20 text-gray-300 w-8 h-8 flex items-center justify-center rounded font-medieval font-bold">3</div>
        <h3 class="text-2xl font-medieval font-bold text-royal-cream text-glow">The 200 Points Rule</h3>
      </div>

      <div class="flex flex-col md:flex-row gap-8 items-center">
        <div class="flex-1">
          <p class="text-gray-300 font-light leading-relaxed mb-4">
            Daily quests are the backbone of your growth. They provide resources, Hero XP, and fragments.
          </p>
          <ul class="list-disc pl-5 space-y-2 text-gray-400 font-light text-sm">
            <li>Complete simple tasks (gathering, training, killing monsters).</li>
            <li>The goal is not just to complete them, but to reach the chest milestones.</li>
          </ul>
        </div>
        
        <div class="bg-black/40 p-8 rounded border border-royal-gold/20 text-center w-full md:w-auto min-w-[240px]">
          <div class="text-5xl font-ornate text-royal-gold mb-2 text-glow">200</div>
          <div class="text-[10px] uppercase tracking-ultra-wide text-royal-cream font-bold mb-4">Daily Points</div>
          <p class="text-xs text-gray-400 font-light">Mandatory goal to earn the<br><strong class="text-white font-normal">Summoning Scroll</strong>.</p>
        </div>
      </div>
    </div>

    <!-- STEP 4: City Layout -->
    <div class="glass-card p-8 md:p-10 rounded border border-white/5">
      <div class="flex items-center gap-4 mb-8">
        <div class="border border-white/20 text-gray-300 w-8 h-8 flex items-center justify-center rounded font-medieval font-bold">4</div>
        <h3 class="text-2xl font-medieval font-bold text-royal-cream text-glow">The Golden Standard: City Layout</h3>
      </div>

      <p class="text-gray-300 font-light leading-relaxed mb-8">
        To maximize efficiency, veteran players follow a specific building ratio. This setup ensures you have enough food for upkeep, silver for production, and training speed for war.
      </p>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-black/40 border border-white/5 p-6 rounded text-center">
          <i class="fas fa-wheat text-green-500/80 text-3xl mb-3"></i>
          <div class="text-3xl font-medieval font-bold text-royal-cream mb-1">18</div>
          <div class="text-[10px] uppercase tracking-ultra-wide text-gray-400">Farms</div>
        </div>
        <div class="bg-black/40 border border-white/5 p-6 rounded text-center">
          <i class="fas fa-home text-yellow-500/80 text-3xl mb-3"></i>
          <div class="text-3xl font-medieval font-bold text-royal-cream mb-1">6</div>
          <div class="text-[10px] uppercase tracking-ultra-wide text-gray-400">Mansions</div>
        </div>
        <div class="bg-black/40 border border-white/5 p-6 rounded text-center">
          <i class="fas fa-campground text-red-500/80 text-3xl mb-3"></i>
          <div class="text-3xl font-medieval font-bold text-royal-cream mb-1">10</div>
          <div class="text-[10px] uppercase tracking-ultra-wide text-gray-400">Barracks</div>
        </div>
        <div class="bg-black/40 border border-white/5 p-6 rounded text-center">
          <i class="fas fa-hammer text-gray-500 text-3xl mb-3"></i>
          <div class="text-3xl font-medieval font-bold text-royal-cream mb-1">1</div>
          <div class="text-[10px] uppercase tracking-ultra-wide text-gray-400">Of Each Resource</div>
        </div>
      </div>

      <div class="bg-white/5 p-5 rounded mb-8 border border-white/5">
        <h4 class="text-royal-cream font-medieval font-bold text-sm tracking-widest uppercase mb-2">Standard Buildings:</h4>
        <p class="text-sm text-gray-400 font-light">
          Temple, Caravan, Portal Master, Academy, Warehouse. (Always build these as they unlock).
        </p>
      </div>

      <div class="bg-black/40 p-5 border-l-2 border-purple-500 rounded flex items-start gap-4">
        <i class="fas fa-balance-scale text-purple-400 mt-1"></i>
        <div>
          <strong class="text-purple-400 block mb-2 font-medieval tracking-widest uppercase text-xs">Strategic Choice:</strong> 
          <span class="text-gray-400 font-light text-sm leading-relaxed">
            This is the standard recommendation (18 Farms / 6 Mansions). However, you can adjust this balance depending on your playstyle. 
            Prioritize <strong class="text-white font-normal">Mansions</strong> if you need more Silver (Production/Research). Prioritize <strong class="text-white font-normal">Farms</strong> if you need more Food (Troop Upkeep). 
            The number of Barracks and Resource buildings should generally remain standard.
          </span>
        </div>
      </div>

    </div>

  </div>
</template>