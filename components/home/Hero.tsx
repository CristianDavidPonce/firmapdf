import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="pt-8 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="space-y-6 max-w-4xl">
          <motion.h1 
            className="text-5xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Firma fácil tus <span className="text-red-500">PDFs</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Firma documentos PDF con certificados p12/pfx. Sin internet, rápido y seguro.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-3 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-indigo-600-700  border border-blue-200  rounded-full text-sm font-medium">
              🇪🇨 Compatible Firma Electrónica Ecuador
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700  border border-green-200 rounded-full text-sm font-medium">
              📱 Disponible en Android
            </span>
          </motion.div>
          
        </div>
        <motion.div 
          className="mt-16 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
