export default function Security() {
  return (
    <section id="seguridad" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Seguridad y Privacidad</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold">🔐 Almacenamiento Local</h3>
            <p>Todos tus documentos y certificados se guardan únicamente en tu dispositivo. No se suben a ningún servidor.</p>
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold">🔒 Encriptación</h3>
            <p>Los certificados digitales se almacenan encriptados utilizando Android Keystore.</p>
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold">👁️ Sin Rastreo</h3>
            <p>No recopilamos información personal. No hay análisis ni seguimiento de terceros.</p>
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold">🔑 Autenticación Biométrica</h3>
            <p>Protege el acceso a tus certificados con huella digital o reconocimiento facial (opcional).</p>
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold">📵 100% Offline</h3>
            <p>La aplicación funciona completamente sin conexión a internet. Tus datos nunca salen de tu dispositivo.</p>
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-bold">✅ Control Total</h3>
            <p>Tú decides qué documentos firmar, qué certificados usar y cuándo eliminarlos. Control total de tus datos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
