'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { getLanguageFromStorage, setLanguageToStorage, getTranslationByKey } from '@/utils/localization';
import { Language } from '@/types';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const storedLanguage = getLanguageFromStorage();
    setLanguage(storedLanguage);
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setLanguageToStorage(newLanguage);
  };

  const features = [
    {
      icon: '🧠',
      title: getTranslationByKey(language, 'home.features.learnArchitecture.title'),
      description: getTranslationByKey(language, 'home.features.learnArchitecture.description'),
      href: '/learn'
    },
    {
      icon: '🎯',
      title: getTranslationByKey(language, 'home.features.takeQuiz.title'),
      description: getTranslationByKey(language, 'home.features.takeQuiz.description'),
      href: '/quiz'
    },
    {
      icon: '📚',
      title: getTranslationByKey(language, 'home.features.resources.title'),
      description: getTranslationByKey(language, 'home.features.resources.description'),
      href: '/resources'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <Navigation language={language} onLanguageChange={handleLanguageChange} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6">
                {getTranslationByKey(language, 'home.hero.title')}{' '}
                <span className="gradient-text">{getTranslationByKey(language, 'home.hero.subtitle')}</span>
              </h1>
              <p className="text-xl text-dark-grey mb-8 leading-relaxed">
                {getTranslationByKey(language, 'home.hero.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/quiz">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    {getTranslationByKey(language, 'home.hero.startQuiz')}
                  </motion.button>
                </Link>
                <Link href="/learn">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary"
                  >
                    {getTranslationByKey(language, 'home.hero.learnMore')}
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Mascot and Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="/dobby 2.png"
                  alt="Dobby Mascot"
                  width={400}
                  height={400}
                  className="mx-auto animate-float"
                />
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-10 right-10 w-8 h-8 bg-sentient-orange rounded-full animate-pulse-slow"
                />
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-20 left-10 w-6 h-6 bg-sentient-orange rounded-full animate-pulse-slow"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-soft-linen/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              {getTranslationByKey(language, 'home.features.title')}
            </h2>
            <p className="text-lg text-dark-grey max-w-2xl mx-auto">
              {getTranslationByKey(language, 'home.features.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Link href={feature.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="card cursor-pointer"
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-black mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-dark-grey">
                      {feature.description}
                    </p>
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
              {getTranslationByKey(language, 'home.cta.title')}
            </h2>
            <p className="text-lg text-dark-grey mb-8">
              {getTranslationByKey(language, 'home.cta.description')}
            </p>
            <Link href="/quiz">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                {getTranslationByKey(language, 'home.cta.button')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
