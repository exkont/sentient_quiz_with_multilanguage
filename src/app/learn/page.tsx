'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { getLanguageFromStorage, setLanguageToStorage, getTranslationByKey } from '@/utils/localization';
import { Language } from '@/types';

export default function LearnPage() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const storedLanguage = getLanguageFromStorage();
    setLanguage(storedLanguage);
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setLanguageToStorage(newLanguage);
  };

  const topics = [
    {
      title: getTranslationByKey(language, 'learn.topics.architecture.title'),
      description: getTranslationByKey(language, 'learn.topics.architecture.description'),
      icon: '🏗️',
      href: 'https://docs.sentient.xyz/architecture',
      color: 'bg-sentient-orange'
    },
    {
      title: getTranslationByKey(language, 'learn.topics.aiPipeline.title'),
      description: getTranslationByKey(language, 'learn.topics.aiPipeline.description'),
      icon: '🤖',
      href: 'https://docs.sentient.xyz/ai_pipeline',
      color: 'bg-blue-500'
    },
    {
      title: getTranslationByKey(language, 'learn.topics.governance.title'),
      description: getTranslationByKey(language, 'learn.topics.governance.description'),
      icon: '⚖️',
      href: 'https://docs.sentient.xyz/blockchain/governance',
      color: 'bg-green-500'
    },
    {
      title: getTranslationByKey(language, 'learn.topics.ownership.title'),
      description: getTranslationByKey(language, 'learn.topics.ownership.description'),
      icon: '🔐',
      href: 'https://docs.sentient.xyz/blockchain/ownership',
      color: 'bg-purple-500'
    },
    {
      title: getTranslationByKey(language, 'learn.topics.defi.title'),
      description: getTranslationByKey(language, 'learn.topics.defi.description'),
      icon: '💰',
      href: 'https://docs.sentient.xyz/blockchain/defi',
      color: 'bg-yellow-500'
    },
    {
      title: getTranslationByKey(language, 'learn.topics.smartContracts.title'),
      description: getTranslationByKey(language, 'learn.topics.smartContracts.description'),
      icon: '📜',
      href: 'https://docs.sentient.xyz/blockchain/smartcontracts',
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <Navigation language={language} onLanguageChange={handleLanguageChange} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              {getTranslationByKey(language, 'learn.hero.title')}{' '}
              <span className="gradient-text">{getTranslationByKey(language, 'learn.hero.subtitle')}</span>
            </h1>
            <p className="text-xl text-dark-grey max-w-3xl mx-auto leading-relaxed">
              {getTranslationByKey(language, 'learn.hero.description')}
            </p>
          </motion.div>

          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <Image
                src="/dobby 1.png"
                alt="Dobby Learning"
                width={120}
                height={120}
                className="rounded-full animate-float"
              />
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-sentient-orange rounded-full animate-pulse-slow"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-16 px-6 bg-soft-linen/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              {getTranslationByKey(language, 'learn.topics.title')}
            </h2>
            <p className="text-lg text-dark-grey max-w-2xl mx-auto">
              {getTranslationByKey(language, 'learn.topics.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link href={topic.href} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="card cursor-pointer group"
                  >
                    <div className={`w-12 h-12 ${topic.color} rounded-xl flex items-center justify-center text-lg mb-4 group-hover:scale-110 transition-transform`}>
                      {topic.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-dark-grey mb-4">
                      {topic.description}
                    </p>
                    <div className="flex items-center text-sentient-orange font-semibold h-1">
                      {getTranslationByKey(language, 'learn.topics.learnMore')}
                      <svg
                        className="ml-2 w-1 h-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="card"
          >
            <h2 className="text-3xl font-bold text-black mb-4">
              {getTranslationByKey(language, 'learn.cta.title')}
            </h2>
            <p className="text-lg text-dark-grey mb-8">
              {getTranslationByKey(language, 'learn.cta.description')}
            </p>
            <Link href="/quiz">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                {getTranslationByKey(language, 'learn.cta.button')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 