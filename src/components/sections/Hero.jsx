// filepath: src/components/sections/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge-wrapper">
            <span className="hero-badge">
              <span className="bullet"></span> El "CFO de Bolsillo" para Microempresas
            </span>
          </div>
          <h1>
            El motor financiero y publicitario que <span className="text-gradient-ai">da vida a tu stock estancado</span>
          </h1>
          <p className="hero-subtext">
            AdNova.ai integra <strong>diagnóstico financiero contable</strong>, <strong>escaneo inteligente de facturas (OCR)</strong> y <strong>creación de afiches con IA</strong> in un solo entorno. Recupera el capital inmovilizado en tu almacén y mide tu retorno publicitario (ROAS) real a través de WhatsApp.
          </p>
          <div className="hero-actions">
            <a href="#simulador" className="btn-hero-primary bg-gradient-ai">
              Probar Simulador Gratis
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#como-funciona" className="btn-hero-secondary">
              Ver Módulos Científicos
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <h3>+80%</h3>
              <p>Margen de Software (SaaS)</p>
            </div>
            <div className="stat-card">
              <h3>&lt; 30 días</h3>
              <p>Periodo de Retorno de CAC</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Atribución vía WhatsApp</p>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-dashboard-mockup">
            <div className="mockup-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="mockup-title">AdNova.ai — Mapeo de Capital de Trabajo</span>
            </div>
            <div className="mockup-body">
              <div className="mockup-stats-row">
                <div className="m-stat">
                  <span>Capital Inmovilizado Crítico</span>
                  <strong className="text-danger">$7,769.00 USD</strong>
                </div>
                <div className="m-stat">
                  <span>Margen Promedio Unitario</span>
                  <strong>52.4%</strong>
                </div>
              </div>
              <div className="mockup-list">
                <div className="mockup-item warning">
                  <div className="m-item-info">
                    <strong>Mermelada Gourmet Ruby (340 uds)</strong>
                    <span>75 días • Costo: $4.10 | PVP: $8.50</span>
                  </div>
                  <span className="m-badge badge-warning">Pérdida: $1,394 USD</span>
                </div>
                <div className="mockup-item danger">
                  <div className="m-item-info">
                    <strong>Abrigo Lana Premium (85 uds)</strong>
                    <span>120 días • Costo: $75.00 | PVP: $180.00</span>
                  </div>
                  <span className="m-badge badge-danger">Pérdida: $6,375 USD</span>
                </div>
              </div>
              <div className="mockup-footer">
                <div className="ai-status">
                  <span className="pulse-icon"></span>
                  <span>Recomendación: Generar campaña de recuperación de capital con 35% de descuento.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
