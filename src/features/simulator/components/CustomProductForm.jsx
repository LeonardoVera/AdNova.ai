// filepath: src/features/simulator/components/CustomProductForm.jsx
import React from 'react';

export default function CustomProductForm({
  customName,
  setCustomName,
  customCategory,
  setCustomCategory,
  customDays,
  setCustomDays,
  customCost,
  setCustomCost,
  customPrice,
  setCustomPrice,
  customStock,
  setCustomStock,
  onSubmit
}) {
  return (
    <div className="custom-product-form-box">
      <h4>✍️ O escribe un producto manualmente:</h4>
      <form onSubmit={onSubmit} className="custom-form">
        <div className="form-group">
          <label>Nombre del Producto:</label>
          <input 
            type="text" 
            placeholder="Ej. Saco de Harina, Vestido de Algodón..." 
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group half">
            <label>Categoría:</label>
            <select value={customCategory} onChange={(e) => setCustomCategory(e.target.value)}>
              <option value="Abarrotes / Gourmet">Abarrotes / Gourmet</option>
              <option value="Moda / Ropa">Moda / Ropa</option>
              <option value="Tecnología / Gadgets">Tecnología / Gadgets</option>
              <option value="Decoración / Hogar">Decoración / Hogar</option>
            </select>
          </div>
          <div className="form-group half">
            <label>Días estancado:</label>
            <input 
              type="number" 
              min="30"
              value={customDays} 
              onChange={(e) => setCustomDays(e.target.value)} 
              required 
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group half">
            <label>Costo de Adquisición ($ USD):</label>
            <input 
              type="number" 
              min="0.1" 
              step="0.01" 
              value={customCost} 
              onChange={(e) => setCustomCost(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group half">
            <label>Precio Venta Regular ($ USD):</label>
            <input 
              type="number" 
              min="0.1" 
              step="0.01" 
              value={customPrice} 
              onChange={(e) => setCustomPrice(e.target.value)} 
              required 
            />
          </div>
        </div>
        <div className="form-group">
          <label>Unidades en Stock:</label>
          <input 
            type="number" 
            min="1" 
            value={customStock} 
            onChange={(e) => setCustomStock(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn-add-custom">
          Cargar Producto en Simulador
        </button>
      </form>
    </div>
  );
}
