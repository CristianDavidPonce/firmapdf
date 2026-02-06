'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Qué es un certificado digital?",
      answer: "Un certificado digital es un archivo electrónico que te identifica de manera única y te permite firmar documentos de forma legal y segura. Los formatos p12 y pfx son los más comunes."
    },
    {
      question: "¿Es seguro guardar mi certificado en la app?",
      answer: "Sí, totalmente seguro. Los certificados se almacenan encriptados en el almacenamiento seguro de tu dispositivo (Android Keystore) y puedes protegerlos con autenticación biométrica."
    },
    {
      question: "¿Necesito internet para firmar?",
      answer: "No. FirmaPDF funciona completamente offline. Una vez instalada la app, puedes firmar documentos sin necesidad de conexión a internet."
    },
    {
      question: "¿Es compatible con la Firma Electrónica de Ecuador?",
      answer: "Sí, FirmaPDF es compatible con los certificados de Firma Electrónica emitidos en Ecuador y cualquier certificado digital estándar en formato p12 o pfx."
    },
    {
      question: "¿Puedo firmar varios documentos a la vez?",
      answer: "Sí, con el modo de Firma Múltiple puedes seleccionar varios PDFs y firmarlos todos con la misma configuración en un solo proceso."
    },
    {
      question: "¿La app es gratuita?",
      answer: "FirmaPDF ofrece funciones básicas gratuitas. Algunas características avanzadas como la firma múltiple y sumillar están disponibles en la versión PRO."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-10 h-10 text-orange-600" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Preguntas Frecuentes
            </h2>
          </div>
          <p className="text-gray-600">
            Encuentra respuestas a las preguntas más comunes sobre FirmaPDF
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300 ${
                    isOpen ? 'bg-gradient-to-r from-orange-50 to-red-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <h3 className={`text-lg font-bold pr-4 transition-colors duration-300 ${
                    isOpen ? 'text-orange-600' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-6 h-6 transition-colors duration-300 ${
                      isOpen ? 'text-orange-600' : 'text-gray-400'
                    }`} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-2">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
