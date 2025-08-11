'use client';

import { motion } from 'framer-motion';
import { Play, Brain, Zap, Target } from 'lucide-react';
import { getTranslationByKey } from '@/utils/localization';
import { Language } from '@/types';

interface StartScreenProps {
  onStart: () => void;
  language: Language;
}

export const StartScreen = ({ onStart, language }: StartScreenProps) => {
  const features = [
    {
      icon: Brain,
      title: getTranslationByKey(language, 'quiz.features.testKnowledge.title'),
      description: getTranslationByKey(language, 'quiz.features.testKnowledge.description')
    },
    {
      icon: Zap,
      title: getTranslationByKey(language, 'quiz.features.instantFeedback.title'),
      description: getTranslationByKey(language, 'quiz.features.instantFeedback.description')
    },
    {
      icon: Target,
      title: getTranslationByKey(language, 'quiz.features.trackProgress.title'),
      description: getTranslationByKey(language, 'quiz.features.trackProgress.description')
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-4xl mx-auto text-center"
    >
      {/* Hero section */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
          <span className="gradient-text">{getTranslationByKey(language, 'title')}</span>
        </h1>
        <p className="text-xl text-dark-grey max-w-2xl mx-auto leading-relaxed">
          {getTranslationByKey(language, 'quiz.features.testKnowledge.description')}
        </p>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-3 gap-6 mb-12"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="card"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-sentient-orange rounded-xl">
                <feature.icon size={24} className="text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
            <p className="text-dark-grey text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Start button */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="btn-primary text-lg px-8 py-4 flex items-center gap-3 mx-auto"
        >
          <Play size={24} />
          {getTranslationByKey(language, 'start')}
        </motion.button>
      </motion.div>

      {/* Additional info */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-dark-grey mt-8 text-sm"
      >
        {getTranslationByKey(language, 'quiz.info')}
      </motion.p>
    </motion.div>
  );
}; 