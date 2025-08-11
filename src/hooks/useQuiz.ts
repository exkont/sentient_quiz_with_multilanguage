'use client';

import { useState, useEffect } from 'react';
import { Question, QuizState, Language } from '@/types';
import { getLanguageFromStorage } from '@/utils/localization';

export const useQuiz = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    answers: [],
    isComplete: false,
    isStarted: false,
  });
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [language, setLanguage] = useState<Language>('en');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedLanguage = getLanguageFromStorage();
    setLanguage(storedLanguage);
    loadQuestions(storedLanguage);
  }, []);

  const loadQuestions = async (lang: Language) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/questions?language=${lang}`);
      if (!response.ok) throw new Error('Failed to load questions');
      
      const data = await response.json();
      setQuestions(data.questions);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load questions');
    } finally {
      setLoading(false);
    }
  };

  const startQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      isComplete: false,
      isStarted: true,
    });
  };

  const submitAnswer = async (answer: string) => {
    if (quizState.isComplete) return;

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
      const newScore = result.isCorrect ? quizState.score + 1 : quizState.score;
      const newAnswers = [...quizState.answers, answer];
      const isLastQuestion = quizState.currentQuestion === questions.length - 1;

      setQuizState(prev => ({
        ...prev,
        score: newScore,
        answers: newAnswers,
        currentQuestion: isLastQuestion ? prev.currentQuestion : prev.currentQuestion + 1,
        isComplete: isLastQuestion,
      }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit answer');
    }
  };

  const restartQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      isComplete: false,
      isStarted: false,
    });
    setError(null);
  };

  const changeLanguage = async (newLanguage: Language) => {
    setLanguage(newLanguage);
    await loadQuestions(newLanguage);
    restartQuiz();
  };

  return {
    quizState,
    questions,
    language,
    loading,
    error,
    startQuiz,
    submitAnswer,
    restartQuiz,
    changeLanguage,
  };
}; 