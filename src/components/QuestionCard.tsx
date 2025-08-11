'use client';

import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { Question } from '@/types';

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswerSelect: (answer: string) => void;
  selectedAnswer?: string;
  isAnswered?: boolean;
  isCorrect?: boolean;
}

export const QuestionCard = ({
  question,
  questionIndex,
  totalQuestions,
  onAnswerSelect,
  selectedAnswer,
  isAnswered,
  isCorrect,
}: QuestionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-dark-grey mb-2">
          <span>Question {questionIndex + 1} of {totalQuestions}</span>
          <span>{Math.round(((questionIndex + 1) / totalQuestions) * 100)}%</span>
        </div>
        <div className="w-full bg-soft-linen rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
            className="h-2 bg-sentient-orange rounded-full"
          />
        </div>
      </div>

      {/* Question */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card mb-6"
      >
        <h2 className="text-xl font-semibold text-black mb-6 leading-relaxed">
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-4">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrectAnswer = isAnswered && option === question.answer;
            
            return (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => !isAnswered && onAnswerSelect(option)}
                disabled={isAnswered}
                className={`w-full p-4 text-left rounded-xl border transition-all duration-200 ${
                  isSelected
                    ? isCorrect
                      ? 'bg-green-500/20 border-green-500 text-green-800'
                      : 'bg-red-500/20 border-red-500 text-red-800'
                    : isCorrectAnswer
                    ? 'bg-green-500/20 border-green-500 text-green-800'
                    : 'bg-white border-soft-linen text-black hover:bg-soft-linen hover:border-sentient-orange'
                } ${isAnswered ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{option}</span>
                  {isAnswered && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      {isSelected && isCorrect && <CheckCircle className="text-green-600" size={20} />}
                      {isSelected && !isCorrect && <XCircle className="text-red-600" size={20} />}
                      {isCorrectAnswer && !isSelected && <CheckCircle className="text-green-600" size={20} />}
                    </motion.div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}; 