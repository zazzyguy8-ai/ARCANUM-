'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useArcanumStore } from '@/lib/store';
import { QUIZ_QUESTIONS } from '@/lib/quiz';
import ParticleField from '@/components/ParticleField';
import type { ArchetypeId } from '@/types';

function ProgressRunes({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="transition-all duration-500"
          style={{
            width: i < current ? 20 : 8,
            height: 2,
            background:
              i < current
                ? 'linear-gradient(90deg, #7c6c4a, #c9a96e)'
                : 'rgba(201,169,110,0.2)',
            borderRadius: 1,
            boxShadow: i < current ? '0 0 6px rgba(201,169,110,0.5)' : 'none',
          }}
        />
      ))}
    </div>
  );
}

export default function InitiationPage() {
  const router = useRouter();
  const { quiz, addQuizScore, nextQuestion, completeQuiz, resetQuiz } = useArcanumStore();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'analyzing'>('intro');

  const currentQ = QUIZ_QUESTIONS[quiz.currentQuestion];
  const isLastQuestion = quiz.currentQuestion === QUIZ_QUESTIONS.length - 1;

  useEffect(() => {
    resetQuiz();
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleBegin = () => {
    setVisible(false);
    setTimeout(() => {
      setPhase('quiz');
      setVisible(true);
    }, 600);
  };

  const handleSelect = async (optionIndex: number) => {
    if (transitioning || selectedOption !== null) return;

    setSelectedOption(optionIndex);
    const option = currentQ.options[optionIndex];
    addQuizScore(option.scores as Partial<Record<ArchetypeId, number>>);

    await new Promise((r) => setTimeout(r, 600));
    setTransitioning(true);
    setVisible(false);

    await new Promise((r) => setTimeout(r, 400));

    if (isLastQuestion) {
      setPhase('analyzing');
      setVisible(true);
      completeQuiz();
      setTimeout(() => router.push('/revelation'), 3500);
    } else {
      nextQuestion();
      setSelectedOption(null);
      setTransitioning(false);
      setVisible(true);
    }
  };

  return (
    <main className="relative min-h-screen bg-arcanum-void flex flex-col items-center justify-center overflow-hidden px-4">
      <ParticleField />

      {/* Ambient bg */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(30,10,46,0.2) 0%, transparent 70%)',
        }}
      />

      <div
        className="relative z-10 w-full max-w-2xl transition-all duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        {phase === 'intro' && (
          <div className="text-center">
            <div className="mb-8">
              <span
                className="text-4xl sm:text-6xl block mb-6"
                style={{
                  color: '#c9a96e',
                  textShadow: '0 0 40px rgba(201,169,110,0.6)',
                  animation: 'runeGlow 3s ease-in-out infinite',
                }}
              >
                𖤐
              </span>
              <h1 className="font-display text-arcanum-gold text-2xl sm:text-3xl md:text-4xl tracking-widest mb-4 uppercase">
                The Initiation
              </h1>
              <div className="divider-rune mb-6">
                <span>The Archive will now read you</span>
              </div>
            </div>

            <div className="card-arcane p-5 sm:p-8 rounded-sm text-left mb-8">
              <p className="font-serif text-arcanum-parchment/80 text-base leading-relaxed mb-4">
                What follows is not a test of knowledge. It is not a performance.
              </p>
              <p className="font-serif text-arcanum-parchment/80 text-base leading-relaxed mb-4">
                The Archive reads through the choices you make when asked questions that have no
                correct answer — only honest ones and dishonest ones.
              </p>
              <p className="font-serif text-arcanum-parchment/60 text-sm leading-relaxed italic">
                Answer as you are, not as you wish you were. The Archive has no use for
                the version of yourself you perform for others.
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 text-arcanum-parchment/40 text-xs sm:text-sm font-serif">
              <span>12 questions</span>
              <span className="text-arcanum-gold/30">◈</span>
              <span>~5 minutes</span>
              <span className="text-arcanum-gold/30">◈</span>
              <span>Irreversible</span>
            </div>

            <button onClick={handleBegin} className="btn-primary px-8 sm:px-12 py-3 sm:py-4 text-sm rounded-sm">
              Enter the Archive
            </button>
          </div>
        )}

        {phase === 'quiz' && currentQ && (
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <ProgressRunes current={quiz.currentQuestion} total={QUIZ_QUESTIONS.length} />
              <span className="font-display text-arcanum-gold/40 text-xs tracking-widest">
                {quiz.currentQuestion + 1} / {QUIZ_QUESTIONS.length}
              </span>
            </div>

            {/* Question */}
            <div className="mb-10">
              <p className="font-display text-arcanum-gold/30 text-xs tracking-[0.3em] uppercase mb-3">
                Query {quiz.currentQuestion + 1}
              </p>
              <h2 className="font-display text-arcanum-parchment text-lg sm:text-xl md:text-2xl leading-snug mb-3 tracking-wide">
                {currentQ.question}
              </h2>
              {currentQ.subtext && (
                <p className="font-serif text-arcanum-parchment/40 text-sm italic">
                  {currentQ.subtext}
                </p>
              )}
            </div>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={selectedOption !== null}
                  className={`quiz-option w-full text-left px-4 sm:px-6 py-4 sm:py-5 rounded-sm ${
                    selectedOption === i ? 'selected' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="font-display text-xs mt-1 flex-shrink-0 transition-colors duration-300"
                      style={{
                        color: selectedOption === i ? '#c9a96e' : 'rgba(201,169,110,0.3)',
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span
                      className="font-serif text-base leading-relaxed transition-colors duration-300"
                      style={{
                        color: selectedOption === i
                          ? 'rgba(232,213,183,0.95)'
                          : 'rgba(232,213,183,0.7)',
                      }}
                    >
                      {opt.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {phase === 'analyzing' && (
          <div className="text-center">
            <div className="mb-10">
              <div
                className="w-20 h-20 mx-auto mb-8 border border-arcanum-gold/30 rounded-full flex items-center justify-center"
                style={{ animation: 'spin 3s linear infinite' }}
              >
                <span className="text-2xl" style={{ color: '#c9a96e', animation: 'spin 3s linear infinite reverse' }}>
                  𖤐
                </span>
              </div>

              <h2 className="font-display text-arcanum-gold text-2xl tracking-widest uppercase mb-4">
                Analyzing Essence
              </h2>
              <p className="font-serif text-arcanum-parchment/50 text-base italic">
                The Archive is reading your patterns.
              </p>
              <p className="font-serif text-arcanum-parchment/30 text-sm italic mt-2">
                Do not close this window.
              </p>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {['Shadow', 'Fire', 'Tide', 'Storm', 'Void', 'Earth', 'Blood'].map((word, i) => (
                <span
                  key={word}
                  className="font-display text-xs text-arcanum-gold/20 tracking-wider uppercase"
                  style={{
                    animation: `pulse 2s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
