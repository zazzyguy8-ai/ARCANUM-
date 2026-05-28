import type { QuizQuestion, ArchetypeId } from '@/types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'What fear has followed you since childhood?',
    subtext: 'Do not choose what sounds strongest. Choose what is true.',
    options: [
      { text: 'Losing control of what I have built', scores: { 'storm-vessel': 2, 'ashborn-monarch': 1 } },
      { text: 'Being truly known — and rejected for it', scores: { 'shadow-scholar': 2, 'lunar-seer': 1 } },
      { text: 'Fading into irrelevance', scores: { 'ashborn-monarch': 2, 'crimson-saint': 1 } },
      { text: 'Feeling too much to survive it', scores: { 'lunar-seer': 2, 'crimson-saint': 1 } },
      { text: 'Losing myself entirely', scores: { 'void-oracle': 2, 'silent-alchemist': 1 } },
    ],
  },
  {
    id: 2,
    question: 'When you look into the dark, what calls to you?',
    subtext: 'Something pulls from the shadows. What is it?',
    options: [
      { text: 'Truths that daylight refuses to show', scores: { 'shadow-scholar': 2, 'void-oracle': 1 } },
      { text: 'The silence where thought disappears', scores: { 'silent-alchemist': 2, 'void-oracle': 1 } },
      { text: 'Visions of what has not yet happened', scores: { 'lunar-seer': 2, 'shadow-scholar': 1 } },
      { text: 'Raw, uncontrollable energy', scores: { 'storm-vessel': 2, 'ashborn-monarch': 1 } },
      { text: 'The feeling that I could be reborn here', scores: { 'ashborn-monarch': 2, 'crimson-saint': 1 } },
    ],
  },
  {
    id: 3,
    question: 'What emotion do you wield like a weapon?',
    subtext: 'There is one feeling that makes you dangerous.',
    options: [
      { text: 'Cold, analytical precision that cuts without warmth', scores: { 'shadow-scholar': 2, 'void-oracle': 1 } },
      { text: 'Empathy that dismantles people\'s defenses', scores: { 'crimson-saint': 2, 'lunar-seer': 1 } },
      { text: 'Electric rage that cannot be contained', scores: { 'storm-vessel': 2, 'ashborn-monarch': 1 } },
      { text: 'Haunting intuition that arrives before proof', scores: { 'lunar-seer': 2, 'shadow-scholar': 1 } },
      { text: 'Unbreakable will that outlasts everything', scores: { 'ashborn-monarch': 2, 'silent-alchemist': 1 } },
    ],
  },
  {
    id: 4,
    question: 'You stand at the ruins of something you once loved. What do you feel first?',
    subtext: 'Your first instinct in the wreckage reveals your nature.',
    options: [
      { text: 'The need to rebuild it stronger than it was', scores: { 'ashborn-monarch': 2, 'silent-alchemist': 1 } },
      { text: 'The truth hidden in why it collapsed', scores: { 'shadow-scholar': 2, 'void-oracle': 1 } },
      { text: 'The full weight of everything it held', scores: { 'lunar-seer': 2, 'crimson-saint': 1 } },
      { text: 'The raw material for something new', scores: { 'silent-alchemist': 2, 'storm-vessel': 1 } },
      { text: 'A strange relief at its dissolution', scores: { 'void-oracle': 2, 'shadow-scholar': 1 } },
    ],
  },
  {
    id: 5,
    question: 'Which element does your soul recognize as its own?',
    subtext: 'Not what you prefer. What you are made of.',
    options: [
      { text: 'Fire that refuses to die, even in ash', scores: { 'ashborn-monarch': 2, 'storm-vessel': 1 } },
      { text: 'Water that remembers everything it has touched', scores: { 'lunar-seer': 2, 'crimson-saint': 1 } },
      { text: 'Lightning that cannot be directed, only witnessed', scores: { 'storm-vessel': 2, 'void-oracle': 1 } },
      { text: 'Earth that outlasts all storms without moving', scores: { 'silent-alchemist': 2, 'ashborn-monarch': 1 } },
      { text: 'Void where all elements dissolve into their source', scores: { 'void-oracle': 2, 'shadow-scholar': 1 } },
    ],
  },
  {
    id: 6,
    question: 'If you could possess one power, what would it be?',
    subtext: 'Choose without virtue. Choose what you actually want.',
    options: [
      { text: 'To see through every lie ever told', scores: { 'shadow-scholar': 2, 'void-oracle': 1 } },
      { text: 'To feel the true emotion beneath every surface', scores: { 'lunar-seer': 2, 'crimson-saint': 1 } },
      { text: 'To survive anything and rise from it altered', scores: { 'ashborn-monarch': 2, 'storm-vessel': 1 } },
      { text: 'To turn any wound into power', scores: { 'crimson-saint': 2, 'silent-alchemist': 1 } },
      { text: 'To exist beyond all categories and definitions', scores: { 'void-oracle': 2, 'shadow-scholar': 1 } },
    ],
  },
  {
    id: 7,
    question: 'What do you understand about time that others seem to miss?',
    subtext: 'Your relationship with time is not ordinary.',
    options: [
      { text: 'That everything is already pattern — past and future included', scores: { 'shadow-scholar': 2, 'void-oracle': 1 } },
      { text: 'That time is water — cycles, tides, returns', scores: { 'lunar-seer': 2, 'silent-alchemist': 1 } },
      { text: 'That the only thing that matters is the current intensity', scores: { 'storm-vessel': 2, 'ashborn-monarch': 1 } },
      { text: 'That it outlasts everything — so there is no need to rush', scores: { 'silent-alchemist': 2, 'void-oracle': 1 } },
      { text: 'That it is an illusion I have largely seen through', scores: { 'void-oracle': 2, 'shadow-scholar': 1 } },
    ],
  },
  {
    id: 8,
    question: 'What do your enemies secretly respect about you?',
    subtext: 'Even those against you recognize something.',
    options: [
      { text: 'That you saw through them before they finished their first sentence', scores: { 'shadow-scholar': 2, 'lunar-seer': 1 } },
      { text: 'That you cannot be destroyed', scores: { 'ashborn-monarch': 2, 'storm-vessel': 1 } },
      { text: 'That your capacity to love is more frightening than your rage', scores: { 'crimson-saint': 2, 'lunar-seer': 1 } },
      { text: 'That your patience makes them obsolete', scores: { 'silent-alchemist': 2, 'ashborn-monarch': 1 } },
      { text: 'That nothing reaches you', scores: { 'void-oracle': 2, 'shadow-scholar': 1 } },
    ],
  },
  {
    id: 9,
    question: 'Which symbol resonates most deeply when you look at it?',
    subtext: 'Trust the pull, not the explanation.',
    options: [
      { text: 'An eye that never closes, watching from shadow', scores: { 'shadow-scholar': 2, 'void-oracle': 1 } },
      { text: 'A crescent moon over water that holds reflections of other worlds', scores: { 'lunar-seer': 2, 'crimson-saint': 1 } },
      { text: 'A phoenix mid-transformation — neither bird nor flame', scores: { 'ashborn-monarch': 2, 'storm-vessel': 1 } },
      { text: 'A serpent consuming itself — the eternal cycle', scores: { 'silent-alchemist': 2, 'void-oracle': 1 } },
      { text: 'A dark star — the gravity of a thing that no longer burns', scores: { 'void-oracle': 2, 'shadow-scholar': 1 } },
    ],
  },
  {
    id: 10,
    question: 'How do you move through loss?',
    subtext: 'Not how you wish you moved. How you actually move.',
    options: [
      { text: 'I retreat until I understand what happened completely', scores: { 'shadow-scholar': 2, 'void-oracle': 1 } },
      { text: 'I rebuild immediately, refusing to remain in the wreckage', scores: { 'ashborn-monarch': 2, 'storm-vessel': 1 } },
      { text: 'I feel it completely, like a tide that must run its course', scores: { 'lunar-seer': 2, 'crimson-saint': 1 } },
      { text: 'I transform it slowly, until it becomes something else entirely', scores: { 'silent-alchemist': 2, 'ashborn-monarch': 1 } },
      { text: 'I observe it from a distance that confuses others', scores: { 'void-oracle': 2, 'shadow-scholar': 1 } },
    ],
  },
  {
    id: 11,
    question: 'What role do others cast you in, without being asked?',
    subtext: 'Others always recognize something real in us.',
    options: [
      { text: 'The one who knows things they shouldn\'t', scores: { 'shadow-scholar': 2, 'lunar-seer': 1 } },
      { text: 'The one who cannot be moved or broken', scores: { 'ashborn-monarch': 2, 'silent-alchemist': 1 } },
      { text: 'The one who feels everything and carries it', scores: { 'crimson-saint': 2, 'lunar-seer': 1 } },
      { text: 'The one who changes everything by entering the room', scores: { 'storm-vessel': 2, 'ashborn-monarch': 1 } },
      { text: 'The one who seems to need nothing', scores: { 'void-oracle': 2, 'silent-alchemist': 1 } },
    ],
  },
  {
    id: 12,
    question: 'What truth about yourself do you rarely speak aloud?',
    subtext: 'The archive holds what you have never told anyone.',
    options: [
      { text: 'That I understand far more than I reveal', scores: { 'shadow-scholar': 2, 'void-oracle': 1 } },
      { text: 'That I have survived things that should have ended me', scores: { 'ashborn-monarch': 2, 'crimson-saint': 1 } },
      { text: 'That I feel the world more intensely than anyone around me knows', scores: { 'lunar-seer': 2, 'storm-vessel': 1 } },
      { text: 'That I am in the middle of becoming something else entirely', scores: { 'silent-alchemist': 2, 'void-oracle': 1 } },
      { text: 'That I have already released most of what others cling to', scores: { 'void-oracle': 2, 'lunar-seer': 1 } },
    ],
  },
];

export function calculateArchetype(
  scores: Partial<Record<ArchetypeId, number>>
): { primary: ArchetypeId; secondary: ArchetypeId | null; allScores: Record<ArchetypeId, number> } {
  const allArchetypes: ArchetypeId[] = [
    'shadow-scholar',
    'lunar-seer',
    'ashborn-monarch',
    'silent-alchemist',
    'storm-vessel',
    'void-oracle',
    'crimson-saint',
  ];

  const fullScores = allArchetypes.reduce(
    (acc, id) => ({ ...acc, [id]: scores[id] ?? 0 }),
    {} as Record<ArchetypeId, number>
  );

  const sorted = allArchetypes.sort((a, b) => fullScores[b] - fullScores[a]);

  return {
    primary: sorted[0],
    secondary: fullScores[sorted[1]] > 3 ? sorted[1] : null,
    allScores: fullScores,
  };
}

export const QUIZ_META = {
  totalQuestions: QUIZ_QUESTIONS.length,
  title: 'The Initiation',
  subtitle: 'The Archive will now read you.',
  completionMessage: 'Your essence has been catalogued.',
};
