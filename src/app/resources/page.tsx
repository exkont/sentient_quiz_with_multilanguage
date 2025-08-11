'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { getLanguageFromStorage, setLanguageToStorage, getTranslationByKey } from '@/utils/localization';
import { Language } from '@/types';

export default function ResourcesPage() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const storedLanguage = getLanguageFromStorage();
    setLanguage(storedLanguage);
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setLanguageToStorage(newLanguage);
  };

  const resources = [
    {
      title: getTranslationByKey(language, 'resources.resources.officialDocs.title'),
      description: getTranslationByKey(language, 'resources.resources.officialDocs.description'),
      url: 'https://docs.sentient.xyz/',
      category: getTranslationByKey(language, 'resources.categories.documentation'),
      icon: '📚'
    },
    {
      title: getTranslationByKey(language, 'resources.resources.architecture.title'),
      description: getTranslationByKey(language, 'resources.resources.architecture.description'),
      url: 'https://docs.sentient.xyz/architecture',
      category: getTranslationByKey(language, 'resources.categories.technical'),
      icon: '🏗️'
    },
    {
      title: getTranslationByKey(language, 'resources.resources.aiPipeline.title'),
      description: getTranslationByKey(language, 'resources.resources.aiPipeline.description'),
      url: 'https://docs.sentient.xyz/ai_pipeline',
      category: getTranslationByKey(language, 'resources.categories.technical'),
      icon: '🤖'
    },
    {
      title: getTranslationByKey(language, 'resources.resources.governance.title'),
      description: getTranslationByKey(language, 'resources.resources.governance.description'),
      url: 'https://docs.sentient.xyz/blockchain/governance',
      category: getTranslationByKey(language, 'resources.categories.governance'),
      icon: '⚖️'
    },
    {
      title: getTranslationByKey(language, 'resources.resources.ownership.title'),
      description: getTranslationByKey(language, 'resources.resources.ownership.description'),
      url: 'https://docs.sentient.xyz/blockchain/ownership',
      category: getTranslationByKey(language, 'resources.categories.technical'),
      icon: '🔐'
    },
    {
      title: getTranslationByKey(language, 'resources.resources.defi.title'),
      description: getTranslationByKey(language, 'resources.resources.defi.description'),
      url: 'https://docs.sentient.xyz/blockchain/defi',
      category: getTranslationByKey(language, 'resources.categories.defi'),
      icon: '💰'
    },
    {
      title: getTranslationByKey(language, 'resources.resources.smartContracts.title'),
      description: getTranslationByKey(language, 'resources.resources.smartContracts.description'),
      url: 'https://docs.sentient.xyz/blockchain/smartcontracts',
      category: getTranslationByKey(language, 'resources.categories.technical'),
      icon: '📜'
    }
  ];

  const categories = [
    getTranslationByKey(language, 'resources.categories.all'),
    getTranslationByKey(language, 'resources.categories.documentation'),
    getTranslationByKey(language, 'resources.categories.technical'),
    getTranslationByKey(language, 'resources.categories.governance'),
    getTranslationByKey(language, 'resources.categories.defi')
  ];
  const [selectedCategory, setSelectedCategory] = useState(getTranslationByKey(language, 'resources.categories.all'));

  const filteredResources = selectedCategory === getTranslationByKey(language, 'resources.categories.all')
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

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
              {getTranslationByKey(language, 'resources.hero.title')}{' '}
              <span className="gradient-text">{getTranslationByKey(language, 'resources.hero.subtitle')}</span>
            </h1>
            <p className="text-xl text-dark-grey max-w-3xl mx-auto leading-relaxed">
              {getTranslationByKey(language, 'resources.hero.description')}
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
                src="/dobby 2.png"
                alt="Dobby Resources"
                width={120}
                height={120}
                className="rounded-full animate-float"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-sentient-orange rounded-full animate-pulse-slow"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-soft-linen/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-sentient-orange text-white'
                    : 'bg-white text-black hover:bg-soft-linen'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="card cursor-pointer group h-full"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl">{resource.icon}</div>
                      <span className="text-xs font-semibold text-sentient-orange bg-orange-100 px-3 py-1 rounded-full">
                        {resource.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-dark-grey mb-4 flex-grow">
                      {resource.description}
                    </p>
                    <div className="flex items-center text-sentient-orange font-semibold h-1">
                      {getTranslationByKey(language, 'resources.resources.visitResource')}
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
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
      <section className="py-16 px-6 bg-soft-linen/50 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="card"
          >
            <h2 className="text-3xl font-bold text-black mb-4">
              {getTranslationByKey(language, 'resources.cta.title')}
            </h2>
            <p className="text-lg text-dark-grey mb-8">
              {getTranslationByKey(language, 'resources.cta.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/learn">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4"
                >
                  {getTranslationByKey(language, 'resources.cta.startLearning')}
                </motion.button>
              </Link>
              <Link href="/quiz">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  {getTranslationByKey(language, 'resources.cta.takeQuiz')}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 