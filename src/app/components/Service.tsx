import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Variants } from 'framer-motion';
import Last from  "../../../public/Ama.jpg"
// Animation variants
const containerVariants : Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants : Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Component for animated header section
function AnimatedHeader() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1 
        variants={itemVariants}
        className="text-white text-5xl md:text-6xl font-bold mb-6"
      >
        Our Services
      </motion.h1>
      <motion.p 
        variants={itemVariants}
        className="text-white text-lg md:text-xl max-w-3xl leading-relaxed opacity-95"
      >
        We will give you a competitive advantage by helping you create web and
        mobile solutions. Our innovative development team works on the latest
        technology and employs best practices in software.
      </motion.p>
    </motion.div>
  );
}

// Types for service card props
interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    link: string;
  };
  index: number;
}

// Component for animated service cards
function AnimatedServiceCard({ service, index }: ServiceCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ delay: index * 0.2 }}
      className="relative group"
    >
      {/* Card - lifts on hover and shows stronger shadow */}
      <div className="relative bg-white shadow-xl p-8 transition-transform duration-300  group-hover:shadow-2xl">
        <h2 className="text-[#2b4a8f] text-3xl font-bold mb-4">
          {service.title}
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          {service.description}
        </p>
        <a
          href={service.link}
          className="text-red-500 font-medium hover:text-red-600 transition-colors inline-flex items-center"
        >
          + Learn More
        </a>
      </div>
    </motion.div>
  );
}

export default function Service() {
  const services = [
    {
      title: "Web Development",
      description: "Built with marketing best practices in mind, we design and build websites that are scalable, responsive, and user-friendly.",
      link: "#"
    },
    {
      title: "Mobile Development",
      description: "Secure, reliable, and interactive mobile applications with a solid maintenance contract to stay up to date with OS updates.",
      link: "#"
    },
    {
      title: "IoT Solutions",
      description: "Experience connected and smart living with IoT solutions with right infrastructure and IoT platform.",
      link: "#"
    }
  ];

  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      <section className="relative py-32 px-6 overflow-hidden">
  {/* Background Image with parallax effect */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: `url('/Ama.jpg')`,
    }}
  />
  
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="mb-16">
      <AnimatedHeader />
    </div>
  </div>
</section>

      {/* Overlapping services grid - sits above the blue section */}
      <div className="relative -mt-24 md:-mt-32 z-30 px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <AnimatedServiceCard 
                key={index} 
                service={service} 
                index={index} 
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}