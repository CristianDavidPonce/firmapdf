export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold">¿Qué es un certificado digital?</h3>
            <p>
              Un certificado digital es un archivo electrónico que te identifica de manera única 
              y te permite firmar documentos de forma legal y segura. Los formatos p12 y pfx son 
              los más comunes.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">¿Es seguro guardar mi certificado en la app?</h3>
            <p>
              Sí, totalmente seguro. Los certificados se almacenan encriptados en el almacenamiento 
              seguro de tu dispositivo (Android Keystore) y puedes protegerlos con autenticación biométrica.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">¿Necesito internet para firmar?</h3>
            <p>
              No. FirmaPDF funciona completamente offline. Una vez instalada la app, puedes firmar 
              documentos sin necesidad de conexión a internet.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">¿Es compatible con la Firma Electrónica de Ecuador?</h3>
            <p>
              Sí, FirmaPDF es compatible con los certificados de Firma Electrónica emitidos en Ecuador 
              y cualquier certificado digital estándar en formato p12 o pfx.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">¿Puedo firmar varios documentos a la vez?</h3>
            <p>
              Sí, con el modo de Firma Múltiple puedes seleccionar varios PDFs y firmarlos todos 
              con la misma configuración en un solo proceso.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">¿La app es gratuita?</h3>
            <p>
              FirmaPDF ofrece funciones básicas gratuitas. Algunas características avanzadas como 
              la firma múltiple y sumillar están disponibles en la versión PRO.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
