import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="pt-8 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-5xl md:text-5xl font-bold leading-tight">
            Firma fácil tus <span className='text-orange-500'>
              
              PDFs
              </span>
          </h1>
          <p className="text-xl">
            Firma documentos PDF con certificados p12/pfx. Sin internet, compatible con Firma Electrónica de Ecuador 🇪🇨.
          </p>
          
        </div>
        <div className="mt-16 flex justify-center items-center relative">
          <div className="relative">
            <Image 
              src="/pixel.png" 
              alt="FirmaPDF App Mockup" 
              width={380} 
              height={800}
              className="max-w-full h-auto relative z-10"
            />
            <div className="absolute top-5 left-3 overflow-hidden rounded-[2.5rem]">
              <Image 
                src="/main.jpeg" 
                alt="FirmaPDF App Screenshot" 
                width={380} 
                height={800}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
