'use client';

import { useEffect, useRef } from 'react';
import LastImage from "../../../public/Last.png"

export default function Last() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observerOptions = {
            threshold: [0, 0.1, 0.2],
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                    section.classList.add('in-view');
                    observer.unobserve(section);
                }
            });
        }, observerOptions);

        observer.observe(section);

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 lg:py-24 flex items-stretch bg-gray-50 overflow-hidden"
        >
            <div className="w-full flex flex-col lg:flex-row max-w-7xl mx-auto">

                {/* Left side - Image */}
                <div className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl">
                    <div className="image-container w-full h-full">
                        <img
                            src={LastImage.src}
                            alt="Customer support representative with headset ready to help"
                            className="w-full h-64 lg:h-full object-cover image-slide rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10 rounded-2xl"></div>
                    </div>
                </div>


                {/* Right side - Content */}
                <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 py-12 lg:py-0">
                    <div className="content-slide max-w-lg px-8 lg:px-16">
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                            Got questions?
                        </h1>

                        <p className="text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                            Get all the help you need here
                        </p>

                        <a
                            href="/support"
                            className="inline-flex items-center text-blue-500 hover:text-blue-600 font-semibold text-lg group"
                        >
                            Learn more
                            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2 inline-block text-lg">→</span>
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
        /* Initial state - hidden */
        .image-slide {
          transform: translateX(-100px);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transition-delay: 0.3s;
        }

        .content-slide {
          transform: translateX(100px);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transition-delay: 0.5s;
        }

        /* Animated state when in view */
        section.in-view .image-slide {
          transform: translateX(0);
          opacity: 1;
        }

        section.in-view .content-slide {
          transform: translateX(0);
          opacity: 1;
        }

        /* Enhanced animations with scale for depth */
        .image-container {
          overflow: hidden;
        }

        section.in-view .image-slide {
          animation: subtleScale 1s ease-out 0.3s both;
        }

        @keyframes subtleScale {
          0% {
            transform: translateX(-100px) scale(1.05);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 1024px) {
          .w-full.lg\\:w-1\\/2 {
            width: 100%;
          }
          
          /* Mobile animations - slide up instead of left/right */
          .image-slide {
            transform: translateY(50px);
            transition-delay: 0.2s;
          }

          .content-slide {
            transform: translateY(50px);
            transition-delay: 0.4s;
          }

          section.in-view .image-slide {
            transform: translateY(0);
          }

          section.in-view .content-slide {
            transform: translateY(0);
          }

          @keyframes subtleScale {
            0% {
              transform: translateY(50px) scale(1.05);
              opacity: 0;
            }
            100% {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
          }
        }

        /* Small mobile devices */
        @media (max-width: 640px) {
          .image-slide {
            transform: translateY(40px);
          }

          .content-slide {
            transform: translateY(40px);
          }

          @keyframes subtleScale {
            0% {
              transform: translateY(40px) scale(1.05);
              opacity: 0;
            }
            100% {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
          }
        }
      `}</style>
        </section>
    );
}