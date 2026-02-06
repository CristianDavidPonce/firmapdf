import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="">
      <nav className="max-w-7xl mx-auto px-6 py-6 ">
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
          <ul className="flex gap-8">
            <li><Link href="/#caracteristicas">Características</Link></li>
            <li><Link href="/#como-funciona">Cómo Funciona</Link></li>
            <li><Link href="/#descargar">Descargar</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
