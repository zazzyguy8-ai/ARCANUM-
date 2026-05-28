'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { ArchetypeId, UserProgress } from '@/types';
import { calculateArchetype } from './quiz';
import { getTitleForLevel } from './archetypes';

interface QuizState {
  answers: Partial<Record<ArchetypeId, number>>;
  currentQuestion: number;
  isComplete: boolean;
}

interface ArcanumStore extends UserProgress {
  quiz: QuizState;
  oracleHistory: Array<{ question: string; reading: string; timestamp: string }>;

  // Quiz actions
  addQuizScore: (scores: Partial<Record<ArchetypeId, number>>) => void;
  nextQuestion: () => void;
  completeQuiz: () => void;
  resetQuiz: () => void;

  // Progression actions
  addXP: (amount: number) => void;
  completeRitual: (ritualId: string) => void;
  unlockRelic: (relicId: string) => void;
  unlockLore: (loreId: string) => void;
  setPremium: (value: boolean) => void;
  checkStreak: () => void;

  // Oracle
  addOracleReading: (question: string, reading: string) => void;

  // Reset
  resetAll: () => void;
}

const XP_PER_LEVEL = 500;

const initialProgress: UserProgress = {
  archetypeId: null,
  level: 1,
  xp: 0,
  xpToNextLevel: XP_PER_LEVEL,
  title: 'Uninitiated',
  completedRituals: [],
  streakDays: 0,
  lastActiveDate: '',
  unlockedRelics: [],
  unlockedLore: [],
  isPremium: false,
  initiationDate: '',
  quizScores: {},
};

export const useArcanumStore = create<ArcanumStore>()(
  persist(
    (set, get) => ({
      ...initialProgress,
      quiz: {
        answers: {},
        currentQuestion: 0,
        isComplete: false,
      },
      oracleHistory: [],

      addQuizScore: (scores) => {
        set((state) => {
          const merged = { ...state.quiz.answers };
          for (const [id, pts] of Object.entries(scores)) {
            const key = id as ArchetypeId;
            merged[key] = (merged[key] ?? 0) + (pts as number);
          }
          return { quiz: { ...state.quiz, answers: merged } };
        });
      },

      nextQuestion: () => {
        set((state) => ({
          quiz: {
            ...state.quiz,
            currentQuestion: state.quiz.currentQuestion + 1,
          },
        }));
      },

      completeQuiz: () => {
        const { quiz } = get();
        const { primary, allScores } = calculateArchetype(quiz.answers);
        const title = getTitleForLevel(primary, 1);

        set({
          archetypeId: primary,
          quizScores: allScores,
          title,
          initiationDate: new Date().toISOString(),
          quiz: { ...quiz, isComplete: true },
        });
      },

      resetQuiz: () => {
        set({
          quiz: { answers: {}, currentQuestion: 0, isComplete: false },
        });
      },

      addXP: (amount) => {
        set((state) => {
          let { xp, level, xpToNextLevel } = state;
          xp += amount;

          while (xp >= xpToNextLevel) {
            xp -= xpToNextLevel;
            level += 1;
            xpToNextLevel = XP_PER_LEVEL + level * 100;
          }

          const title = state.archetypeId
            ? getTitleForLevel(state.archetypeId, level)
            : state.title;

          return { xp, level, xpToNextLevel, title };
        });
      },

      completeRitual: (ritualId) => {
        set((state) => {
          if (state.completedRituals.includes(ritualId)) return state;
          const today = new Date().toDateString();
          const lastDate = state.lastActiveDate;
          const yesterday = new Date(Date.now() - 86400000).toDateString();

          let streak = state.streakDays;
          if (lastDate === today) {
            // same day, no streak increment
          } else if (lastDate === yesterday) {
            streak += 1;
          } else {
            streak = 1;
          }

          return {
            completedRituals: [...state.completedRituals, ritualId],
            lastActiveDate: today,
            streakDays: streak,
          };
        });
        get().addXP(75);
      },

      unlockRelic: (relicId) => {
        set((state) => ({
          unlockedRelics: state.unlockedRelics.includes(relicId)
            ? state.unlockedRelics
            : [...state.unlockedRelics, relicId],
        }));
      },

      unlockLore: (loreId) => {
        set((state) => ({
          unlockedLore: state.unlockedLore.includes(loreId)
            ? state.unlockedLore
            : [...state.unlockedLore, loreId],
        }));
      },

      setPremium: (value) => set({ isPremium: value }),

      checkStreak: () => {
        const { lastActiveDate, streakDays } = get();
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        if (lastActiveDate !== today && lastActiveDate !== yesterday && streakDays > 0) {
          set({ streakDays: 0 });
        }
      },

      addOracleReading: (question, reading) => {
        set((state) => ({
          oracleHistory: [
            { question, reading, timestamp: new Date().toISOString() },
            ...state.oracleHistory.slice(0, 9),
          ],
        }));
        get().addXP(50);
      },

      resetAll: () => {
        set({
          ...initialProgress,
          quiz: { answers: {}, currentQuestion: 0, isComplete: false },
          oracleHistory: [],
        });
      },
    }),
    {
      name: 'arcanum-state',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
