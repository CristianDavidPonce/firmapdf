export default function SigningModes() {
  return (
    <section id="modos" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Modos de Firma</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 space-y-4 text-center">
            <h3 className="text-2xl font-bold">Firma Simple</h3>
            <p>Firma un documento PDF en la posición que elijas. Ideal para documentos individuales.</p>
          </div>
          <div className="p-8 space-y-4 text-center">
            <h3 className="text-2xl font-bold">Firma Múltiple</h3>
            <p>Firma varios PDFs en lote con la misma configuración. Ahorra tiempo al firmar múltiples documentos.</p>
          </div>
          <div className="p-8 space-y-4 text-center">
            <h3 className="text-2xl font-bold">Sumillar</h3>
            <p>Firma todas las páginas de un documento en la misma posición. Perfecto para documentos extensos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
