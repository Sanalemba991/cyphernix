import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';

// Stat item component
interface StatProps {
  count: string;
  description: string;
  index: number;
}

const StatsGrid = ({ count, description, index }: StatProps) => {
  const ref = useRef(null);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: false, amount: 0.5 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  const opacity = useTransform(smoothProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [0, 0.25, 0.75, 1], [100, 0, 0, -100]);
  const scale = useTransform(smoothProgress, [0, 0.25, 0.75, 1], [0.7, 1, 1, 0.7]);
  const rotate = useTransform(smoothProgress, [0, 0.25, 0.75, 1], [8, 0, 0, -8]);

  // Extract number from count string (e.g., "200+" -> 200, "99.9%" -> 99.9)
  const numericValue = parseFloat(count.replace(/[^0-9.]/g, ''));
  const suffix = count.replace(/[0-9.]/g, '');
  
  // Check if the original count contains a decimal point for proper formatting
  const hasDecimal = count.includes('.');
  
  // Animated counter
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => {
    if (hasDecimal) {
      return latest.toFixed(1);
    }
    return Math.round(latest).toString();
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, numericValue, {
        duration: 2,
        ease: "easeOut"
      });
      return controls.stop;
    } else {
      motionValue.set(0);
    }
  }, [isInView, numericValue, motionValue]);

  // Individual character animation for the count
  const { scrollYProgress: countProgress } = useScroll({
    target: countRef,
    offset: ["start end", "end start"]
  });

  const smoothCountProgress = useSpring(countProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  const countY = useTransform(smoothCountProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);
  const countRotate = useTransform(smoothCountProgress, [0, 0.3, 0.7, 1], [15, 0, 0, -15]);
  const countScale = useTransform(smoothCountProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);
  const countOpacity = useTransform(smoothCountProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.li 
      ref={ref}
      className="-m-0.5 flex flex-col p-4 sm:p-8 relative"
      style={{ opacity, y, scale, rotate }}
    >
      <motion.div 
        ref={countRef}
        className="mb-2 flex items-end gap-x-2 text-3xl font-bold text-neutral-800 sm:text-5xl"
        style={{
          y: countY,
          rotate: countRotate,
          scale: countScale,
          opacity: countOpacity
        }}
      >
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <motion.p 
        className="text-sm text-neutral-600 sm:text-base"
        style={{
          opacity: useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
          y: useTransform(smoothProgress, [0, 0.3, 0.7, 1], [30, 0, 0, -30])
        }}
      >
        {description}
      </motion.p>
    </motion.li>
  );
};

// Main AboutSection component
export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const statsContainerRef = useRef(null);

  // Scroll progress for the entire section
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothSectionProgress = useSpring(sectionProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Add white body background
  useEffect(() => {
    document.body.style.backgroundColor = 'white';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  // Title animations
  const { scrollYProgress: titleProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"]
  });

  const smoothTitleProgress = useSpring(titleProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001
  });

  const titleOpacity = useTransform(smoothTitleProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const titleY = useTransform(smoothTitleProgress, [0, 0.2, 0.8, 1], [120, 0, 0, -120]);
  const titleScale = useTransform(smoothTitleProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.85]);
  const titleRotate = useTransform(smoothTitleProgress, [0, 0.2, 0.8, 1], [-5, 0, 0, 5]);

  // Subtitle animations
  const { scrollYProgress: subtitleProgress } = useScroll({
    target: subtitleRef,
    offset: ["start end", "end start"]
  });

  const smoothSubtitleProgress = useSpring(subtitleProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001
  });

  const subtitleOpacity = useTransform(smoothSubtitleProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const subtitleY = useTransform(smoothSubtitleProgress, [0, 0.3, 0.7, 1], [80, 0, 0, -80]);
  const subtitleX = useTransform(smoothSubtitleProgress, [0, 0.3, 0.7, 1], [-40, 0, 0, 40]);

  // Stats container animation
  const { scrollYProgress: statsProgress } = useScroll({
    target: statsContainerRef,
    offset: ["start end", "end start"]
  });

  const smoothStatsProgress = useSpring(statsProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001
  });

  const statsScale = useTransform(smoothStatsProgress, [0, 0.25, 0.75, 1], [0.9, 1, 1, 0.9]);
  const statsRotate = useTransform(smoothStatsProgress, [0, 0.25, 0.75, 1], [3, 0, 0, -3]);

  // Section background opacity and blur
  const bgOpacity = useTransform(smoothSectionProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3]);
  const bgScale = useTransform(smoothSectionProgress, [0, 0.15, 0.85, 1], [0.95, 1, 1, 0.95]);

  // Updated data for Cyphernix IT Company
  const aboutData = {
    Abouttitle: "Know About <span class='text-blue-600'>Cyphernix</span>",
    AboutsubTitle: "Cyphernix is a premier IT solutions provider specializing in cybersecurity, cloud infrastructure, and digital innovation. As an emerging leader in the technology sector, we deliver enterprise-grade solutions that empower businesses to thrive in the digital age. Our expertise spans secure network architecture, data protection, and scalable cloud services, all designed to future-proof your organization while maintaining the highest security standards.",
    AboutprimaryBtn: "Learn More",
    AboutprimaryBtnURL: "/about",
    statistics: [
      {
        count: "200+",
        description: "Successful IT projects delivered to enterprises and growing businesses across multiple industries.",
      },
      {
        count: "99.9%",
        description: "Uptime maintained for client infrastructure with our robust cloud and security solutions.",
      },
      {
        count: "40%",
        description: "Average reduction in security incidents for clients after implementing our cybersecurity framework.",
      },
      {
        count: "2.5x",
        description: "Faster deployment cycles achieved through our automated DevOps and cloud orchestration services.",
      },
    ]
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="mx-auto grid max-w-full gap-4 px-4 py-14 md:py-20 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 bg-white min-h-screen relative overflow-hidden"
      style={{ opacity: bgOpacity, scale: bgScale }}
    >

      {/* Stats Section with crossable dividers */}
      <motion.div 
        ref={statsContainerRef}
        className="flex w-full relative z-10"
        style={{ scale: statsScale, rotate: statsRotate }}
      >
        {aboutData.statistics && (
          <div className="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0 w-full">
            <div className="space-y-6 sm:space-y-8">
              <ul className="grid grid-cols-2 divide-x-2 divide-y-2 divide-neutral-300 overflow-hidden rounded-lg ">
                {aboutData.statistics.map((stat, index) => (
                  <StatsGrid 
                    key={index}
                    count={stat.count}
                    description={stat.description}
                    index={index}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </motion.div>

      {/* Content Section */}
      <div className="relative z-10">
        <div className="col-span-full h-5/2 pb-12 md:pt-5 pt-8 w-full rounded-xl sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full">
          <motion.h2 
            ref={titleRef}
            className="block text-balance text-3xl px-5 font-bold tracking-tight text-neutral-800 sm:text-4xl lg:text-6xl lg:leading-tight"
            dangerouslySetInnerHTML={{ __html: aboutData.Abouttitle }}
            style={{ 
              opacity: titleOpacity, 
              y: titleY, 
              scale: titleScale,
              rotate: titleRotate
            }}
          />
          
          {aboutData.AboutsubTitle && (
            <motion.p 
              ref={subtitleRef}
              className="mt-5 text-pretty text-base px-5 leading-relaxed text-neutral-700 w-11/12"
              style={{ 
                opacity: subtitleOpacity, 
                y: subtitleY,
                x: subtitleX
              }}
            >
              {aboutData.AboutsubTitle}
            </motion.p>
          )}
        </div>
      </div>
    </motion.section>
  );
}