'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useArcanumStore } from '@/lib/store';
import { getArchetype } from '@/lib/archetypes';
import { getRitualsForArchetype } from '@/lib/rituals';
import Navigation from '@/components/Navigation';
import ParticleField from '@/components/ParticleField';
import type { Archetype } from '@/types';

function RelicPlaceholder({ unlocked, name, symbol }: { unlocked: boolean; name: string; symbol: string }) {
  return (
    <div
      className={`flex flex-col items-center gap-2 p-4 rounded-sm border transition-all ${
        unlocked
          ? 'border-arcanum-gold/30 bg-arcanum-gold/5'
          : 'border-white/5 opacity-40'
      }`}
    >
      <span className="text-2xl" style={{ filter: unlocked ? 'none' : 'blur(3px) grayscale(1)' }}>
        {symbol}
      </span>
      <span className="font-display text-[10px] tracking-wider text-arcanum-gold/60 uppercase text-center">
        {unlocked ? name : '???'}
      </span>
    </div>
  );
}

export default function SanctumPage() {
  const router = useRouter();
  const store = useArcanumStore();
  const [archetype, setArchetype] = useState<Archetype | null>(null);
  const [visible, setVisible] = useState(false);

  const { archetypeId, level, xp, xpToNextLevel, title, streakDays, completedRituals, isPremium, initiationDate } = store;

  useEffect(() => {
    store.checkStreak();
    if (!archetypeId) {
      router.push('/initiation');
      return;
    }
    const a = getArchetype(archetypeId);
    if (a) setArchetype(a);

    // Handle Stripe success redirect
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('upgraded') === '1') {
        store.setPremium(true);
        const url = new URL(window.location.href);
        url.searchParams.delete('upgraded');
        url.searchParams.delete('session_id');
        window.history.replaceState({}, '', url.toString());
      }
    }

    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, [archetypeId]);

  if (!archetype) return null;

  const rituals = getRitualsForArchetype(archetypeId!);
  const completedCount = completedRituals.filter((id) => rituals.some((r) => r.id === id)).length;
  const xpPercent = Math.round((xp / xpToNextLevel) * 100);

  const daysSince = initiationDate
    ? Math.floor((Date.now() - new Date(initiationDate).getTime()) / 86400000)
    : 0;

  const RELICS = [
    { name: 'Initiate Seal', symbol: archetype.sigil, unlockXP: 0 },
    { name: 'First Ritual', symbol: '◈', unlockXP: 75 },
    { name: 'Streak Keeper', symbol: '⚬', unlockXP: 300 },
    { name: 'Archive Key', symbol: '⊗', unlockXP: 500 },
    { name: 'Oracle Token', symbol: '☽', unlockXP: 800 },
    { name: 'Rare Evolution', symbol: '✦', unlockXP: 1200 },
  ];

  return (
    <main className="relative min-h-screen bg-arcanum-void">
      <ParticleField />
      <Navigation />

      <div
        className="relative z-10 max-w-5xl mx-auto px-4 pt-20 pb-16 transition-all duration-800"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {/* Header */}
        <div className="mb-12">
          <p className="font-display text-arcanum-gold/40 text-xs tracking-[0.4em] uppercase mb-2">
            Personal Sanctum
          </p>
          <h1 className="font-display text-3xl sm:text-4xl tracking-wide" style={{ color: archetype.primaryColor }}>
            {archetype.name}
          </h1>
          <p className="font-serif text-arcanum-parchment/50 mt-1 text-sm italic">{title}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

          {/* Left: Archetype card */}
          <div className="lg:col-span-1">
            <div
              className="card-arcane p-8 rounded-sm text-center h-full"
              style={{ borderColor: `${archetype.primaryColor}30` }}
            >
              {/* Sigil */}
              <div
                className="w-20 h-20 mx-auto rounded-full border flex items-center justify-center mb-5 rune-circle"
                style={{
                  borderColor: `${archetype.primaryColor}40`,
                  boxShadow: `0 0 40px ${archetype.glowColor}`,
                }}
              >
                <span
                  className="text-3xl"
                  style={{
                    color: archetype.primaryColor,
                    textShadow: `0 0 20px ${archetype.primaryColor}`,
                  }}
                >
                  {archetype.sigil}
                </span>
              </div>

              {/* Level */}
              <div className="mb-5">
                <p className="font-display text-arcanum-gold/40 text-xs tracking-wider uppercase mb-1">Level</p>
                <p
                  className="font-display text-5xl font-black"
                  style={{ color: archetype.primaryColor }}
                >
                  {level}
                </p>
              </div>

              {/* XP bar */}
              <div className="mb-5">
                <div className="flex justify-between mb-1.5">
                  <span className="font-display text-xs text-arcanum-parchment/40 tracking-wider">XP</span>
                  <span className="font-display text-xs text-arcanum-gold/60">{xp} / {xpToNextLevel}</span>
                </div>
                <div className="xp-bar-track h-1.5 rounded-full">
                  <div className="xp-bar-fill h-full rounded-full" style={{ width: `${xpPercent}%` }} />
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-white/3 rounded-sm p-3">
                  <p className="font-display text-xs text-arcanum-gold/40 uppercase tracking-wider mb-1">Streak</p>
                  <p className={`font-display text-xl font-bold ${streakDays > 0 ? 'streak-flame' : 'text-arcanum-parchment/40'}`}>
                    {streakDays}
                  </p>
                </div>
                <div className="bg-white/3 rounded-sm p-3">
                  <p className="font-display text-xs text-arcanum-gold/40 uppercase tracking-wider mb-1">Rituals</p>
                  <p className="font-display text-xl font-bold text-arcanum-parchment/70">
                    {completedCount}
                  </p>
                </div>
                <div className="bg-white/3 rounded-sm p-3">
                  <p className="font-display text-xs text-arcanum-gold/40 uppercase tracking-wider mb-1">Days</p>
                  <p className="font-display text-xl font-bold text-arcanum-parchment/70">
                    {daysSince}
                  </p>
                </div>
                <div className="bg-white/3 rounded-sm p-3">
                  <p className="font-display text-xs text-arcanum-gold/40 uppercase tracking-wider mb-1">Rank</p>
                  <p className="font-display text-xs font-bold text-arcanum-silver/70 leading-tight">
                    {archetype.rarity}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-2 space-y-6">

            {/* Daily ritual */}
            <div className="card-arcane p-6 rounded-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-arcanum-gold text-xs tracking-[0.3em] uppercase">
                  Today's Ritual
                </h2>
                <Link href="/rituals" className="font-display text-xs text-arcanum-gold/40 hover:text-arcanum-gold transition-colors tracking-wider uppercase">
                  All Rituals →
                </Link>
              </div>

              {rituals.length > 0 ? (
                <div>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-sm border flex items-center justify-center flex-shrink-0"
                      style={{
                        borderColor: `${archetype.primaryColor}30`,
                        background: `${archetype.primaryColor}10`,
                      }}
                    >
                      <span style={{ color: archetype.primaryColor }}>◈</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display text-sm text-arcanum-parchment tracking-wide">
                          {rituals[0].name}
                        </h3>
                        <span className="font-display text-xs text-arcanum-gold/40">+{rituals[0].xpReward} XP</span>
                      </div>
                      <p className="font-serif text-arcanum-parchment/50 text-sm leading-relaxed mb-3">
                        {rituals[0].description}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="font-display text-xs text-arcanum-parchment/30 uppercase tracking-wider">
                          {rituals[0].duration} min
                        </span>
                        <Link href="/rituals" className="btn-secondary px-4 py-1.5 text-xs rounded-sm">
                          Begin
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="font-serif text-arcanum-parchment/40 text-sm italic">
                  No rituals available yet.
                </p>
              )}
            </div>

            {/* Emotional profile */}
            <div className="card-arcane p-6 rounded-sm">
              <h2 className="font-display text-arcanum-gold text-xs tracking-[0.3em] uppercase mb-4">
                Emotional Profile
              </h2>
              <p className="font-serif text-arcanum-parchment/70 text-sm leading-relaxed">
                {archetype.emotionalProfile}
              </p>
            </div>

            {/* Growth path */}
            <div className="card-arcane p-6 rounded-sm">
              <h2 className="font-display text-arcanum-gold text-xs tracking-[0.3em] uppercase mb-4">
                Your Growth Path
              </h2>
              <ol className="space-y-2">
                {archetype.growthPath.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="font-display text-xs mt-0.5 flex-shrink-0"
                      style={{ color: archetype.primaryColor }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-arcanum-parchment/60 text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Relics */}
        <div className="card-arcane p-6 rounded-sm mb-8">
          <h2 className="font-display text-arcanum-gold text-xs tracking-[0.3em] uppercase mb-5">
            Relic Collection
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {RELICS.map((relic) => (
              <RelicPlaceholder
                key={relic.name}
                name={relic.name}
                symbol={relic.symbol}
                unlocked={(xp + level * xpToNextLevel) >= relic.unlockXP || relic.unlockXP === 0}
              />
            ))}
          </div>
        </div>

        {/* Premium CTA or Evolution paths */}
        {isPremium ? (
          <div className="card-arcane p-6 rounded-sm">
            <h2 className="font-display text-arcanum-gold text-xs tracking-[0.3em] uppercase mb-5">
              Evolution Paths
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {archetype.evolutionPaths.map((path, i) => (
                <div key={i} className="border border-arcanum-gold/10 rounded-sm p-5">
                  <h3 className="font-display text-arcanum-parchment/90 text-sm mb-2">{path.name}</h3>
                  <p className="font-serif text-arcanum-gold/50 text-xs mb-3 italic">{path.requirement}</p>
                  <p className="font-serif text-arcanum-parchment/60 text-sm leading-relaxed">{path.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="card-arcane p-8 rounded-sm text-center"
            style={{ borderColor: 'rgba(201,169,110,0.3)' }}
          >
            <span className="text-3xl mb-4 block" style={{ color: '#c9a96e' }}>✦</span>
            <h3 className="font-display text-arcanum-gold text-base tracking-wider uppercase mb-3">
              Arcanum Adept
            </h3>
            <p className="font-serif text-arcanum-parchment/60 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              Unlock evolution paths, premium rituals, unlimited Oracle readings, and the complete
              Forbidden Archive. The deeper work awaits.
            </p>
            <Link href="/oracle?upgrade=1" className="btn-primary px-10 py-3 text-sm rounded-sm">
              Unlock Adept Access — $9.99/mo
            </Link>
          </div>
        )}

        {/* Quick links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
          {[
            { href: '/rituals', label: 'Rituals', icon: '◈', desc: 'Begin a ritual' },
            { href: '/archive', label: 'Archive', icon: '𖤐', desc: 'Read the lore' },
            { href: '/oracle', label: 'Oracle', icon: '◯', desc: 'Ask a question' },
            { href: '/revelation', label: 'Archetype', icon: archetype.sigil, desc: 'View full profile' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="card-arcane p-4 rounded-sm text-center group">
              <span
                className="text-2xl block mb-2 transition-transform group-hover:scale-110"
                style={{ color: archetype.primaryColor }}
              >
                {item.icon}
              </span>
              <p className="font-display text-arcanum-parchment/80 text-xs tracking-wider uppercase">{item.label}</p>
              <p className="font-serif text-arcanum-parchment/30 text-xs mt-1">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
