'use client';

import { FileSignature, Layout, Shield, WifiOff, CheckCircle2, Fingerprint, FileText, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      icon: FileSignature,
      title: "Firma Digital",
      description: "Firma documentos PDF con certificados digitales p12 o pfx de manera rápida y segura."
    },
    {
      icon: Layout,
      title: "Múltiples Modos",
      description: "Firma simple, múltiple o sumillar. Elige el modo que mejor se adapte a tus necesidades."
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Tus documentos y certificados se almacenan localmente en tu dispositivo, completamente encriptados."
    },
    {
      icon: WifiOff,
      title: "Sin Internet",
      description: "Funciona completamente offline. No necesitas conexión a internet para firmar tus documentos."
    },
    {
      icon: CheckCircle2,
      title: "Compatible",
      description: "Compatible con Firma Electrónica de Ecuador y certificados digitales estándar."
    },
    {
      icon: Fingerprint,
      title: "Biométrico",
      description: "Protege el acceso a tus certificados con autenticación biométrica (huella digital o reconocimiento facial)."
    },
    {
      icon: FileText,
      title: "Visualización",
      description: "Visualiza tus documentos antes y después de firmar. Soporta distintos tamaños y orientaciones."
    },
    {
      icon: Zap,
      title: "Rápido y Fácil",
      description: "Interfaz intuitiva y moderna. Firma tus documentos en segundos."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="caracteristicas" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
        >
          Características Principales
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Descubre todas las funcionalidades que hacen de FirmaPDF la mejor aplicación para firmar tus documentos
        </motion.p>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-orange-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
