'use client';

import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden background-optimized">
      {/* Optimized gradient background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-buttermilk via-soft-linen to-off-white" />
      
      {/* Large animated floating elements with enhanced animations */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-sentient-orange/20 rounded-full blur-3xl animate-optimized"
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-optimized"
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
          scale: [1, 0.8, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-optimized"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Enhanced floating particles with more animation */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-sentient-orange/50 rounded-full animate-optimized"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + i * 12}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
      
      {/* Additional smaller particles for depth */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`small-${i}`}
          className="absolute w-2 h-2 bg-blue-500/40 rounded-full animate-optimized"
          style={{
            left: `${25 + i * 18}%`,
            top: `${60 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, -15, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + i * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4 + 1,
          }}
        />
      ))}
      
      {/* Enhanced wave effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 w-full h-48 bg-gradient-to-t from-sentient-orange/15 to-transparent animate-optimized"
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scaleY: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Optimized radial gradient overlay */}
      <div className="absolute inset-0 w-full h-full bg-radial-gradient opacity-25" />
      
      {/* Subtle grid pattern for depth */}
      <div className="absolute inset-0 w-full h-full opacity-5">
        <div className="absolute inset-0 w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>
    </div>
  );
}; 