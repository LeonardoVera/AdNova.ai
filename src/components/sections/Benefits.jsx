// filepath: src/components/sections/Benefits.jsx
import React from 'react';

export default function Benefits() {
  return (
    <section id="beneficios" className="benefits-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Beneficios Sustentados por la Ingeniería Económica</h2>
          <p>Convertimos la merma operativa y el sobrestock en una oportunidad contable de captar efectivo inmediato.</p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">📈</div>
            <h3>Optimización de Margen Unitario</h3>
            <p>El sistema te ayuda a calcular descuentos que protegen tus costos base de adquisición, garantizando que nunca vendas a pérdida neta.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🏢</div>
            <h3>Reducción del Costo de Almacenamiento</h3>
            <p>Desocupa metros cuadrados valiosos al acelerar la rotación de mercancía de lento movimiento, reduciendo costos operativos fijos.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">⚡</div>
            <h3>Diseño Gráfico Instantáneo</h3>
            <p>Evita los cuellos de botella creativos. Obtén banners y afiches con copies listos para publicar mediante IA en menos de un minuto.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🔗</div>
            <h3>Atribución y ROAS 100% Claros</h3>
            <p>A través de la vinculación conversacional por WhatsApp, sabrás exactamente qué pesos invertidos se convirtieron en compras reales.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
