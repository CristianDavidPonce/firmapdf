import Image from 'next/image';

export default function Header() {
  return (
    <header className="">
      <nav className="max-w-7xl mx-auto px-6 py-6 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image 
              src="/logo-cuadrado.png" 
              alt="FirmaPDF Logo" 
              width={40} 
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-2xl font-bold">FirmaPDF</h1>
          </div>
          <ul className="flex gap-8">
            <li><a href="#caracteristicas">Características</a></li>
            <li><a href="#como-funciona">Cómo Funciona</a></li>
            <li><a href="#seguridad">Seguridad</a></li>
            <li><a href="#descargar">Descargar</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
