import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
export default function MobilitySystemSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const features = [
    {
      number: "01",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="20" cy="40" r="8" />
          <rect x="24" y="20" width="16" height="12" rx="1" />
          <rect x="28" y="14" width="8" height="6" rx="1" />
          <path d="M28 32 L28 40 M36 32 L36 40" />
          <circle cx="32" cy="46" r="2" fill="currentColor" />
        </svg>
      ),
      title: "Enterprise Digital Transformation",
      description: "Comprehensive IT strategy and implementation to modernize your business operations and drive digital innovation.",
      testimonial: {
        text: "Cyphernix transformed our legacy systems into a modern, scalable infrastructure that increased our operational efficiency by 65%.",
        author: "Sarah Chen",
        position: "CTO, Global Financial Services"
      }
    },
    {
      number: "02",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="16" y="16" width="32" height="24" rx="2" />
          <circle cx="26" cy="28" r="6" />
          <path d="M32 28 L38 22 M38 22 L44 28" />
          <rect x="20" y="44" width="8" height="4" rx="1" />
          <rect x="36" y="44" width="8" height="4" rx="1" />
        </svg>
      ),
      title: "Cloud Infrastructure & Solutions",
      description: "End-to-end cloud migration, management, and optimization services across AWS, Azure, and Google Cloud platforms.",
      testimonial: {
        text: "Their cloud architecture reduced our infrastructure costs by 40% while improving system reliability and scalability.",
        author: "Michael Rodriguez",
        position: "IT Director, Enterprise Retail Corp"
      }
    },
    {
      number: "03",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="24" cy="40" r="8" />
          <circle cx="44" cy="40" r="8" />
          <rect x="20" y="20" width="24" height="12" rx="1" />
          <circle cx="32" cy="26" r="4" />
          <path d="M28 26 L28 22 M36 26 L36 22 M28 30 L28 32 M36 30 L36 32" strokeWidth="1" />
        </svg>
      ),
      title: "Cybersecurity & Data Protection",
      description: "Advanced security frameworks and compliance solutions to protect your digital assets and ensure regulatory adherence.",
      testimonial: {
        text: "Cyphernix's cybersecurity implementation helped us achieve SOC 2 compliance while preventing potential security breaches.",
        author: "Dr. James Wilson",
        position: "CISO, Healthcare Technology Group"
      }
    }
  ];

  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants:Variants = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const testimonialVariants:Variants  = {
    hidden: { 
      opacity: 0,
      x: -100 
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contentVariants:Variants  = {
    hidden: { 
      opacity: 0,
      x: 100 
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              variants={itemVariants}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Testimonial Side */}
              <motion.div
                variants={testimonialVariants}
                className="lg:w-1/2 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-start mb-6">
                  <div className="bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold shadow-lg mr-4">
                    {feature.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                    "{feature.testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{feature.testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{feature.testimonial.position}</p>
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                variants={contentVariants}
                className="lg:w-1/2 flex flex-col items-center text-center"
              >
                <div className="text-blue-500 mb-8">
                  {feature.icon}
                </div>
                <div className="bg-gradient-to-r from-gray-100/80 to-gray-200 text-gray-900 rounded-2xl p-8 shadow-xl">
                  <h4 className="text-xl font-semibold mb-4">
                    Our Approach
                  </h4>
                  <p className="text-gray-800 leading-relaxed">
                    {index === 0 && "We leverage agile methodologies and industry best practices to deliver scalable digital solutions that drive business growth and operational excellence."}
                    {index === 1 && "Our cloud experts design future-proof architectures that optimize performance, reduce costs, and enable seamless business scalability."}
                    {index === 2 && "Proactive security monitoring and advanced threat protection ensure your business remains compliant and protected against evolving cyber threats."}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Stats */}
       
      </div>
    </section>
  );
}