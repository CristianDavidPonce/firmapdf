export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Cómo Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold">1. Importa tu Certificado</h3>
            <p>Añade tu certificado digital p12 o pfx. Se almacena de forma segura y encriptada en tu dispositivo.</p>
          </div>
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold">2. Selecciona tu PDF</h3>
            <p>Elige el documento PDF que deseas firmar desde tu dispositivo o gestor de archivos.</p>
          </div>
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold">3. Posiciona tu Firma</h3>
            <p>Coloca tu firma visual en el documento. Puedes ajustar el tamaño y la posición según tus preferencias.</p>
          </div>
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold">4. Firma y Guarda</h3>
            <p>Completa el proceso de firmado. Tu documento quedará guardado con la firma digital aplicada.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
