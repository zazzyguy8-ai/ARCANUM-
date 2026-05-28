'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useArcanumStore } from '@/lib/store';

const NAV_ITEMS = [
  { href: '/sanctum', label: 'Sanctum' },
  { href: '/rituals', label: 'Rituals' },
  { href: '/archive', label: 'Archive' },
  { href: '/oracle', label: 'Oracle' },
];

export default function Navigation() {
  const pathname = usePathname();
  const { archetypeId, level, xp, xpToNextLevel, streakDays, isPremium } = useArcanumStore();

  if (!archetypeId) return null;

  const xpPercent = Math.round((xp / xpToNextLevel) * 100);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-arcanum-gold/10 bg-arcanum-void/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/sanctum" className="font-display text-arcanum-gold text-base font-bold tracking-widest hover:text-arcanum-gold-light transition-colors">
          ARCANUM
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right: stats + premium */}
        <div className="flex items-center gap-4">
          {streakDays > 0 && (
            <span className="hidden sm:flex items-center gap-1 text-xs font-display text-arcanum-ember-glow">
              <span className="streak-flame">◈</span>
              <span>{streakDays}</span>
            </span>
          )}

          <div className="hidden sm:flex items-center gap-2">
            <span className="font-display text-xs text-arcanum-gold/60 tracking-wider">LVL {level}</span>
            <div className="w-16 sm:w-20 h-1 xp-bar-track rounded-full">
              <div
                className="h-full xp-bar-fill rounded-full"
                style={{ width: `${xpPercent}%` }}
              />
            </div>
          </div>

          {isPremium && (
            <span className="premium-badge">Adept</span>
          )}
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden border-t border-arcanum-gold/10 flex">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex-1 py-3 text-center nav-link text-xs ${pathname === item.href ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
