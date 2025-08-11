import { Question, Language } from '@/types';

// Import questions from JSON files
import enQuestionsData from '../../quiz/en.json';
import ruQuestionsData from '../../quiz/ru.json';
import uaQuestionsData from '../../quiz/ua.json';
import cnQuestionsData from '../../quiz/cn.json';
import trQuestionsData from '../../quiz/tr.json';

const questionsMap: Record<Language, Question[]> = {
  en: enQuestionsData,
  ru: ruQuestionsData,
  ua: uaQuestionsData,
  cn: cnQuestionsData,
  tr: trQuestionsData,
};

export const getQuestions = (language: Language): Question[] => {
  return questionsMap[language] || questionsMap.en;
};

export const checkAnswer = (language: Language, questionIndex: number, answer: string): boolean => {
  const questions = getQuestions(language);
  
  if (questionIndex < 0 || questionIndex >= questions.length) {
    return false;
  }
  
  const question = questions[questionIndex];
  return question.answer === answer;
}; 