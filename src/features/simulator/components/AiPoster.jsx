// filepath: src/features/simulator/components/AiPoster.jsx
import React from 'react';

export default function AiPoster({ selectedProduct, activeCampaign, simulatedWaLink }) {
  return (
    <div className="ai-poster-container">
      <div className="poster-card">
        <div className="poster-glow-background" style={{ background: selectedProduct.gradientTheme }}></div>
        
        <div className="poster-inner">
          <div className="poster-discount-badge bg-gradient-ai">
            <strong>{activeCampaign.discountPercent}%</strong>
            <span>OFF</span>
          </div>

          <div className="poster-image-area">
            {selectedProduct.image ? (
              <img src={selectedProduct.image} alt={selectedProduct.name} className="poster-main-image" />
            ) : (
              <div className="poster-abstract-image bg-gradient-ai">
                <span className="abstract-icon">📦</span>
                <span className="abstract-title">{selectedProduct.name}</span>
                <span className="abstract-sparkles">⚡ GENERADO CON DIFUSIÓN LATENTE ⚡</span>
              </div>
            )}
          </div>

          <div className="poster-content">
            <h2 className="poster-headline">{activeCampaign.title}</h2>
            <p className="poster-product-name">{selectedProduct.name}</p>
            
            <div className="poster-pricing">
              <span className="old-price">Precio Regular: ${selectedProduct.originalPrice.toFixed(2)} USD</span>
              <span className="new-price text-gradient-ai">Precio Oferta: ${activeCampaign.price.toFixed(2)} USD</span>
            </div>

            <div className="poster-footer">
              <span className="footer-tag">Código: {activeCampaign.code}</span>
              <span className="footer-stock">Solo {selectedProduct.stock} uds disponibles</span>
            </div>
          </div>
        </div>
      </div>
      <div className="poster-actions">
        <button className="btn-poster-action bg-gradient-ai" onClick={() => alert('¡Descargando afiche PNG de alta definición!')}>
          📥 Descargar Afiche PNG (HD)
        </button>
        <a 
          href={simulatedWaLink} 
          target="_blank" 
          className="btn-poster-action secondary" 
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
        >
          💬 Simular Compra en WhatsApp
        </a>
      </div>
    </div>
  );
}
