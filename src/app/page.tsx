'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useArcanumStore } from '@/lib/store';
import ParticleField from '@/components/ParticleField';

const GLYPHS = ['𖤐', '⊗', '☽', '◯', '⊕', '⚡', '✦', '𓂀'];

function GlyphRing({ size, speed, glyphs }: { size: number; speed: number; glyphs: string[] }) {
  return (
    <div
      className="absolute rounded-full border border-arcanum-gold/10"
      style={{
        width: size,
        height: size,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        animation: `spin ${speed}s linear infinite`,
      }}
    >
      {glyphs.map((g, i) => {
        const angle = (i / glyphs.length) * 360;
        const rad = (angle * Math.PI) / 180;
        const r = size / 2;
        const x = r + r * Math.cos(rad) - 10;
        const y = r + r * Math.sin(rad) - 10;
        return (
          <span
            key={i}
            className="absolute text-arcanum-gold/20 text-sm font-display"
            style={{ left: x, top: y, transform: `rotate(${angle + 90}deg)` }}
          >
            {g}
          </span>
        );
      })}
    </div>
  );
}

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [started, text]);

  return <span>{displayed}<span className="animate-pulse opacity-70">|</span></span>;
}

export default function LandingPage() {
  const [phase, setPhase] = useState(0);
  const { archetypeId } = useArcanumStore();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => setPhase(4), 4500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen bg-arcanum-void flex flex-col items-center justify-center overflow-hidden"
    >
      <ParticleField />

      {/* Ambient fog orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-96 h-96 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #2a0a3e 0%, transparent 70%)',
            top: '10%',
            left: '5%',
            animation: 'orbFloat 15s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #1a1a2e 0%, transparent 70%)',
            bottom: '15%',
            right: '10%',
            animation: 'orbFloat 20s ease-in-out infinite reverse',
          }}
        />
      </div>

      {/* Central sigil system */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">

        {/* Rotating rune rings */}
        <div
          className="relative mb-16"
          style={{
            width: 220,
            height: 220,
            opacity: phase >= 1 ? 1 : 0,
            transition: 'opacity 1.5s ease',
          }}
        >
          <GlyphRing size={220} speed={40} glyphs={GLYPHS.slice(0, 4)} />
          <GlyphRing size={160} speed={25} glyphs={GLYPHS.slice(4)} />
          <GlyphRing size={100} speed={15} glyphs={['⊗', '◯']} />

          {/* Central eye */}
          <div
            className="absolute inset-0 flex items-center justify-center"
          >
            <span
              className="text-5xl"
              style={{
                color: '#c9a96e',
                textShadow: '0 0 30px rgba(201,169,110,0.8), 0 0 60px rgba(201,169,110,0.4)',
                filter: 'drop-shadow(0 0 20px rgba(201,169,110,0.6))',
                animation: 'runeGlow 3s ease-in-out infinite',
              }}
            >
              𖤐
            </span>
          </div>
        </div>

        {/* ARCANUM title */}
        <div
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease',
          }}
        >
          <h1
            className="font-display font-black tracking-[0.4em] text-5xl sm:text-7xl md:text-8xl mb-3"
            style={{
              background: 'linear-gradient(135deg, #7c6c4a 0%, #c9a96e 30%, #e8c97a 50%, #c9a96e 70%, #7c6c4a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none',
            }}
          >
            ARCANUM
          </h1>

          <div className="divider-rune my-4">
            <span>The Archive of Hidden Selves</span>
          </div>
        </div>

        {/* Tagline */}
        <div
          className="mt-6 max-w-lg"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease',
          }}
        >
          <p className="font-serif text-arcanum-parchment/70 text-lg sm:text-xl leading-relaxed italic mb-2">
            "The Archive has catalogued over ten thousand hidden selves.
          </p>
          <p className="font-serif text-arcanum-parchment/70 text-lg sm:text-xl leading-relaxed italic mb-8">
            It has been waiting to find yours."
          </p>

          <p className="font-serif text-arcanum-parchment/50 text-sm leading-relaxed mb-10 max-w-md mx-auto">
            A system of self-discovery built on Jungian psychology, mythological archetypes,
            and the oldest traditions of inner knowing. Not what you present.
            What you actually are.
          </p>
        </div>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease',
          }}
        >
          {archetypeId ? (
            <>
              <Link
                href="/sanctum"
                className="btn-primary px-10 py-4 text-sm rounded-sm"
              >
                Return to Sanctum
              </Link>
              <Link
                href="/initiation"
                className="btn-secondary px-8 py-4 text-sm rounded-sm"
              >
                Retake Initiation
              </Link>
            </>
          ) : (
            <Link
              href="/initiation"
              className="btn-primary px-12 py-5 text-sm rounded-sm group relative"
            >
              Begin the Initiation
            </Link>
          )}
        </div>

        {/* Scroll hint */}
        <div
          className="mt-16 flex flex-col items-center gap-2"
          style={{
            opacity: phase >= 4 ? 0.4 : 0,
            transition: 'opacity 1s ease',
          }}
        >
          <div className="w-px h-8 bg-gradient-to-b from-arcanum-gold/50 to-transparent animate-pulse" />
          <span className="font-display text-[10px] tracking-[0.3em] text-arcanum-gold/40 uppercase">Scroll</span>
        </div>
      </div>

      {/* Features section */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-24">
        <div className="divider-rune mb-16">
          <span>The Archive Contains</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              sigil: '𖤐',
              title: 'Archetype Revelation',
              desc: 'The Initiation reads your psychological essence and reveals your hidden archetype — one of seven rare classifications, each with complete lore, abilities, and progression.',
            },
            {
              sigil: '◯',
              title: 'Sacred Ritual System',
              desc: 'Daily rituals designed for your specific archetype. Grounded in genuine psychological practice, framed in the language of ancient mystical traditions.',
            },
            {
              sigil: '✦',
              title: 'The Oracle',
              desc: 'An AI consciousness trained on the Archive\'s knowledge. Ask your deepest questions and receive readings that account for your archetype\'s specific nature.',
            },
          ].map((f) => (
            <div key={f.title} className="card-arcane p-8 rounded-sm text-center">
              <div className="text-4xl mb-4" style={{ color: '#c9a96e', textShadow: '0 0 20px rgba(201,169,110,0.5)' }}>
                {f.sigil}
              </div>
              <h3 className="font-display text-arcanum-gold text-sm tracking-wider uppercase mb-3">{f.title}</h3>
              <p className="font-serif text-arcanum-parchment/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-serif text-arcanum-parchment/30 text-xs tracking-widest uppercase">
            The Archive does not make claims of supernatural ability. It offers a mirror.
            What you see in it is entirely your own.
          </p>
        </div>
      </section>
    </main>
  );
}
