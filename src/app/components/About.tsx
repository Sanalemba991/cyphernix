"use client";
import React from 'react';
import Sam from './Sam';
import { Users, CheckCircle, Award, Briefcase } from 'lucide-react';

export default function AboutSAp() {
  const stats = [
    { number: '36k+', label: 'Trusted Global Clients', bgColor: 'bg-sky-400' },
    { number: '850+', label: 'Best Project Complete', bgColor: 'bg-gray-200' }
  ];

  const clients = [
    { name: 'Client 1', avatar: '👨‍💼', color: 'bg-orange-100' },
    { name: 'Client 2', avatar: '👩‍💼', color: 'bg-red-400' },
    { name: 'Client 3', avatar: '👨‍💼', color: 'bg-gray-700' },
    { name: 'Client 4', avatar: '➕', color: 'bg-white' }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl w-full"
                />      
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <p className="text-gray-600 font-medium mb-4">Explore Our Achievement</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Premier Tech Innovations
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Cyphernix Solution
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`${stat.bgColor} p-8 shadow-lg transition-transform hover:scale-105`}
                  >
                    <div className="mb-6">
                      <CheckCircle className={`w-12 h-12 ${stat.bgColor === 'bg-sky-400' ? 'text-white' : 'text-gray-900'}`} />
                    </div>
                    <h3 className={`text-5xl font-bold mb-3 ${stat.bgColor === 'bg-sky-400' ? 'text-white' : 'text-gray-900'}`}>
                      {stat.number}
                    </h3>
                    <p className={`text-lg font-medium ${stat.bgColor === 'bg-sky-400' ? 'text-white' : 'text-gray-900'}`}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>     
    </div>
    <Sam/>
    </>
  );
}