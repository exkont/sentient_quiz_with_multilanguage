'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Check } from 'lucide-react';
import Image from 'next/image';
import { Language } from '@/types';
import { getTranslationByKey, setLanguageToStorage } from '@/utils/localization';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ua', name: 'Українська', flag: '🇺🇦' },
  { code: 'cn', name: '中文', flag: '🇨🇳' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
];

export const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLanguageChange = (language: Language) => {
    onLanguageChange(language);
    setLanguageToStorage(language);
    setIsOpen(false);
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-3 bg-white/90 backdrop-blur-md border border-soft-linen/50 rounded-2xl text-black hover:bg-white/95 hover:border-sentient-orange/30 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
      >
        {/* Hidden dogs that appear on hover */}
        <AnimatePresence>
          {isHovered && (
            <>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute -left-2 -bottom-1"
              >
                <Image
                  src="/dobby 1.png"
                  alt="Dobby"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </motion.div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="absolute -right-2 -bottom-1"
              >
                <Image
                  src="/dobby 2.png"
                  alt="Dobby"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-sentient-orange/10 rounded-lg">
            <Globe size={16} className="text-sentient-orange" />
          </div>
          <span className="text-sm font-semibold text-black">{getTranslationByKey(currentLanguage, 'language')}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">{currentLang?.flag}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={14} className="text-dark-grey" />
          </motion.div>
        </div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-3 right-0 bg-white/95 backdrop-blur-md border border-soft-linen/50 rounded-2xl shadow-2xl overflow-hidden z-50 min-w-[200px]"
          >
            {languages.map((lang, index) => (
              <motion.button
                key={lang.code}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ backgroundColor: 'rgba(239, 77, 50, 0.08)' }}
                onClick={() => handleLanguageChange(lang.code)}
                className={`flex items-center gap-3 px-4 py-3.5 text-sm text-black w-full text-left transition-all duration-200 ${
                  currentLanguage === lang.code 
                    ? 'bg-sentient-orange/10 text-sentient-orange font-semibold' 
                    : 'hover:bg-soft-linen/30'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="flex-1 font-medium">{lang.name}</span>
                {currentLanguage === lang.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-5 h-5 bg-sentient-orange rounded-full flex items-center justify-center"
                  >
                    <Check size={12} className="text-white" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 