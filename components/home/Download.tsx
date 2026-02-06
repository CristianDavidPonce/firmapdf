'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Download() {
  return (
    <section id="descargar" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
        >
          Descarga FirmaPDF Gratis
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 mb-8"
        >
          Disponible para dispositivos Android
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center pt-4"
        >
          <motion.a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block transition-transform"
          >
            <Image
              src="/GetItOnGooglePlay_Badge_Web_color_Spanish-LATAM.svg"
              alt="Descargar en Google Play"
              width={240}
              height={90}
              className="w-60 h-auto"
            />
          </motion.a>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm text-gray-500 pt-8"
        >
          Versión 1.0.0 | Última actualización: Enero 2026
        </motion.p>
      </div>
    </section>
  );
}
