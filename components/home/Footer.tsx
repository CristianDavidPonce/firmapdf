export default function Footer() {
  return (
    <footer className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">FirmaPDF</h3>
            <p>Firma digital de PDFs, fácil, rápida y segura.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold">Páginas</h4>
            <ul className="space-y-2">
              <li><a href="#caracteristicas">Características</a></li>
              <li><a href="#como-funciona">Cómo Funciona</a></li>
              <li><a href="#seguridad">Seguridad</a></li>
              <li><a href="#faq">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#">Términos y Condiciones</a></li>
              <li><a href="#">Políticas de Privacidad</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold">Soporte</h4>
            <ul className="space-y-2">
              <li><a href="mailto:soporte@firmapdf.app">soporte@firmapdf.app</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Reportar un problema</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t">
          <p>© 2026 FirmaPDF. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
