'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useArcanumStore } from '@/lib/store';
import { getArchetype } from '@/lib/archetypes';
import { getRitualsForArchetype, RITUAL_DOMAIN_LABELS } from '@/lib/rituals';
import Navigation from '@/components/Navigation';
import ParticleField from '@/components/ParticleField';
import type { Archetype, Ritual } from '@/types';

function RitualModal({
  ritual,
  archetype,
  onClose,
  onComplete,
  alreadyDone,
}: {
  ritual: Ritual;
  archetype: Archetype;
  onClose: () => void;
  onComplete: () => void;
  alreadyDone: boolean;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [phase, setPhase] = useState<'intro' | 'steps' | 'complete'>('intro');

  const handleBegin = () => setPhase('steps');

  const handleNext = () => {
    if (currentStep < ritual.steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      setPhase('complete');
    }
  };

  const handleComplete = () => {
    onComplete();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-arcanum-void/95 backdrop-blur-md" onClick={onClose} />

      <div className="relative z-10 w-full max-w-lg">
        <div
          className="card-arcane p-8 rounded-sm"
          style={{ borderColor: `${archetype.primaryColor}30` }}
        >
          {phase === 'intro' && (
            <>
              <div className="text-center mb-8">
                <div
                  className="w-16 h-16 mx-auto rounded-full border flex items-center justify-center mb-5 rune-circle"
                  style={{ borderColor: `${archetype.primaryColor}40` }}
                >
                  <span style={{ color: archetype.primaryColor }} className="text-2xl">◈</span>
                </div>
                <div
                  className="inline-block px-2 py-1 mb-3 text-xs font-display tracking-wider uppercase rounded-sm"
                  style={{ background: `${archetype.primaryColor}20`, color: archetype.primaryColor }}
                >
                  {RITUAL_DOMAIN_LABELS[ritual.domain]}
                </div>
                <h2 className="font-display text-arcanum-parchment text-xl tracking-wide mb-2">{ritual.name}</h2>
                <p className="font-serif text-arcanum-parchment/50 text-sm italic">{ritual.lore}</p>
              </div>

              <div className="mb-6">
                <p className="font-serif text-arcanum-parchment/70 text-sm leading-relaxed mb-4">
                  {ritual.description}
                </p>
                <div className="flex items-center gap-4 text-xs font-display text-arcanum-parchment/40 uppercase tracking-wider">
                  <span>{ritual.duration} minutes</span>
                  <span>◈</span>
                  <span>{ritual.steps.length} steps</span>
                  <span>◈</span>
                  <span>+{ritual.xpReward} XP</span>
                </div>
              </div>

              <div className="border-t border-arcanum-gold/10 pt-4 mb-6">
                <p className="font-display text-xs text-arcanum-gold/40 uppercase tracking-wider mb-2">
                  Symbolic Focus
                </p>
                <p className="font-serif text-arcanum-parchment/60 text-sm italic">{ritual.symbolicFocus}</p>
              </div>

              <button
                onClick={handleBegin}
                disabled={alreadyDone}
                className={`w-full py-4 text-sm rounded-sm font-display tracking-wider uppercase ${
                  alreadyDone ? 'opacity-40 cursor-not-allowed border border-arcanum-gold/20' : 'btn-primary'
                }`}
              >
                {alreadyDone ? 'Ritual Completed Today' : 'Begin the Rite'}
              </button>
            </>
          )}

          {phase === 'steps' && (
            <>
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-xs text-arcanum-gold/40 tracking-wider uppercase">{ritual.name}</span>
                <span className="font-display text-xs text-arcanum-parchment/30">
                  {currentStep + 1} / {ritual.steps.length}
                </span>
              </div>

              <div className="flex gap-1.5 mb-8">
                {ritual.steps.map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-0.5 rounded-full transition-all duration-500"
                    style={{
                      background: i <= currentStep
                        ? `linear-gradient(90deg, ${archetype.primaryColor}60, ${archetype.primaryColor})`
                        : 'rgba(255,255,255,0.05)',
                    }}
                  />
                ))}
              </div>

              <div className="min-h-[160px] flex flex-col justify-center mb-8">
                <p className="font-display text-xs text-arcanum-gold/40 uppercase tracking-wider mb-4">
                  Step {currentStep + 1}
                </p>
                <p className="font-serif text-arcanum-parchment/90 text-lg leading-relaxed">
                  {ritual.steps[currentStep]}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="w-full btn-primary py-4 text-sm rounded-sm"
              >
                {currentStep < ritual.steps.length - 1 ? 'Continue →' : 'Complete Ritual'}
              </button>
            </>
          )}

          {phase === 'complete' && (
            <div className="text-center">
              <span
                className="text-5xl block mb-6"
                style={{
                  color: archetype.primaryColor,
                  textShadow: `0 0 40px ${archetype.primaryColor}`,
                  animation: 'runeGlow 2s ease-in-out infinite',
                }}
              >
                {archetype.sigil}
              </span>
              <h2 className="font-display text-arcanum-gold text-xl tracking-widest uppercase mb-3">
                Rite Complete
              </h2>
              <p className="font-serif text-arcanum-parchment/60 text-sm italic mb-6">
                The Archive has recorded this ritual. +{ritual.xpReward} essence gathered.
              </p>
              <button onClick={handleComplete} className="btn-primary px-10 py-4 text-sm rounded-sm">
                Return to Archive
              </button>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-display text-xs text-arcanum-parchment/30 hover:text-arcanum-parchment/70 tracking-wider uppercase transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function RitualsPage() {
  const router = useRouter();
  const store = useArcanumStore();
  const { archetypeId, completedRituals, isPremium } = store;
  const [archetype, setArchetype] = useState<Archetype | null>(null);
  const [rituals, setRituals] = useState<Ritual[]>([]);
  const [selectedRitual, setSelectedRitual] = useState<Ritual | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!archetypeId) { router.push('/initiation'); return; }
    const a = getArchetype(archetypeId);
    if (a) { setArchetype(a); setRituals(getRitualsForArchetype(archetypeId)); }
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, [archetypeId]);

  if (!archetype) return null;

  const filtered = activeFilter === 'all'
    ? rituals
    : rituals.filter((r) => r.domain === activeFilter);

  const domains = ['all', ...Array.from(new Set(rituals.map((r) => r.domain)))];

  const handleComplete = (ritualId: string) => {
    store.completeRitual(ritualId);
  };

  return (
    <main className="relative min-h-screen bg-arcanum-void">
      <ParticleField />
      <Navigation />

      {selectedRitual && archetype && (
        <RitualModal
          ritual={selectedRitual}
          archetype={archetype}
          alreadyDone={completedRituals.includes(selectedRitual.id)}
          onClose={() => setSelectedRitual(null)}
          onComplete={() => handleComplete(selectedRitual.id)}
        />
      )}

      <div
        className="relative z-10 max-w-4xl mx-auto px-4 pt-24 pb-16 transition-all duration-800"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div className="mb-10">
          <p className="font-display text-arcanum-gold/40 text-xs tracking-[0.4em] uppercase mb-2">Sacred Rites</p>
          <h1 className="font-display text-3xl sm:text-4xl tracking-wide text-arcanum-parchment mb-2">
            Ritual Archive
          </h1>
          <p className="font-serif text-arcanum-parchment/50 text-sm italic">
            Practices calibrated for the {archetype.name}. Each rite carries the weight of genuine work.
          </p>
        </div>

        {/* Domain filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => setActiveFilter(domain)}
              className={`font-display text-xs tracking-wider uppercase px-4 py-2 rounded-sm border transition-all ${
                activeFilter === domain
                  ? 'border-arcanum-gold/60 text-arcanum-gold bg-arcanum-gold/10'
                  : 'border-white/10 text-arcanum-parchment/40 hover:border-arcanum-gold/30'
              }`}
            >
              {domain === 'all' ? 'All Rites' : RITUAL_DOMAIN_LABELS[domain] || domain}
            </button>
          ))}
        </div>

        {/* Streak banner */}
        {store.streakDays >= 3 && (
          <div
            className="card-arcane p-4 rounded-sm mb-6 flex items-center gap-4"
            style={{ borderColor: 'rgba(255,102,34,0.3)' }}
          >
            <span className="streak-flame text-2xl">◈</span>
            <div>
              <p className="font-display text-xs text-arcanum-ember-glow tracking-wider uppercase mb-0.5">
                {store.streakDays}-Day Ritual Streak
              </p>
              <p className="font-serif text-arcanum-parchment/50 text-xs italic">
                Your consistency is noted in the Archive. Continue.
              </p>
            </div>
          </div>
        )}

        {/* Ritual grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filtered.map((ritual) => {
            const done = completedRituals.includes(ritual.id);
            const locked = ritual.isPremium && !isPremium;

            return (
              <div
                key={ritual.id}
                className={`card-arcane p-6 rounded-sm cursor-pointer group transition-all ${
                  locked ? 'opacity-60' : ''
                }`}
                style={{ borderColor: done ? `${archetype.primaryColor}40` : undefined }}
                onClick={() => !locked && setSelectedRitual(ritual)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="inline-block px-2 py-0.5 text-xs font-display tracking-wider uppercase rounded-sm"
                    style={{ background: `${archetype.primaryColor}15`, color: archetype.primaryColor }}
                  >
                    {RITUAL_DOMAIN_LABELS[ritual.domain]}
                  </div>
                  {done && (
                    <span className="font-display text-xs text-arcanum-gold/60 tracking-wider uppercase">
                      ✓ Done
                    </span>
                  )}
                  {locked && (
                    <span className="premium-badge">Premium</span>
                  )}
                </div>

                <h3 className="font-display text-arcanum-parchment/90 text-sm tracking-wide mb-2 group-hover:text-arcanum-parchment transition-colors">
                  {ritual.name}
                </h3>
                <p className="font-serif text-arcanum-parchment/50 text-sm leading-relaxed mb-4">
                  {ritual.description}
                </p>

                <div className="flex items-center gap-4 text-xs font-display text-arcanum-parchment/30 uppercase tracking-wider">
                  <span>{ritual.duration} min</span>
                  <span>◈</span>
                  <span>+{ritual.xpReward} XP</span>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-arcanum-parchment/30 italic">No rites match this filter.</p>
          </div>
        )}

        {!isPremium && (
          <div className="mt-10 card-arcane p-6 rounded-sm text-center border-arcanum-gold/30">
            <p className="font-serif text-arcanum-parchment/50 text-sm italic mb-3">
              Premium rites are sealed. Adept access unlocks the full ritual archive.
            </p>
            <a href="/oracle?upgrade=1" className="btn-secondary px-8 py-3 text-xs rounded-sm inline-block">
              Unlock All Rites
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
