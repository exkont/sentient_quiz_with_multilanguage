'use client';

import { motion } from 'framer-motion';
import { Trophy, RefreshCw } from 'lucide-react';
import { getTranslationByKey } from '@/utils/localization';
import { Language } from '@/types';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  language: Language;
}

export const ResultScreen = ({ score, totalQuestions, onRestart, language }: ResultScreenProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPerfect = percentage === 100;
  const isGood = percentage >= 80;
  const isAverage = percentage >= 60;

  const getMessage = () => {
    if (isPerfect) return '🎉 Perfect! You know everything about Sentient Protocol!';
    if (isGood) return '🌟 Great job! You have excellent knowledge!';
    if (isAverage) return '👍 Good work! You have solid understanding!';
    return '📚 Keep learning! Review the material and try again!';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-2xl mx-auto text-center"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="card mb-6"
      >
        {/* Trophy icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className={`p-4 rounded-full ${
            isPerfect ? 'bg-yellow-500/20' : 
            isGood ? 'bg-blue-500/20' : 
            isAverage ? 'bg-green-500/20' : 'bg-red-500/20'
          }`}>
            <Trophy 
              size={48} 
              className={
                isPerfect ? 'text-yellow-600' : 
                isGood ? 'text-blue-600' : 
                isAverage ? 'text-green-600' : 'text-red-600'
              } 
            />
          </div>
        </motion.div>

        {/* Congratulations */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-black mb-4"
        >
          {getTranslationByKey(language, 'congratulations')}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-dark-grey mb-6"
        >
          {getTranslationByKey(language, 'quizComplete')}
        </motion.p>

        {/* Score */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <div className="text-6xl font-bold text-black mb-2">
            {score}/{totalQuestions}
          </div>
          <div className="text-xl text-dark-grey">
            {percentage}%
          </div>
        </motion.div>

        {/* Message */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-black mb-8"
        >
          {getMessage()}
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
            className="btn-primary flex items-center gap-2"
          >
            <RefreshCw size={20} />
            {getTranslationByKey(language, 'restart')}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}; 