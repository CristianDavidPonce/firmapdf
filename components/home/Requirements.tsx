'use client';

import { motion, easeInOut } from 'framer-motion';
import { Smartphone, FileKey, FileText, HardDrive, CheckCircle2 } from 'lucide-react';

export default function Requirements() {
  const requirements = [
    {
      icon: Smartphone,
      title: "Android 8.0 o superior",
      description: "Compatible con API 26 y versiones posteriores",
      iconColor: "from-green-500 to-green-700",
      hoverBg: "from-green-50 to-emerald-50",
      hoverBorder: "hover:border-green-200",
      hoverText: "group-hover:text-green-600"
    },
    {
      icon: FileKey,
      title: "Certificado Digital",
      description: "Archivo p12 o pfx con tu firma electrónica",
      iconColor: "from-amber-500 to-orange-600",
      hoverBg: "from-amber-50 to-orange-50",
      hoverBorder: "hover:border-amber-200",
      hoverText: "group-hover:text-amber-600"
    },
    {
      icon: FileText,
      title: "Documentos PDF",
      description: "Archivos en formato PDF para firmar",
      iconColor: "from-red-500 to-rose-600",
      hoverBg: "from-red-50 to-rose-50",
      hoverBorder: "hover:border-red-200",
      hoverText: "group-hover:text-red-600"
    },
    {
      icon: HardDrive,
      title: "Espacio de Almacenamiento",
      description: "Suficiente espacio para tus documentos",
      iconColor: "from-blue-500 to-indigo-600",
      hoverBg: "from-blue-50 to-indigo-50",
      hoverBorder: "hover:border-blue-200",
      hoverText: "group-hover:text-blue-600"
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeInOut
      }
    }
  };

  return (
    <section id="requisitos" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
        >
          Requisitos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Todo lo que necesitas para comenzar a firmar tus documentos
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {requirements.map((requirement, index) => {
            const Icon = requirement.icon;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className={`group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 ${requirement.hoverBorder}`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${requirement.hoverBg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${requirement.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Text content */}
                  <div className="flex-1 pt-1">
                    <h3 className={`text-lg font-bold text-gray-900 mb-1 ${requirement.hoverText} transition-colors duration-300`}>
                      {requirement.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {requirement.description}
                    </p>
                  </div>

                  {/* Check icon */}
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Decorative line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
