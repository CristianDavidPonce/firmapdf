'use client';

import { motion } from 'framer-motion';
import { Feather, Copy, Stamp, EyeOff, Crown } from 'lucide-react';

export default function SigningModes() {
  const signingModes = [
    {
      id: "normal",
      title: "Firma Normal",
      description: "Firma digital con estampado visible en un documento. Ideal para documentos individuales.",
      icon: Feather,
      isPro: false
    },
    {
      id: "multiple",
      title: "Firma Múltiple",
      description: "Agrega varias firmas a la vez en un documento. Ahorra tiempo al firmar múltiples secciones.",
      icon: Copy,
      isPro: true
    },
    {
      id: "sumillar",
      title: "Sumillar",
      description: "Firma todas las páginas de un documento en una misma posición. Perfecto para documentos extensos.",
      icon: Stamp,
      isPro: true
    },
    {
      id: "invisible",
      title: "Firma Invisible",
      description: "Firma digital sin sello visible en el documento. Mantiene la apariencia original del PDF.",
      icon: EyeOff,
      isPro: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="modos" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
        >
          Modos de Firma
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Elige el modo que mejor se adapte a tus necesidades de firmado digital
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {signingModes.map((mode, index) => {
            const Icon = mode.icon;
            
            return (
              <motion.div
                key={mode.id}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                variants={itemVariants as any}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-shadow duration-300 border border-gray-100 hover:border-orange-200 overflow-hidden"
              >
                {/* Pro badge */}
                {mode.isPro && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                    <Crown className="w-3 h-3" />
                    <span>PRO</span>
                  </div>
                )}

                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon container */}
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {mode.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {mode.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-300 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
