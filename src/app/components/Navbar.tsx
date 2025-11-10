// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/solution', label: 'Our Solutions' },
    { href: '/service', label: 'Our Services' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-2xl border-b border-gray-200'
          : 'bg-transparent border-b-0'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Cyphernix Logo"
                width={1200}
                height={48}
                className="object-contain h-10 w-auto" // Constrain height, auto width maintains ratio
                priority // Add this since it's above the fold
              />

              <div className={`absolute -bottom-1 left-0 w-full h-0.5 transition-all duration-300 ${isScrolled
                  ? 'bg-[#5B7FE7]'
                  : 'bg-[#5B7FE7]'
                } transform scale-x-0 group-hover:scale-x-100`}></div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 px-1 text-sm font-medium transition-all duration-300 group ${isActive
                      ? 'text-[#5B7FE7]'
                      : (isScrolled
                        ? 'text-gray-700 hover:text-[#5B7FE7]'
                        : 'text-white hover:text-[#5B7FE7]')
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-[#5B7FE7]"></span>
                  )}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5B7FE7] rounded-full transition-all duration-300 group-hover:w-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`px-4 py-2 text-sm font-medium transition-all border hover:border-[#5B7FE7] border-gray-300 duration-300 ${isScrolled
                  ? 'text-gray-900 border border-gray-300 hover:border-[#5B7FE7] hover:text-[#5B7FE7]'
                  : 'text-white hover:text-[#5B7FE7]'
                }`}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}