'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useArcanumStore } from '@/lib/store';
import { LORE_ENTRIES, LORE_CATEGORY_LABELS } from '@/lib/lore';
import Navigation from '@/components/Navigation';
import ParticleField from '@/components/ParticleField';
import type { LoreEntry } from '@/types';

function LoreModal({ entry, onClose }: { entry: LoreEntry; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-arcanum-void/95 backdrop-blur-md" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="card-arcane p-8 rounded-sm">
          <div className="mb-6">
            <div
              className="inline-block px-2 py-0.5 mb-3 text-xs font-display tracking-wider uppercase rounded-sm border border-arcanum-gold/20 text-arcanum-gold/60"
            >
              {LORE_CATEGORY_LABELS[entry.category]}
            </div>
            <h2 className="font-display text-arcanum-parchment text-xl tracking-wide mb-2">{entry.title}</h2>
            <p className="font-serif text-arcanum-gold/60 text-sm italic mb-1">{entry.subtitle}</p>
            <p className="font-serif text-arcanum-parchment/30 text-xs">— {entry.author}</p>
          </div>

          <div className="divider-rune mb-6" />

          <div className="lore-text text-sm leading-relaxed whitespace-pre-line">
            {entry.content.split('\n\n').map((para, i) => (
              <p
                key={i}
                className="mb-4 last:mb-0"
                dangerouslySetInnerHTML={{
                  __html: para
                    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*([^*]+)\*/g, '<em>$1</em>'),
                }}
              />
            ))}
          </div>
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

export default function ArchivePage() {
  const router = useRouter();
  const { archetypeId, isPremium } = useArcanumStore();
  const [selected, setSelected] = useState<LoreEntry | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!archetypeId) { router.push('/initiation'); return; }
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, [archetypeId]);

  const categories = ['all', ...Object.keys(LORE_CATEGORY_LABELS)];

  const filtered = activeCategory === 'all'
    ? LORE_ENTRIES
    : LORE_ENTRIES.filter((e) => e.category === activeCategory);

  return (
    <main className="relative min-h-screen bg-arcanum-void">
      <ParticleField />
      <Navigation />

      {selected && (
        <LoreModal
          entry={selected}
          onClose={() => setSelected(null)}
        />
      )}

      <div
        className="relative z-10 max-w-5xl mx-auto px-4 pt-24 pb-16 transition-all duration-800"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="text-4xl block mb-4"
            style={{
              color: '#c9a96e',
              textShadow: '0 0 30px rgba(201,169,110,0.5)',
            }}
          >
            𖤐
          </span>
          <p className="font-display text-arcanum-gold/40 text-xs tracking-[0.4em] uppercase mb-2">
            Restricted Access
          </p>
          <h1 className="font-display text-3xl sm:text-4xl tracking-wide text-arcanum-parchment mb-3">
            The Forbidden Archive
          </h1>
          <p className="font-serif text-arcanum-parchment/50 text-sm italic max-w-lg mx-auto">
            Texts, theories, and manuscripts drawn from the oldest layers of the Archive.
            Some are sealed. All are true.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-display text-xs tracking-wider uppercase px-4 py-2 rounded-sm border transition-all ${
                activeCategory === cat
                  ? 'border-arcanum-gold/60 text-arcanum-gold bg-arcanum-gold/10'
                  : 'border-white/10 text-arcanum-parchment/40 hover:border-arcanum-gold/30'
              }`}
            >
              {cat === 'all' ? 'All Texts' : LORE_CATEGORY_LABELS[cat] || cat}
            </button>
          ))}
        </div>

        {/* Lore grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((entry) => {
            const locked = entry.isPremium && !isPremium;
            return (
              <div
                key={entry.id}
                className={`card-arcane p-6 rounded-sm cursor-pointer group transition-all ${
                  locked ? 'opacity-50' : ''
                }`}
                onClick={() => !locked && setSelected(entry)}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-display text-xs text-arcanum-gold/40 uppercase tracking-wider">
                    {LORE_CATEGORY_LABELS[entry.category]}
                  </span>
                  {locked && <span className="premium-badge">Sealed</span>}
                </div>

                <h3 className="font-display text-arcanum-parchment/90 text-sm tracking-wide mb-2 group-hover:text-arcanum-parchment transition-colors leading-snug">
                  {entry.title}
                </h3>
                <p className="font-serif text-arcanum-gold/50 text-xs italic mb-3 leading-relaxed">
                  {entry.subtitle}
                </p>
                <p className="font-serif text-arcanum-parchment/40 text-xs leading-relaxed line-clamp-3">
                  {locked ? 'This manuscript has been sealed. Adept access required to view contents.' : entry.content.slice(0, 140) + '...'}
                </p>

                <p className="font-serif text-arcanum-parchment/25 text-xs mt-4 italic">
                  — {entry.author}
                </p>
              </div>
            );
          })}
        </div>

        {!isPremium && (
          <div className="mt-12 card-arcane p-8 rounded-sm text-center">
            <span className="text-3xl block mb-4" style={{ color: '#c9a96e' }}>𖤐</span>
            <h3 className="font-display text-arcanum-gold text-base tracking-wider uppercase mb-3">
              Sealed Manuscripts
            </h3>
            <p className="font-serif text-arcanum-parchment/60 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              Several manuscripts in the Archive are sealed to initiates. Adept access reveals the
              complete collection, including the Forbidden Knowledge texts and the Hidden Manuscripts series.
            </p>
            <a href="/oracle?upgrade=1" className="btn-secondary px-10 py-3 text-sm rounded-sm inline-block">
              Unlock the Full Archive
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
