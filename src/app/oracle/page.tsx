'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useArcanumStore } from '@/lib/store';
import { getArchetype } from '@/lib/archetypes';
import Navigation from '@/components/Navigation';
import ParticleField from '@/components/ParticleField';
import type { Archetype } from '@/types';

const ORACLE_PROMPTS = [
  'What am I not seeing about my current path?',
  'What is the hidden cost of my greatest strength?',
  'What truth am I avoiding?',
  'What does my shadow want me to understand?',
  'What am I becoming that I have not yet named?',
  'What has my past been preparing me for?',
  'What would I do if I trusted myself completely?',
];

export default function OraclePage() {
  const router = useRouter();
  const store = useArcanumStore();
  const [upgradeMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    return new URLSearchParams(window.location.search).get('upgrade') === '1';
  });
  const { archetypeId, isPremium, oracleHistory } = store;
  const [archetype, setArchetype] = useState<Archetype | null>(null);
  const [question, setQuestion] = useState('');
  const [reading, setReading] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(upgradeMode);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const freeReadingsLeft = Math.max(0, 3 - oracleHistory.length);

  useEffect(() => {
    if (!archetypeId) { router.push('/initiation'); return; }
    const a = getArchetype(archetypeId);
    if (a) setArchetype(a);
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, [archetypeId]);

  if (!archetype) return null;

  const canAsk = isPremium || freeReadingsLeft > 0;

  const handleAsk = async () => {
    if (!question.trim() || loading || !canAsk) return;
    setLoading(true);
    setReading('');
    setError('');

    try {
      const res = await fetch('/api/oracle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, archetypeId }),
      });

      if (!res.ok) throw new Error('The Oracle is silent. Please try again.');
      const data = await res.json();
      setReading(data.reading);
      store.addOracleReading(question, data.reading);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const handleStripeCheckout = async () => {
    setCheckoutLoading(true);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ archetypeId }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      setError('Checkout failed. Please try again.');
    } finally {
      setCheckoutLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-arcanum-void">
      <ParticleField />
      <Navigation />

      <div
        className="relative z-10 max-w-3xl mx-auto px-4 pt-24 pb-16 transition-all duration-800"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="w-20 h-20 mx-auto rounded-full border border-arcanum-silver/20 flex items-center justify-center mb-5 rune-circle"
            style={{ boxShadow: '0 0 40px rgba(139,157,195,0.15)' }}
          >
            <span
              className="text-3xl"
              style={{
                color: '#8b9dc3',
                textShadow: '0 0 20px rgba(139,157,195,0.8)',
                animation: 'runeGlow 4s ease-in-out infinite',
              }}
            >
              ◯
            </span>
          </div>
          <p className="font-display text-arcanum-silver/40 text-xs tracking-[0.4em] uppercase mb-2">
            Restricted Access
          </p>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-wide text-arcanum-parchment mb-3">
            The Oracle
          </h1>
          <p className="font-serif text-arcanum-parchment/50 text-sm italic">
            The Oracle reads through the lens of your archetype. It does not know what you want to hear.
          </p>
        </div>

        {/* Upgrade modal */}
        {showUpgrade && !isPremium && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-arcanum-void/95 backdrop-blur-md" onClick={() => setShowUpgrade(false)} />
            <div className="relative z-10 w-full max-w-md card-arcane p-5 sm:p-8 rounded-sm text-center border-arcanum-gold/40">
              <span className="text-4xl block mb-5" style={{ color: '#c9a96e' }}>✦</span>
              <h2 className="font-display text-arcanum-gold text-xl tracking-widest uppercase mb-3">
                Arcanum Adept
              </h2>
              <p className="font-serif text-arcanum-parchment/70 text-sm leading-relaxed mb-6">
                Unlock the full Archive. Unlimited Oracle readings. All premium rituals.
                Complete lore access. Evolution paths. Rare relics.
              </p>

              <div className="space-y-3 text-left mb-8">
                {[
                  'Unlimited AI Oracle readings',
                  'All 3 premium ritual rites per archetype',
                  'Full Forbidden Archive (sealed manuscripts)',
                  'Archetype evolution paths unlocked',
                  'Rare relic collection access',
                  'Monthly energy reports',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span className="text-arcanum-gold text-xs">✦</span>
                    <span className="font-serif text-arcanum-parchment/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleStripeCheckout}
                disabled={checkoutLoading}
                className="w-full btn-primary py-4 text-sm rounded-sm mb-3"
              >
                {checkoutLoading ? 'Preparing...' : 'Unlock Adept — $9.99/month'}
              </button>
              <p className="font-serif text-arcanum-parchment/30 text-xs">
                Cancel anytime. Billed monthly via Stripe.
              </p>
            </div>
          </div>
        )}

        {/* Oracle interface */}
        <div className="card-arcane p-4 sm:p-8 rounded-sm mb-8" style={{ borderColor: 'rgba(139,157,195,0.2)' }}>

          {!isPremium && (
            <div className="mb-6 flex items-center justify-between">
              <span className="font-display text-xs text-arcanum-parchment/40 tracking-wider uppercase">
                Free readings
              </span>
              <div className="flex gap-1.5">
                {[1,2,3].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: i <= freeReadingsLeft ? '#8b9dc3' : 'rgba(139,157,195,0.1)',
                      boxShadow: i <= freeReadingsLeft ? '0 0 6px rgba(139,157,195,0.5)' : 'none',
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Prompt suggestions */}
          <div className="mb-4">
            <p className="font-display text-xs text-arcanum-parchment/30 uppercase tracking-wider mb-3">
              Suggested queries
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {ORACLE_PROMPTS.slice(0, 3).map((p) => (
                <button
                  key={p}
                  onClick={() => setQuestion(p)}
                  className="font-serif text-xs text-arcanum-parchment/40 hover:text-arcanum-parchment/70 border border-white/5 hover:border-arcanum-silver/20 px-3 py-1.5 rounded-sm transition-all italic"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <textarea
            ref={textareaRef}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask the Oracle what the Archive knows about you..."
            disabled={!canAsk}
            className="oracle-input w-full p-4 rounded-sm h-28 mb-4"
            maxLength={500}
          />

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 sm:justify-between">
            <span className="font-serif text-xs text-arcanum-parchment/20">{question.length}/500</span>
            <button
              onClick={handleAsk}
              disabled={!question.trim() || loading || !canAsk}
              className={`btn-primary px-6 sm:px-8 py-3 text-xs rounded-sm sm:w-auto w-full ${
                !canAsk || !question.trim() ? 'opacity-40 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'The Oracle Speaks...' : 'Consult the Oracle'}
            </button>
          </div>

          {!canAsk && !isPremium && (
            <div className="mt-4 text-center">
              <p className="font-serif text-arcanum-parchment/40 text-sm italic mb-3">
                Free readings exhausted. Adept access restores the Oracle.
              </p>
              <button onClick={() => setShowUpgrade(true)} className="btn-secondary px-6 py-2 text-xs rounded-sm">
                Unlock Adept Access
              </button>
            </div>
          )}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="card-arcane p-8 rounded-sm mb-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 border border-arcanum-silver/20 border-t-arcanum-silver/60 rounded-full animate-spin" />
            <p className="font-display text-xs text-arcanum-silver/40 uppercase tracking-widest">
              The Oracle Reads...
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="card-arcane p-4 rounded-sm mb-8 border-arcanum-crimson/30">
            <p className="font-serif text-arcanum-crimson-bright text-sm">{error}</p>
          </div>
        )}

        {/* Reading result */}
        {reading && !loading && (
          <div className="card-arcane p-4 sm:p-8 rounded-sm mb-8" style={{ borderColor: 'rgba(139,157,195,0.25)' }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl" style={{ color: '#8b9dc3' }}>◯</span>
              <div>
                <p className="font-display text-xs text-arcanum-silver/60 tracking-wider uppercase">Oracle Reading</p>
                <p className="font-serif text-arcanum-parchment/40 text-xs italic mt-0.5">"{question}"</p>
              </div>
            </div>

            <div className="lore-text text-sm leading-relaxed whitespace-pre-wrap">
              {reading}
            </div>
          </div>
        )}

        {/* History */}
        {oracleHistory.length > 1 && (
          <div>
            <h2 className="font-display text-arcanum-gold/40 text-xs tracking-[0.3em] uppercase mb-5">
              Previous Readings
            </h2>
            <div className="space-y-4">
              {oracleHistory.slice(1, 5).map((h, i) => (
                <div key={i} className="card-arcane p-4 sm:p-5 rounded-sm opacity-70 hover:opacity-100 transition-opacity">
                  <p className="font-serif text-arcanum-parchment/40 text-xs italic mb-3">"{h.question}"</p>
                  <p className="font-serif text-arcanum-parchment/60 text-sm leading-relaxed line-clamp-3">
                    {h.reading}
                  </p>
                  <p className="font-display text-xs text-arcanum-parchment/20 mt-2 uppercase tracking-wider">
                    {new Date(h.timestamp).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
