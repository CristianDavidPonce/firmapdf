export default function Features() {
  return (
    <section id="caracteristicas" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Características Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold">✍️ Firma Digital</h3>
            <p>Firma documentos PDF con certificados digitales p12 o pfx de manera rápida y segura.</p>
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold">📱 Múltiples Modos</h3>
            <p>Firma simple, múltiple o sumillar. Elige el modo que mejor se adapte a tus necesidades.</p>
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold">🔒 100% Seguro</h3>
            <p>Tus documentos y certificados se almacenan localmente en tu dispositivo, completamente encriptados.</p>
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold">🌐 Sin Internet</h3>
            <p>Funciona completamente offline. No necesitas conexión a internet para firmar tus documentos.</p>
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold">🇪🇨 Compatible</h3>
            <p>Compatible con Firma Electrónica de Ecuador y certificados digitales estándar.</p>
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold">👆 Biométrico</h3>
            <p>Protege el acceso a tus certificados con autenticación biométrica (huella digital o reconocimiento facial).</p>
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold">📄 Visualización</h3>
            <p>Visualiza tus documentos antes y después de firmar. Soporta distintos tamaños y orientaciones.</p>
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold">⚡ Rápido y Fácil</h3>
            <p>Interfaz intuitiva y moderna. Firma tus documentos en segundos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
