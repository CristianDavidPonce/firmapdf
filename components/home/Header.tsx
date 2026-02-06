'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo-cuadrado.png" 
              alt="FirmaPDF Logo" 
              width={40} 
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-2xl font-bold">FirmaPDF</h1>
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            <li>
              <Link 
                href="/#caracteristicas"
                className="hover:text-primary transition-colors"
              >
                Características
              </Link>
            </li>
            <li>
              <Link 
                href="/#como-funciona"
                className="hover:text-primary transition-colors"
              >
                Cómo Funciona
              </Link>
            </li>
            <li>
              <Link 
                href="/#descargar"
                className="hover:text-primary transition-colors"
              >
                Descargar
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link 
                  href="/#caracteristicas"
                  className="block hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Características
                </Link>
              </li>
              <li>
                <Link 
                  href="/#como-funciona"
                  className="block hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link 
                  href="/#descargar"
                  className="block hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Descargar
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
