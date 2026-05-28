export type ArchetypeId =
  | 'shadow-scholar'
  | 'lunar-seer'
  | 'ashborn-monarch'
  | 'silent-alchemist'
  | 'storm-vessel'
  | 'void-oracle'
  | 'crimson-saint';

export interface Ability {
  name: string;
  description: string;
  tier: 'primary' | 'secondary' | 'latent';
}

export interface EvolutionPath {
  name: string;
  requirement: string;
  description: string;
}

export interface Archetype {
  id: ArchetypeId;
  name: string;
  class: string;
  element: string;
  elementSymbol: string;
  rarity: string;
  rarityColor: string;
  primaryColor: string;
  secondaryColor: string;
  glowColor: string;
  sigil: string;
  quote: string;
  lore: string;
  abilities: Ability[];
  weaknesses: string[];
  strengths: string[];
  emotionalProfile: string;
  mentalTendencies: string[];
  spiritualAlignment: string;
  latentPowers: string[];
  rareTraits: string[];
  ritualDomain: string;
  growthPath: string[];
  evolutionPaths: EvolutionPath[];
  forbiddenKnowledge: string;
}

export interface QuizOption {
  text: string;
  scores: Partial<Record<ArchetypeId, number>>;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtext?: string;
  options: QuizOption[];
}

export interface Ritual {
  id: string;
  archetypeId: ArchetypeId;
  name: string;
  domain: 'discipline' | 'confidence' | 'emotional' | 'focus' | 'creativity' | 'reflection' | 'ambition' | 'calmness';
  description: string;
  lore: string;
  duration: number;
  steps: string[];
  symbolicFocus: string;
  xpReward: number;
  isPremium: boolean;
}

export interface LoreEntry {
  id: string;
  category: 'forbidden-archive' | 'elemental-theory' | 'ancient-order' | 'philosophical-text' | 'hidden-manuscript';
  title: string;
  subtitle: string;
  content: string;
  author: string;
  isPremium: boolean;
  relatedArchetype?: ArchetypeId;
}

export interface UserProgress {
  archetypeId: ArchetypeId | null;
  level: number;
  xp: number;
  xpToNextLevel: number;
  title: string;
  completedRituals: string[];
  streakDays: number;
  lastActiveDate: string;
  unlockedRelics: string[];
  unlockedLore: string[];
  isPremium: boolean;
  initiationDate: string;
  quizScores: Partial<Record<ArchetypeId, number>>;
}

export interface Relic {
  id: string;
  name: string;
  description: string;
  lore: string;
  unlockCondition: string;
  unlockXP: number;
  rarity: string;
  symbol: string;
}

export interface OracleReading {
  question: string;
  reading: string;
  timestamp: string;
}
