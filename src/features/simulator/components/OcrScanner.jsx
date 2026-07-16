// filepath: src/features/simulator/components/OcrScanner.jsx
import React from 'react';

export default function OcrScanner({ isScanning, scanResult, onScan }) {
  return (
    <div className="ocr-scanner-box" style={{ marginBottom: '2rem', padding: '1.25rem', backgroundColor: 'var(--bg-white)', border: '1px solid var(--border-slate-200)', borderRadius: 'var(--radius-md)' }}>
      <h4 style={{ fontSize: '0.9rem', marginBottom: '8px', color: 'var(--primary-accent)', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>📑</span> Escáner Multimodal de Facturas (Demo)
      </h4>
      <p style={{ fontSize: '0.75rem', color: '--text-muted', marginBottom: '12px' }}>
        Simula la digitalización de una factura de un proveedor. La IA extraerá los datos e inyectará el producto automáticamente al simulador financiero.
      </p>
      <button 
        type="button" 
        onClick={onScan} 
        disabled={isScanning}
        style={{
          width: '100%',
          padding: '0.65rem',
          backgroundColor: 'var(--bg-slate-50)',
          border: '1.5px dashed var(--emerald-brand)',
          color: 'var(--emerald-dark)',
          fontWeight: '600',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.85rem'
        }}
      >
        {isScanning ? '⏳ Analizando factura con OCR Semántico...' : '📸 Subir Factura / Remisión de Almacén'}
      </button>
      {scanResult && (
        <div style={{ marginTop: '10px', padding: '8px', backgroundColor: 'rgba(16, 185, 129, 0.08)', borderRadius: '4px', fontSize: '0.75rem', border: '1px solid var(--emerald-brand)' }}>
          <strong>✅ Factura procesada correctamente:</strong> {scanResult.name} (SKU: {scanResult.sku}). Costo Unitario de ${scanResult.costPrice.toFixed(2)} registrado.
        </div>
      )}
    </div>
  );
}
