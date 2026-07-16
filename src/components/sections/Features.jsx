// filepath: src/components/sections/Features.jsx
import React from 'react';

export default function Features() {
  return (
    <section id="solucion-integral" className="how-it-works-section">
      <div className="container">
        <div className="section-header">
          <h2>Nuestra Solución Tecnológica Integral</h2>
          <p>Democratizamos el acceso a herramientas que antes solo estaban al alcance de grandes corporaciones con presupuestos masivos.</p>
        </div>
        <div className="steps-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          <div className="step-card">
            <div className="step-number bg-gradient-ai">1</div>
            <h3>Escáner de Facturas (OCR Semántico)</h3>
            <p>Sube las facturas físicas o electrónicas de tus proveedores. Nuestro motor multimodal basado en IA procesa la imagen, extrae el precio de costo, las cantidades y las referencias SKU automáticamente. Cero ingreso de datos manual.</p>
          </div>
          <div className="step-card">
            <div className="step-number bg-gradient-ai">2</div>
            <h3>CFO de Bolsillo (Módulo Determinista)</h3>
            <p>Analiza matemáticamente el rendimiento contable de tu negocio. Detecta el stock muerto con más de 60 días, evalúa la asfixia de capital y sugiere descuentos inteligentes basados en la rentabilidad real, protegiendo tu margen operativo.</p>
          </div>
          <div className="step-card">
            <div className="step-number bg-gradient-ai">3</div>
            <h3>Motor de Anuncios AI (Difusión Latente)</h3>
            <p>Olvídate de pagar agencias de diseño caras. AdNova.ai genera imágenes publicitarias profesionales a partir de fotos de referencia o descripciones del producto, creando piezas listas para publicar en redes sociales.</p>
          </div>
          <div className="step-card">
            <div className="step-number bg-gradient-ai">4</div>
            <h3>Rastreo por WhatsApp & Cálculo de ROAS</h3>
            <p>Vincula cada afiche generado a un enlace y un código de tracking de WhatsApp único. Cuando los consumidores te contacten, el sistema registrará la venta automáticamente, calculando el retorno real sobre tu gasto publicitario (ROAS).</p>
          </div>
        </div>
      </div>
    </section>
  );
}
