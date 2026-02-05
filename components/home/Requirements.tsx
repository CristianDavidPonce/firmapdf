export default function Requirements() {
  return (
    <section id="requisitos" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Requisitos</h2>
        <ul className="space-y-3 text-lg">
          <li className="flex items-start gap-3">
            <span>•</span>
            <span>Android 8.0 (API 26) o superior</span>
          </li>
          <li className="flex items-start gap-3">
            <span>•</span>
            <span>Certificado digital p12 o pfx</span>
          </li>
          <li className="flex items-start gap-3">
            <span>•</span>
            <span>Documentos en formato PDF</span>
          </li>
          <li className="flex items-start gap-3">
            <span>•</span>
            <span>Espacio de almacenamiento disponible</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
