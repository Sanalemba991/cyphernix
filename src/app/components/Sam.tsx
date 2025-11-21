"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Sam() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Logo Circle */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Outer Circle with Text */}
                <div className="relative w-80 h-80">
                  {/* Rotating Text Circle */}
                  <svg className="absolute inset-0 w-full h-full animate-spin-slow" style={{ animationDuration: '20s' }} viewBox="0 0 200 200">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      />
                    </defs>
                    <text className="text-xs fill-gray-400 uppercase tracking-widest" style={{ fontFamily: 'system-ui' }}>
                      <textPath href="#circlePath" startOffset="0%">
                        Software Solutions • Agency • Digital • Software Solutions • Agency • Digital •
                      </textPath>
                    </text>
                  </svg>

                  {/* Inner Circle with Arrow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-2 border-gray-600 flex items-center justify-center bg-slate-800/50 backdrop-blur-sm">
                      <div className="w-32 h-32 rounded-full border border-gray-700 flex items-center justify-center">
                        <ArrowUpRight className="w-12 h-12 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 text-white">
              <div>
                <p className="text-gray-400 font-medium mb-4 tracking-wide">We Are Cyphernix Solution</p>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Innovate Soft Solutions to Grow Tech Business
                </h1>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                With a portfolio of successful projects spanning various industries our team has consistently demonstrated the ability to transform ideas into high-performing, user-friendly applications.
              </p>

              <div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:gap-3 transition-all group"
                >
                  Learn More Us
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
     

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
      `}</style>
    </div>
  );
}