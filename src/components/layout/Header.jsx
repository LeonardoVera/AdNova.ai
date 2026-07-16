// filepath: src/components/layout/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo-section">
          <div className="logo-icon bg-gradient-ai">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="logo-text">
            AdNova<span className="text-gradient-ai">.ai</span>
          </span>
        </div>
        <nav className="header-nav">
          <a href="#como-funciona" className="nav-link">Cómo Funciona</a>
          <a href="#solucion-integral" className="nav-link">Pilares Tecnológicos</a>
          <a href="#simulador" className="nav-link">Simulador de IA</a>
          <a href="#precios" className="nav-link">Planes</a>
        </nav>
        <a href="#simulador" className="btn-header-cta bg-gradient-ai">Probar Demo</a>
      </div>
    </header>
  );
}
