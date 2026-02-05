'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FileUp, MapPin, FileSignature, Info, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const steps = [
    {
      number: 1,
      icon: FileUp,
      title: "Selecciona tu Documento",
      description: "Elige el documento PDF que deseas firmar desde tu dispositivo o gestor de archivos.",
      image: "/step1.jpeg"
    },
    {
      number: 2,
      icon: MapPin,
      title: "Posiciona tu Firma",
      description: "Coloca tu firma visual en el documento. Puedes ajustar el tamaño y la posición según tus preferencias.",
      image: "/step2.jpeg"
    },
    {
      number: 3,
      icon: FileSignature,
      title: "Selecciona tu Firma Electrónica",
      description: "Elige tu certificado digital p12 o pfx previamente importado y almacenado de forma segura.",
      image: "/step3.jpeg"
    },
    {
      number: 4,
      icon: Info,
      title: "Agrega Detalles de Firmado",
      description: "Completa los detalles necesarios y firma con tu huella digital o contraseña para autenticar.",
      image: "/step4.jpeg"
    },
    {
      number: 5,
      icon: CheckCircle,
      title: "Obtén tu Documento Firmado",
      description: "Tu documento quedará guardado con la firma digital aplicada de forma segura y válida.",
      image: "/step5.jpeg"
    }
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newStep = Math.min(Math.floor(latest * steps.length), steps.length - 1);
      setActiveStep(newStep);
    });

    return () => unsubscribe();
  }, [scrollYProgress, steps.length]);

  return (
    <section 
      ref={sectionRef} 
      id="como-funciona" 
      className="bg-gradient-to-b from-gray-50 to-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full min-h-screen flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
          >
            Cómo Funciona
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            {/* Left side - Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                
                return (
                  <motion.div
                    key={index}
                    onClick={() => setActiveStep(index)}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative p-4 rounded-2xl transition-all duration-500 cursor-pointer ${
                      isActive 
                        ? 'bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 shadow-lg' 
                        : 'bg-white border border-gray-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? 'bg-gradient-to-br from-orange-500 to-red-600' 
                          : 'bg-gray-200'
                      }`}>
                        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-sm font-bold ${
                            isActive ? 'text-orange-600' : 'text-gray-400'
                          }`}>
                            PASO {step.number}
                          </span>
                        </div>
                        <h3 className={`text-lg font-bold mb-1 transition-colors duration-500 ${
                          isActive ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                          isActive ? 'text-gray-700' : 'text-gray-400'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-red-600 rounded-l-2xl"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Right side - Phone Mockup */}
            <div className="relative flex items-center justify-center h-screen lg:h-screen">
              <div className="relative w-full max-w-[320px]">
                {/* Phone Frame */}
                <div className="relative z-10">
                  <Image
                    src="/pixel.png"
                    alt="Phone Mockup"
                    width={350}
                    height={600}
                    className="w-full h-auto drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Screenshots inside phone - positioned absolutely */}
                <div className="absolute top-[3%] left-[4%] right-[4%] bottom-[3%] overflow-hidden rounded-[1.5rem]">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: activeStep === index ? 1 : 0,
                        scale: activeStep === index ? 1 : 0.95
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Glow effect */}
                <motion.div
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 blur-3xl opacity-20 -z-10"
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
