// filepath: src/features/simulator/components/StrategySelector.jsx
import React from 'react';

export default function StrategySelector({ discountStrategy, setDiscountStrategy }) {
  return (
    <div className="strategy-selection-box">
      <h3>Paso 2: Define la Estrategia Financiera</h3>
      <div className="strategy-options">
        <label className={`strategy-option-card ${discountStrategy === 'recuperar' ? 'active' : ''}`}>
          <input 
            type="radio" 
            name="strategy" 
            value="recuperar" 
            checked={discountStrategy === 'recuperar'}
            onChange={() => setDiscountStrategy('recuperar')}
          />
          <div className="strategy-option-content">
            <strong>Recuperar Inversión (Descuento del ~30-35%)</strong>
            <span>Conserva un margen de ganancia neto sobre el costo de adquisición original. Mensaje de oportunidad premium.</span>
          </div>
        </label>
        <label className={`strategy-option-card ${discountStrategy === 'liquidacion' ? 'active' : ''}`}>
          <input 
            type="radio" 
            name="strategy" 
            value="liquidacion" 
            checked={discountStrategy === 'liquidacion'}
            onChange={() => setDiscountStrategy('liquidacion')}
          />
          <div className="strategy-option-content">
            <strong>Liquidación Acelerada (Descuento del ~50-55%)</strong>
            <span>Venta a precio muy cercano al costo operativo. Objetivo: obtener liquidez inmediata y frenar la asfixia de caja.</span>
          </div>
        </label>
      </div>
    </div>
  );
}
