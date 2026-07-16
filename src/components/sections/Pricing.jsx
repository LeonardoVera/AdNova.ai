// filepath: src/components/sections/Pricing.jsx
import React from 'react';

export default function Pricing() {
  return (
    <section id="precios" className="benefits-section" style={{ borderTop: '1px solid var(--border-slate-100)' }}>
      <div className="container">
        <div className="section-header text-center">
          <h2>Planes de Suscripción Flexibles</h2>
          <p>Comienza hoy mismo a recuperar el capital inmovilizado en tu inventario. Cancela en cualquier momento.</p>
        </div>
        
        <div className="steps-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', alignItems: 'stretch' }}>
          <div className="step-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-title)' }}>Plan Básico</h4>
              <div style={{ margin: '15px 0' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-deep)' }}>$19</span>
                <span style={{ color: 'var(--text-muted)' }}> / mes</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Ideal para comerciantes individuales o tiendas pequeñas que buscan automatizar su primer inventario.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>🔹 Hasta 50 escaneos de facturas / mes</li>
                <li>🔹 Diagnóstico financiero determinista</li>
                <li>🔹 10 afiches publicitarios con IA / mes</li>
                <li>🔹 Atribución básica de conversiones</li>
                <li>🔹 Soporte técnico vía email</li>
              </ul>
            </div>
            <button style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border-slate-200)', borderRadius: 'var(--radius-md)', fontWeight: '600', marginTop: '30px', color: 'var(--primary-accent)' }} onClick={() => alert('¡Gracias por tu interés en el Plan Básico!')}>
              Comenzar Básico
            </button>
          </div>

          <div className="step-card" style={{ border: '2px solid var(--emerald-brand)', transform: 'scale(1.03)', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
            <div className="card-badge bg-gradient-ai" style={{ top: '-12px', right: '20px', left: '20px', textAlign: 'center', borderRadius: '50px' }}>
              RECOMENDADO POR CFOs
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-title)', marginTop: '8px' }}>Plan Pro</h4>
              <div style={{ margin: '15px 0' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-deep)' }}>$49</span>
                <span style={{ color: 'var(--text-muted)' }}> / mes</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Para negocios en crecimiento que requieren optimización constante y volumen ilimitado de campañas.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>🟢 <strong>Escaneos de facturas ilimitados</strong></li>
                <li>🟢 <strong>Generación ilimitada de afiches con IA</strong></li>
                <li>🟢 Módulo completo de Atribución por WhatsApp</li>
                <li>🟢 Cálculo contable en tiempo real del ROAS</li>
                <li>🟢 Alertas contables avanzadas de "CFO de Bolsillo"</li>
                <li>🟢 Soporte prioritario vía WhatsApp</li>
              </ul>
            </div>
            <button className="bg-gradient-ai" style={{ width: '100%', padding: '0.8rem', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: '700', marginTop: '30px', color: 'var(--bg-white)' }} onClick={() => alert('¡Gracias por elegir el Plan Pro!')}>
              Obtener Plan Pro
            </button>
          </div>

          <div className="step-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-title)' }}>Plan Empresa</h4>
              <div style={{ margin: '15px 0' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-deep)' }}>$99</span>
                <span style={{ color: 'var(--text-muted)' }}> / mes</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Para distribuidoras, agencias de marketing o comercios con múltiples almacenes y control multi-usuario.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>🔹 Todo lo incluido en el Plan Pro</li>
                <li>🔹 Gestión de multi-almacenes y sucursales</li>
                <li>🔹 Control de acceso por rol (multi-usuario)</li>
                <li>🔹 Integración por API con sistemas ERP / Facturación</li>
                <li>🔹 Reportes listos para auditorías fiscales</li>
                <li>🔹 Asesor contable dedicado 24/7</li>
              </ul>
            </div>
            <button style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border-slate-200)', borderRadius: 'var(--radius-md)', fontWeight: '600', marginTop: '30px', color: 'var(--primary-accent)' }} onClick={() => alert('¡Gracias por tu interés en el Plan Empresa!')}>
              Comenzar Empresa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
