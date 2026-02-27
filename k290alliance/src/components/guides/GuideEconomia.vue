<template>
  <div class="space-y-8">
    
    <div class="glass-card p-8 md:p-12 rounded border border-white/5">
      <h2 class="text-4xl font-ornate text-royal-cream mb-8 border-b border-royal-gold/20 pb-4 text-glow">
        Economy & Resources Guide
      </h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-10">
        <div class="bg-black/40 p-5 rounded border border-white/5">
          <div class="flex items-center gap-3 mb-4">
            <i class="fas fa-book-open text-royal-gold text-xl"></i>
            <h4 class="font-medieval font-bold text-royal-cream uppercase text-sm tracking-widest">Essential Acronyms</h4>
          </div>
          
          <div class="grid grid-cols-2 gap-x-4 gap-y-3 text-xs text-gray-400 font-light">
            <div class="space-y-2">
              <p><strong class="text-white font-normal">RSS:</strong> Resources</p>
              <p><strong class="text-white font-normal">WS:</strong> Wellspring</p>
              <p><strong class="text-white font-normal">DM:</strong> Dragon Mounds</p>
              <p><strong class="text-white font-normal">KC:</strong> Kingdom Chat</p>
              <p><strong class="text-white font-normal">PM:</strong> Private Message</p>
            </div>
            
            <div class="space-y-2">
              <p><strong class="text-white font-normal">VP:</strong> Valor Points</p>
              <p><strong class="text-white font-normal">XP:</strong> Experience Points</p>
              <p><strong class="text-white font-normal">CP:</strong> Conquest Points</p>
              <p><strong class="text-white font-normal">ROE:</strong> Rules of Engagement</p>
            </div>

            <div class="space-y-2 col-span-2 border-t border-white/10 pt-3 mt-1 grid grid-cols-2 gap-x-4">
              <div>
                <p><strong class="text-white font-normal">PvP:</strong> Player vs Player</p>
                <p><strong class="text-white font-normal">COT:</strong> Clash of Thrones</p>
                <p><strong class="text-white font-normal">KvK:</strong> Kingdoms vs Kingdoms</p>
                <p><strong class="text-white font-normal">TGH:</strong> The Great Hunt</p>
                <p><strong class="text-white font-normal">ATT:</strong> Ancients Treasure</p>
              </div>
              <div>
                <p><strong class="text-white font-normal">SMT:</strong> Summon Mastery</p>
                <p><strong class="text-white font-normal">RG:</strong> Royal Guard</p>
                <p><strong class="text-white font-normal">SK:</strong> Seasonal Kingdom</p>
                <p><strong class="text-white font-normal">RoA:</strong> Rise of Ancient</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-black/40 p-5 rounded border border-white/5 relative overflow-hidden flex flex-col justify-center">
          <div class="absolute -right-4 -top-4 text-7xl text-white/5 pointer-events-none">
            <i class="fas fa-coins"></i>
          </div>
          <div class="flex items-center gap-3 mb-4 relative z-10">
            <i class="fas fa-coins text-gray-300 text-xl"></i>
            <h4 class="font-medieval font-bold text-royal-cream uppercase text-sm tracking-widest">Silver (The Bottleneck)</h4>
          </div>
          <p class="text-sm text-gray-400 font-light leading-relaxed relative z-10">
            The soul of the army. Without it, you cannot train troops.
            <br><br><strong class="text-white font-normal">Tip:</strong> Never leave your silver sitting idle in war times. Spend it before logging off to avoid attacks.
          </p>
        </div>
      </div>

      <h3 class="text-2xl font-medieval text-royal-cream font-bold mb-4 flex items-center gap-3 text-glow">
        <i class="fas fa-city text-royal-gold"></i> Construction Strategy
      </h3>
      <div class="grid md:grid-cols-2 gap-4 mb-8">
        <div class="bg-black/40 p-5 rounded border border-white/5">
          <h5 class="text-green-400 font-medieval font-bold tracking-wider text-sm mb-2">Army Focus (Farms)</h5>
          <p class="text-xs text-gray-400 font-light leading-relaxed">
            If your clan provides plenty of silver via chests, build more <strong class="text-white font-normal">Farms</strong>. This sustains a larger army and speeds up training.
          </p>
        </div>
        <div class="bg-black/40 p-5 rounded border border-white/5">
          <h5 class="text-blue-400 font-medieval font-bold tracking-wider text-sm mb-2">Silver Focus (Mansions)</h5>
          <p class="text-xs text-gray-400 font-light leading-relaxed">
            If you need to be self-sufficient, build more <strong class="text-white font-normal">Mansions</strong>. Essential for reviving troops and trading for mercenaries.
          </p>
        </div>
      </div>

      <div class="bg-black/40 p-5 rounded border-l-2 border-purple-500 mb-6">
        <h4 class="text-purple-400 font-medieval font-bold uppercase tracking-widest text-sm mb-3">
          <i class="fas fa-map-marker-alt mr-2"></i> Map Positioning (Tiles)
        </h4>
        <p class="text-sm text-gray-300 mb-3 font-light">
          Move your city to "tiles" that complement your build.
        </p>
        <ul class="text-sm text-gray-400 font-light list-disc pl-5 space-y-2">
          <li><strong class="text-white font-normal">Terrain Bonus:</strong> Look for tiles with +90% Food or +60% Silver.</li>
          <li><strong class="text-white font-normal">Clan Territory:</strong> Stay INSIDE the borders to receive research bonuses and protection.</li>
        </ul>
      </div>

    </div>

    <div class="glass-card p-8 md:p-12 rounded border border-white/5">
      <h2 class="text-4xl font-ornate text-royal-cream mb-8 border-b border-royal-gold/20 pb-4 text-glow">
        Acquisition & Conservation
      </h2>

      <div class="space-y-6">
        
        <div class="bg-black/40 border border-white/5 p-5 rounded flex gap-5">
          <div class="text-royal-gold text-4xl mt-1"><i class="fas fa-dungeon"></i></div>
          <div>
            <h4 class="text-royal-cream font-medieval font-bold uppercase tracking-widest text-sm mb-2">The Carter Method (Crypts)</h4>
            <p class="text-sm text-gray-400 font-light leading-relaxed">
              Exploring crypts is vital. Maximize <strong class="text-white font-normal">Captain Carter's</strong> level and gear focusing on "Exploration Efficiency" and "Tar Capacity." This allows you to open high-level crypts while spending less.
            </p>
          </div>
        </div>

        <div class="bg-black/40 border-l-2 border-yellow-500 p-5 rounded">
          <h4 class="text-yellow-500 font-medieval font-bold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
            <i class="fas fa-gift"></i> Passive Resources [RSS & Gold]  
          </h4>
          <ul class="list-disc pl-5 text-sm text-gray-400 font-light space-y-2">
            <li><strong class="text-white font-normal">Taxes:</strong> Pay ALL gold bars daily at the Capitol.</li>
            <li><strong class="text-white font-normal">Gathering Captains:</strong> Use <strong class="text-white font-normal">Stror</strong> (fast mining) and <strong class="text-white font-normal">Helen</strong> (passive production).</li>
          </ul>
        </div>

        <div class="bg-black/40 border-l-2 border-red-500 p-5 rounded">
          <h4 class="text-red-400 font-medieval font-bold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
            <i class="fas fa-heart-broken"></i> The Golden Rule of Resurrection
          </h4>
          <p class="text-gray-200 text-sm font-medium mb-2">
            Avoid spending Gold to revive regular troops!
          </p>
          <p class="text-sm text-gray-400 font-light leading-relaxed">
            Use <strong class="text-white font-normal">Holy Potions</strong> (Nectarius helps with production) or wait for events like "Ruthless Slaughter" where the cost changes to Silver. Save gold for Mercenaries or real emergencies.
          </p>
        </div>

        <div class="bg-white/5 p-6 rounded border-t-2 border-royal-gold mt-8">
          <h4 class="text-royal-gold font-medieval font-bold text-sm tracking-widest uppercase mb-4">Efficient Daily Summary</h4>
          <ol class="list-decimal pl-5 text-sm text-gray-300 font-light space-y-2">
            <li>Activate VIP.</li>
            <li>Pay taxes at the Capitol.</li>
            <li>Explore Crypts with Carter.</li>
            <li>Complete daily/triumphal quests.</li>
            <li>Attack Epic Monster Events.</li>
          </ol>
        </div>

      </div>
    </div>

  </div>
</template>