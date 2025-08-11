'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { StartScreen } from '@/components/StartScreen';
import { QuestionCard } from '@/components/QuestionCard';
import { ResultScreen } from '@/components/ResultScreen';
import { useQuiz } from '@/hooks/useQuiz';
import { getLanguageFromStorage, setLanguageToStorage } from '@/utils/localization';
import { Language } from '@/types';

export default function QuizPage() {
  const [language, setLanguage] = useState<Language>('en');
  const {
    quizState,
    questions,
    loading,
    error,
    startQuiz,
    submitAnswer,
    restartQuiz,
    changeLanguage,
  } = useQuiz();

  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const storedLanguage = getLanguageFromStorage();
    setLanguage(storedLanguage);
  }, []);

  const handleAnswerSelect = async (answer: string) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    try {
      const response = await fetch('/api/check-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionIndex: quizState.currentQuestion,
          answer,
          language,
        }),
      });

      if (!response.ok) throw new Error('Failed to check answer');
      const result = await response.json();
      setIsCorrect(result.isCorrect);

      // Wait a bit to show the result, then move to next question
      setTimeout(() => {
        submitAnswer(answer);
        setSelectedAnswer('');
        setIsAnswered(false);
        setIsCorrect(false);
      }, 1500);
    } catch (err) {
      console.error('Error checking answer:', err);
    }
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setLanguageToStorage(newLanguage);
    changeLanguage(newLanguage);
  };

  if (loading) {
    return (
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="text-2xl font-bold text-black mb-4">Loading...</div>
            <div className="w-8 h-8 border-4 border-sentient-orange border-t-transparent rounded-full animate-spin mx-auto"></div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="text-2xl font-bold text-black mb-4">Error: {error}</div>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Try Again
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <Navigation language={language} onLanguageChange={handleLanguageChange} />
      
      <main className="pt-24 pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!quizState.isStarted && (
              <motion.div
                key="start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full"
              >
                <StartScreen onStart={startQuiz} language={language} />
              </motion.div>
            )}

            {quizState.isStarted && !quizState.isComplete && questions.length > 0 && (
              <motion.div
                key="question"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full"
              >
                <QuestionCard
                  question={questions[quizState.currentQuestion]}
                  questionIndex={quizState.currentQuestion}
                  totalQuestions={questions.length}
                  onAnswerSelect={handleAnswerSelect}
                  selectedAnswer={selectedAnswer}
                  isAnswered={isAnswered}
                  isCorrect={isCorrect}
                />
              </motion.div>
            )}

            {quizState.isComplete && (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full"
              >
                <ResultScreen
                  score={quizState.score}
                  totalQuestions={questions.length}
                  onRestart={restartQuiz}
                  language={language}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
} 