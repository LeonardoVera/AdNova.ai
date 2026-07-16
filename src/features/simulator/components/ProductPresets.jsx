// filepath: src/features/simulator/components/ProductPresets.jsx
import React from 'react';
import { PRESETS } from '../data/presets';

export default function ProductPresets({ selectedProduct, onSelectProduct }) {
  return (
    <div className="presets-list">
      {PRESETS.map((prod) => {
        const isSelected = selectedProduct.id === prod.id;
        const isRed = prod.daysInWarehouse >= 90;
        return (
          <div 
            key={prod.id} 
            className={`preset-item-card ${isSelected ? 'active' : ''}`}
            onClick={() => onSelectProduct(prod)}
          >
            <div className="preset-img-wrapper">
              <img src={prod.image} alt={prod.name} className="preset-thumbnail" />
            </div>
            <div className="preset-details">
              <div className="preset-header">
                <strong className="preset-name">{prod.name}</strong>
                <span className={`days-badge ${isRed ? 'red' : 'amber'}`}>
                  {prod.daysInWarehouse} días en stock
                </span>
              </div>
              <div className="preset-meta">
                <span>Stock: <strong>{prod.stock} uds</strong></span>
                <span>Costo Unitario: <strong>${prod.costPrice.toFixed(2)} USD</strong></span>
                <span>Capital Atrapado: <strong>${prod.capitalTiedUp.toFixed(2)} USD</strong></span>
              </div>
              <p className="preset-reason">⚠️ Motivo: {prod.reason}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
