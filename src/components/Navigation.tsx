'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageSelector } from './LanguageSelector';
import { Language } from '@/types';
import { getTranslationByKey } from '@/utils/localization';

interface NavigationProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export const Navigation = ({ language, onLanguageChange }: NavigationProps) => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: getTranslationByKey(language, 'navigation.home') },
    { href: '/quiz', label: getTranslationByKey(language, 'navigation.quiz') },
    { href: '/learn', label: getTranslationByKey(language, 'navigation.learn') },
    { href: '/resources', label: getTranslationByKey(language, 'navigation.resources') },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-xl border-b border-soft-linen/30 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and mascot */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4"
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/dobby 1.png"
                  alt="Dobby Mascot"
                  width={40}
                  height={40}
                  className="rounded-full group-hover:scale-110 transition-transform duration-300"
                />
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-sentient-orange rounded-full"
                />
              </div>
              <Image
                src="/Logo_black.png"
                alt="Sentient Protocol"
                width={120}
                height={30}
                className="hidden sm:block group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </motion.div>

          {/* Navigation items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
                  pathname === item.href
                    ? 'text-sentient-orange font-semibold'
                    : 'text-black hover:text-sentient-orange'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-sentient-orange rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Language selector and mobile menu */}
          <div className="flex items-center gap-4">
            <LanguageSelector
              currentLanguage={language}
              onLanguageChange={onLanguageChange}
            />
            
            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-3 rounded-xl bg-sentient-orange text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}; 