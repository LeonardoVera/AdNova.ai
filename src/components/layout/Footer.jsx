// filepath: src/components/layout/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <p>&copy; {new Date().getFullYear()} AdNova.ai. Todos los derechos reservados. Desarrollado conforme al modelo de negocios Canvas para microempresas de LatAm.</p>
        <div className="footer-links">
          <a href="#">Privacidad de Datos</a>
          <a href="#">Gobernanza de Modelos AI</a>
          <a href="#">Contacto Comercial</a>
        </div>
      </div>
    </footer>
  );
}
