// filepath: src/features/simulator/components/CampaignResults.jsx
import React from 'react';

export default function CampaignResults({ selectedProduct, activeCampaign, simulatedWaLink }) {
  return (
    <div className="business-details-card">
      <div className="card-badge bg-gradient-ai">Diagnóstico Financiero</div>
      <h3>{selectedProduct.name}</h3>
      <p className="subtitle">SKU: {selectedProduct.sku} • Costo Adquisición: ${selectedProduct.costPrice.toFixed(2)} USD</p>
      
      <div className="kpi-grid">
        <div className="kpi-card">
          <span>PVP Regular</span>
          <strong>${selectedProduct.originalPrice.toFixed(2)} USD</strong>
        </div>
        <div className="kpi-card highlight">
          <span>Precio AI Sugerido</span>
          <strong className="text-success">${activeCampaign.price.toFixed(2)} USD</strong>
        </div>
        <div className="kpi-card">
          <span>Código de Tracking</span>
          <strong style={{ color: 'var(--primary-accent)' }}>{activeCampaign.code}</strong>
        </div>
      </div>

      <div className="strategy-box">
        <h5>🎯 Análisis del CFO de Bolsillo:</h5>
        <p>{activeCampaign.strategy}</p>
      </div>

      <div className="roi-box">
        <h5>💰 Métricas Contables de la Oferta:</h5>
        <p>{activeCampaign.roi}</p>
        <strong style={{ fontSize: '0.85rem', color: 'var(--emerald-dark)', display: 'block', marginTop: '6px' }}>
          📈 {activeCampaign.proyectedROAS}
        </strong>
      </div>

      <div className="marketing-copy-box">
        <div className="copy-box-header">
          <h5>✍️ Mensaje Persuasivo + Enlace de Atribución:</h5>
          <button 
            className="btn-copy" 
            onClick={() => {
              navigator.clipboard.writeText(`${activeCampaign.copy}\n\n👉 Ordena directo aquí: ${simulatedWaLink}`);
              alert('¡Copy y enlace de atribución copiados al portapapeles!');
            }}
          >
            📋 Copiar Texto
          </button>
        </div>
        <div className="copy-box-content">
          <p>{activeCampaign.copy}</p>
          <div style={{ marginTop: '10px', fontSize: '0.75rem', padding: '8px', border: '1px solid var(--border-slate-200)', borderRadius: '4px', backgroundColor: 'var(--bg-white)', color: 'var(--emerald-brand)', overflowWrap: 'break-word' }}>
            <strong>🔗 Enlace de Atribución WhatsApp:</strong><br />
            <a href={simulatedWaLink} target="_blank" rel="noopener noreferrer">{simulatedWaLink}</a>
          </div>
        </div>
      </div>

      <div className="distribution-channels">
        <h5>📢 Canales Recomendados para Liquidar:</h5>
        <div className="channels-badges">
          <span className="channel-badge">WhatsApp Business (Canal Principal)</span>
          <span className="channel-badge">Meta Ads (Segmentado)</span>
          <span className="channel-badge">Cartel Físico en Tienda</span>
        </div>
      </div>
    </div>
  );
}
