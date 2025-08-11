export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface QuizData {
  questions: Question[];
}

export type Language = 'en' | 'ru' | 'ua' | 'cn' | 'tr';

export interface QuizState {
  currentQuestion: number;
  score: number;
  answers: string[];
  isComplete: boolean;
  isStarted: boolean;
} 