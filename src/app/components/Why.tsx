"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Why = () => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Animation variants for staggered entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with fade-in animation */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/homepage/Why.jpg')`,
            filter: 'brightness(0.8)'
          }}
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 "></div>
      </motion.div>

      {/* Text Content with staggered animation */}
      <motion.div
        className="relative px-8 py-8 max-w-2xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white tracking-tight"
            variants={itemVariants}
          >
            Why Our Clients ♥
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white font-light italic"
            variants={itemVariants}
          >
            Because we do what we commit, in time with high quality.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Why;