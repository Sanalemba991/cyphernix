import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, TrendingUp, Target, Award } from 'lucide-react';
import { Variants } from 'framer-motion';

export default function Banner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Animation variants for staggered text
    const containerVariants : Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants : Variants = {
        hidden: { opacity: 0, x: -50 },
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
        <div className="relative w-full h-[700px] overflow-hidden"> {/* Increased height */}
            {/* Video background - slightly bigger */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-105" // scale-105 makes it slightly bigger
            >
                <source
                    src="https://media.istockphoto.com/id/1036743030/video/business-people-listening-to-their-asian-colleague-holding-a-presentation-in-the-glass.mp4?s=mp4-640x640-is&k=20&c=1EyI19ycNEjDHa1hJQPsYRzCABmwJ_NELuFniFo9JJs="
                    type="video/mp4"
                />
            </video>

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            <div className="relative h-full flex items-center justify-start px-8 md:px-16 lg:px-24 z-10 pt-16"> {/* Added padding top */}
                <motion.div
                    className="text-left max-w-2xl mt-16" /* Added margin top */
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Main heading with staggered animation */}
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                        variants={itemVariants}
                    >
                        Empowering Your
                        <motion.span
                            className="block bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent mt-2"
                            variants={itemVariants}
                        >
                            Business Success
                        </motion.span>
                    </motion.h1>

                    {/* Description with delay */}
                    <motion.p
                        className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl drop-shadow-lg leading-relaxed"
                        variants={itemVariants}
                    >
                        Strategic teamwork and innovative solutions that drive measurable results for your organization
                    </motion.p>



                </motion.div>
            </div>
        </div>
    );
}