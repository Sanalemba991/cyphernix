import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Variants } from 'framer-motion';

// Animation variants
const containerVariants : Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3 // Increased stagger for more separation
    }
  }
};

const itemVariants : Variants ={
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const statVariants: Variants =  {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Counter component for stats
const AnimatedCounter = ({ number, label }: { number: string; label: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const [count, setCount] = React.useState(0);

  // Extract numeric value from string (remove + or %)
  const numericValue = parseInt(number.replace(/[^0-9]/g, ''));
  const isPercentage = number.includes('%');

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = numericValue / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, numericValue]);

  return (
    <motion.div
      ref={ref}
      variants={statVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="text-center"
    >
      <div className="text-4xl font-bold text-blue-700 mb-1">
        {isPercentage ? `${count}%` : `${count}+`}
      </div>
      <div className="text-gray-600 text-sm font-medium">
        {label}
      </div>
    </motion.div>
  );
};

// Interface for feature props
interface Feature {
  icon: string;
  title: string;
  description: string;
}

// Animated feature card component
const AnimatedFeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: index * 0.2 // Stagger based on index
      }}
      className="border border-gray-200 p-6 rounded-lg transition-all duration-200 hover:border-blue-500 hover:shadow-sm"
    >
      <div className="flex items-start mb-4">
        <motion.span 
          className="text-2xl mr-3"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {feature.icon}
        </motion.span>
        <h3 className="text-lg font-semibold text-gray-900">
          {feature.title}
        </h3>
      </div>
      <p className="text-gray-600 text-sm">
        {feature.description}
      </p>
    </motion.div>
  );
};

export default function AboutSection() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const features = [
    {
      icon: '💡',
      title: 'Innovative Solutions',
      description: 'We leverage cutting-edge technologies to build scalable solutions that drive digital transformation for businesses of all sizes.'
    },
    {
      icon: '🚀',
      title: 'Agile Development',
      description: 'Our agile methodology ensures rapid delivery, continuous improvement, and seamless collaboration throughout the project lifecycle.'
    },
    {
      icon: '🎯',
      title: 'Client-Centric Approach',
      description: 'We prioritize understanding your unique business needs to deliver customized solutions that exceed expectations.'
    },
    {
      icon: '🔒',
      title: 'Security First',
      description: 'Enterprise-grade security measures are built into every solution we create, ensuring your data and operations remain protected.'
    },
    {
      icon: '⚡',
      title: 'Fast Performance',
      description: 'Optimized code and modern architecture ensure lightning-fast performance and exceptional user experiences.'
    },
    {
      icon: '🤝',
      title: '24/7 Support',
      description: 'Our dedicated support team is always available to assist you, ensuring smooth operations and quick resolution of any issues.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '25+', label: 'Team Members' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Building Tomorrow's Technology Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We transform businesses through innovative technology solutions. Our team of experts creates digital experiences that drive growth and success.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <AnimatedFeatureCard 
              key={index} 
              feature={feature} 
              index={index} 
            />
          ))}
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-gray-200"
        >
          {stats.map((stat, index) => (
            <AnimatedCounter 
              key={index}
              number={stat.number} 
              label={stat.label} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}