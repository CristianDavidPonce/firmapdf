export default function Privacy() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Políticas de Privacidad</h1>
        
        <p className="text-sm text-gray-600 mb-8">
          Última actualización: 31 de diciembre de 2025
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              1. Información que Recopilamos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              FirmaPDF está diseñada con la privacidad como prioridad. No recopilamos información personal identificable. La aplicación funciona completamente offline:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Tus documentos PDF permanecen en tu dispositivo</li>
              <li>Tus certificados digitales se almacenan localmente</li>
              <li>Tus firmas no se transmiten a servidores externos</li>
              <li>No recopilamos historial de uso</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              2. Almacenamiento Local
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Toda la información se almacena localmente en tu dispositivo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Documentos firmados en el almacenamiento interno</li>
              <li>Certificados en el almacenamiento seguro del dispositivo</li>
              <li>Configuraciones de la aplicación en preferencias locales</li>
              <li>No se realiza sincronización con la nube</li>
              <li>Si activas la autenticación biométrica, la contraseña del certificado se cifra mediante Android Keystore y solo puede descifrarse tras validación biométrica</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              3. Permisos de la Aplicación
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              FirmaPDF solicita los siguientes permisos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Almacenamiento: Para leer y guardar documentos PDF</li>
              <li>Biométricos: Para proteger la contraseña de tu certificado (opcional)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Estos permisos se utilizan únicamente para las funciones esenciales de la aplicación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              4. Seguridad
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Implementamos medidas de seguridad para proteger tus datos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Encriptación de certificados digitales</li>
              <li>Autenticación biométrica opcional</li>
              <li>No se transmiten datos a servidores externos</li>
              <li>Almacenamiento seguro en el dispositivo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              5. Compartir Información
            </h2>
            <p className="text-gray-700 leading-relaxed">
              No compartimos, vendemos ni transferimos tu información personal a terceros. Tus datos permanecen exclusivamente en tu dispositivo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              6. Servicios de Terceros
            </h2>
            <p className="text-gray-700 leading-relaxed">
              FirmaPDF no utiliza servicios de análisis ni seguimiento de terceros. La aplicación funciona de manera completamente autónoma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              7. Derechos del Usuario
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tienes control completo sobre tus datos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Puedes eliminar documentos en cualquier momento</li>
              <li>Puedes eliminar certificados cuando lo desees</li>
              <li>Puedes desinstalar la aplicación sin dejar rastros externos</li>
              <li>Tus datos son exclusivamente tuyos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              8. Menores de Edad
            </h2>
            <p className="text-gray-700 leading-relaxed">
              FirmaPDF no está dirigida específicamente a menores de edad. No recopilamos información de menores de 13 años de forma intencional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              9. Cambios en la Política
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios significativos a través de la aplicación.
            </p>
          </section>

          <hr className="my-8" />

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-900">
              Tu Privacidad es Nuestra Prioridad
            </h3>
            <p className="text-blue-800">
              FirmaPDF fue diseñada desde cero pensando en tu privacidad. Tus documentos y certificados nunca salen de tu dispositivo.
            </p>
          </div>

          <p className="text-gray-600 mt-8">
            Si tienes preguntas sobre esta política de privacidad, contáctanos a través de la sección de Contacto.
          </p>
        </div>
      </div>
    </div>
  );
}
