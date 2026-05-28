'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useArcanumStore } from '@/lib/store';
import { getArchetype } from '@/lib/archetypes';
import ParticleField from '@/components/ParticleField';
import type { Archetype } from '@/types';

function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(value), 500);
    return () => clearTimeout(t);
  }, [value]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-display text-xs text-arcanum-parchment/60 tracking-wider uppercase">{label}</span>
        <span className="font-display text-xs" style={{ color }}>{value}%</span>
      </div>
      <div className="h-1 bg-arcanum-void rounded-full overflow-hidden border border-white/5">
        <div
          className="h-full rounded-full transition-all duration-1500 ease-out"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}50, ${color})`,
            boxShadow: `0 0 8px ${color}`,
          }}
        />
      </div>
    </div>
  );
}

export default function RevelationPage() {
  const router = useRouter();
  const { archetypeId } = useArcanumStore();
  const [archetype, setArchetype] = useState<Archetype | null>(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!archetypeId) {
      router.push('/initiation');
      return;
    }
    const a = getArchetype(archetypeId);
    if (!a) return;
    setArchetype(a);

    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2800),
      setTimeout(() => setPhase(4), 4000),
      setTimeout(() => setPhase(5), 5200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [archetypeId, router]);

  if (!archetype) return null;

  return (
    <main
      className="relative min-h-screen bg-arcanum-void overflow-hidden"
      style={{ backgroundColor: '#050508' }}
    >
      <ParticleField />

      {/* Archetype color ambient */}
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-2000"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 30%, ${archetype.glowColor} 0%, transparent 70%)`,
          opacity: phase >= 3 ? 0.3 : 0,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 sm:py-24">

        {/* Phase 1: The Archive Speaks */}
        <div
          className="text-center mb-16 transition-all duration-1000"
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? 'translateY(0)' : 'translateY(-20px)',
          }}
        >
          <p className="font-display text-arcanum-gold/50 text-xs tracking-[0.5em] uppercase mb-3">
            The Archive Has Spoken
          </p>
          <div className="divider-rune" />
        </div>

        {/* Phase 2: Sigil */}
        <div
          className="text-center mb-12 transition-all duration-1000"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'scale(1)' : 'scale(0.5)',
          }}
        >
          <div
            className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full border flex items-center justify-center mb-6 rune-circle"
            style={{
              borderColor: `${archetype.primaryColor}40`,
              boxShadow: `0 0 60px ${archetype.glowColor}, inset 0 0 40px rgba(5,5,8,0.8)`,
            }}
          >
            <span
              className="text-5xl sm:text-6xl"
              style={{
                color: archetype.primaryColor,
                textShadow: `0 0 30px ${archetype.primaryColor}, 0 0 60px ${archetype.glowColor}`,
                filter: `drop-shadow(0 0 20px ${archetype.primaryColor})`,
              }}
            >
              {archetype.sigil}
            </span>
          </div>

          <div
            className="inline-block px-3 py-1 mb-4 text-xs font-display tracking-wider uppercase rounded-sm"
            style={{
              background: `${archetype.primaryColor}20`,
              border: `1px solid ${archetype.primaryColor}40`,
              color: archetype.primaryColor,
            }}
          >
            {archetype.rarity}
          </div>
        </div>

        {/* Phase 3: Name */}
        <div
          className="text-center mb-4 transition-all duration-1000"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <h1
            className="font-display text-3xl sm:text-5xl md:text-7xl font-black tracking-wider uppercase mb-2"
            style={{
              background: `linear-gradient(135deg, ${archetype.secondaryColor} 0%, ${archetype.primaryColor} 40%, #e8c97a 60%, ${archetype.primaryColor} 80%, ${archetype.secondaryColor} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {archetype.name}
          </h1>
          <p className="font-display text-arcanum-silver/60 text-sm tracking-[0.4em] uppercase">
            {archetype.class} · {archetype.element}
          </p>
        </div>

        {/* Phase 4: Quote */}
        <div
          className="text-center mb-16 max-w-2xl mx-auto transition-all duration-1000"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <blockquote className="font-serif text-arcanum-parchment/60 text-base sm:text-lg md:text-xl italic leading-relaxed">
            "{archetype.quote}"
          </blockquote>
        </div>

        {/* Phase 5: Full content */}
        <div
          className="transition-all duration-1000"
          style={{
            opacity: phase >= 5 ? 1 : 0,
            transform: phase >= 5 ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          {/* Lore */}
          <div className="card-arcane p-4 sm:p-8 rounded-sm mb-8">
            <h2 className="font-display text-arcanum-gold text-sm tracking-[0.3em] uppercase mb-6">
              Archive Entry
            </h2>
            <div className="lore-text whitespace-pre-line text-sm sm:text-base">
              {archetype.lore.split('\n\n').map((para, i) => (
                <p key={i} className="mb-4 last:mb-0" dangerouslySetInnerHTML={{
                  __html: para.replace(/\*([^*]+)\*/g, '<em>$1</em>')
                }} />
              ))}
            </div>
          </div>

          {/* Abilities + Stats grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

            {/* Abilities */}
            <div className="card-arcane p-4 sm:p-6 rounded-sm">
              <h2 className="font-display text-arcanum-gold text-xs tracking-[0.3em] uppercase mb-5">
                Abilities
              </h2>
              <div className="space-y-5">
                {archetype.abilities.map((ability, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-display tracking-wider uppercase"
                        style={{ color: archetype.primaryColor }}
                      >
                        {ability.tier}
                      </span>
                      <span className="font-display text-arcanum-parchment/90 text-sm font-semibold">
                        {ability.name}
                      </span>
                    </div>
                    <p className="font-serif text-arcanum-parchment/60 text-sm leading-relaxed">
                      {ability.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              {/* Attribute bars */}
              <div className="card-arcane p-4 sm:p-6 rounded-sm">
                <h2 className="font-display text-arcanum-gold text-xs tracking-[0.3em] uppercase mb-5">
                  Essence Profile
                </h2>
                <div className="space-y-4">
                  {[
                    { label: 'Perception', value: archetype.id === 'shadow-scholar' ? 95 : archetype.id === 'lunar-seer' ? 80 : archetype.id === 'void-oracle' ? 90 : 65 },
                    { label: 'Resilience', value: archetype.id === 'ashborn-monarch' ? 98 : archetype.id === 'silent-alchemist' ? 85 : archetype.id === 'storm-vessel' ? 70 : 72 },
                    { label: 'Emotional Depth', value: archetype.id === 'crimson-saint' ? 97 : archetype.id === 'lunar-seer' ? 95 : archetype.id === 'shadow-scholar' ? 60 : 78 },
                    { label: 'Latent Power', value: archetype.id === 'void-oracle' ? 100 : archetype.id === 'ashborn-monarch' ? 88 : archetype.id === 'storm-vessel' ? 85 : 80 },
                  ].map((stat) => (
                    <StatBar key={stat.label} label={stat.label} value={stat.value} color={archetype.primaryColor} />
                  ))}
                </div>
              </div>

              {/* Spiritual alignment */}
              <div className="card-arcane p-4 sm:p-6 rounded-sm">
                <h2 className="font-display text-arcanum-gold text-xs tracking-[0.3em] uppercase mb-3">
                  Spiritual Alignment
                </h2>
                <p className="font-serif text-arcanum-parchment/70 text-sm leading-relaxed">
                  {archetype.spiritualAlignment}
                </p>
              </div>
            </div>
          </div>

          {/* Strengths & Weaknesses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="card-arcane p-4 sm:p-6 rounded-sm">
              <h2 className="font-display text-arcanum-gold text-xs tracking-[0.3em] uppercase mb-4">
                Primary Strengths
              </h2>
              <ul className="space-y-2">
                {archetype.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span style={{ color: archetype.primaryColor }} className="mt-1 text-xs flex-shrink-0">◈</span>
                    <span className="font-serif text-arcanum-parchment/70 text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-arcane p-4 sm:p-6 rounded-sm">
              <h2 className="font-display text-arcanum-silver text-xs tracking-[0.3em] uppercase mb-4">
                Shadow Aspects
              </h2>
              <ul className="space-y-2">
                {archetype.weaknesses.map((w, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-arcanum-silver/40 mt-1 text-xs flex-shrink-0">◈</span>
                    <span className="font-serif text-arcanum-parchment/60 text-sm">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rare traits */}
          <div className="card-arcane p-6 rounded-sm mb-8">
            <h2 className="font-display text-xs tracking-[0.3em] uppercase mb-4" style={{ color: archetype.rarityColor }}>
              Rare Traits — Yours Alone
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {archetype.rareTraits.map((trait, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="mt-1 text-xs flex-shrink-0" style={{ color: archetype.rarityColor }}>✦</span>
                  <span className="font-serif text-arcanum-parchment/70 text-sm italic">{trait}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Forbidden knowledge */}
          <div
            className="card-arcane p-6 rounded-sm mb-12 border-arcanum-crimson/20"
            style={{ borderColor: `${archetype.primaryColor}30` }}
          >
            <h2 className="font-display text-xs tracking-[0.3em] uppercase mb-3 text-arcanum-crimson-bright">
              Forbidden Knowledge
            </h2>
            <p className="font-serif text-arcanum-parchment/60 text-sm leading-relaxed italic">
              {archetype.forbiddenKnowledge}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="font-serif text-arcanum-parchment/40 text-sm italic mb-6">
              The Archive has recorded your essence. Your Sanctum awaits.
            </p>
            <Link href="/sanctum" className="btn-primary px-8 sm:px-12 py-4 sm:py-5 text-sm rounded-sm">
              Enter the Sanctum
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
