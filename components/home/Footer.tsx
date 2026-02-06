import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-16 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">FirmaPDF</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Firma digital de PDFs, fácil, rápida y segura.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 dark:text-white">Páginas</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/#caracteristicas" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Características
                </Link>
              </li>
              <li>
                <Link 
                  href="/#como-funciona" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link 
                  href="/#faq" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 dark:text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/terminos" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacidad" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Políticas de Privacidad
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900 dark:text-white">Soporte</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:soporte@firmapdf.app" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  soporte@firmapdf.app
                </a>
              </li>
              <li>
                <a 
                  href="mailto:soporte@firmapdf.app" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a 
                  href="mailto:soporte@firmapdf.app?subject=Reportar un problema" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  Reportar un problema
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400">
            © 2026 FirmaPDF. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
