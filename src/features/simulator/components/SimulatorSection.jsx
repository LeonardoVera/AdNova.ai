// filepath: src/features/simulator/components/SimulatorSection.jsx
import React from 'react';
import { useSimulator } from '../hooks/useSimulator';
import ProductPresets from './ProductPresets';
import OcrScanner from './OcrScanner';
import CustomProductForm from './CustomProductForm';
import StrategySelector from './StrategySelector';
import CampaignResults from './CampaignResults';
import AiPoster from './AiPoster';

export default function SimulatorSection() {
  const {
    selectedProduct,
    setSelectedProduct,
    discountStrategy,
    setDiscountStrategy,
    customName,
    setCustomName,
    customCategory,
    setCustomCategory,
    customStock,
    setCustomStock,
    customCost,
    setCustomCost,
    customPrice,
    setCustomPrice,
    customDays,
    setCustomDays,
    isGenerating,
    generationProgress,
    generationText,
    showResults,
    handleGenerate,
    isScanning,
    scanResult,
    handleScanInvoice,
    handleAddCustomProduct,
    activeCampaign,
    simulatedWaLink,
    resultsRef
  } = useSimulator();

  return (
    <section id="simulador" className="simulator-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Prueba el Simulador de Campañas AdNova.ai</h2>
          <p>Descubre cómo funciona el diagnóstico financiero, la generación publicitaria y el módulo contable integrados.</p>
        </div>

        <div className="simulator-grid">
          <div className="simulator-setup-card">
            <h3>Paso 1: Selecciona o Escanea tu Inventario</h3>
            
            <ProductPresets 
              selectedProduct={selectedProduct} 
              onSelectProduct={setSelectedProduct} 
            />

            <OcrScanner 
              isScanning={isScanning} 
              scanResult={scanResult} 
              onScan={handleScanInvoice} 
            />

            <CustomProductForm 
              customName={customName}
              setCustomName={setCustomName}
              customCategory={customCategory}
              setCustomCategory={setCustomCategory}
              customDays={customDays}
              setCustomDays={setCustomDays}
              customCost={customCost}
              setCustomCost={setCustomCost}
              customPrice={customPrice}
              setCustomPrice={setCustomPrice}
              customStock={customStock}
              setCustomStock={setCustomStock}
              onSubmit={handleAddCustomProduct}
            />

            <StrategySelector 
              discountStrategy={discountStrategy} 
              setDiscountStrategy={setDiscountStrategy} 
            />

            <button 
              type="button" 
              className="btn-trigger-ai bg-gradient-ai"
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? 'Calculando con adnovaAI...' : '🚀 Generar Campaña y Afiche con IA'}
            </button>

            {isGenerating && (
              <div className="ai-loader-container">
                <div className="ai-loader-bar">
                  <div className="ai-loader-progress bg-gradient-ai" style={{ width: `${generationProgress}%` }}></div>
                </div>
                <div className="ai-loader-info">
                  <span className="ai-loader-spinner"></span>
                  <span className="ai-loader-text">{generationText}</span>
                  <span className="ai-loader-percentage">{generationProgress}%</span>
                </div>
              </div>
            )}
          </div>

          <div className="simulator-results-column" ref={resultsRef}>
            {!showResults && !isGenerating && (
              <div className="results-placeholder">
                <div className="placeholder-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--text-muted)" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <h4>Previsualización de la Campaña</h4>
                <p>Configura o carga tu producto, define tu descuento en el panel izquierdo y haz clic en "Generar Campaña con IA" para calcular las métricas contables y el afiche publicitario.</p>
              </div>
            )}

            {isGenerating && (
              <div className="results-placeholder active-generating">
                <div className="generating-pulse">
                  <div className="pulse-ring"></div>
                  <div className="pulse-core bg-gradient-ai">🤖</div>
                </div>
                <h4>La Inteligencia Artificial está procesando</h4>
                <p>El motor financiero determinista y los modelos de difusión latente están sintetizando la campaña de recuperación...</p>
              </div>
            )}

            {showResults && !isGenerating && (
              <div className="campaign-results-wrapper animate-fade-in">
                <CampaignResults 
                  selectedProduct={selectedProduct} 
                  activeCampaign={activeCampaign} 
                  simulatedWaLink={simulatedWaLink} 
                />

                <AiPoster 
                  selectedProduct={selectedProduct} 
                  activeCampaign={activeCampaign} 
                  simulatedWaLink={simulatedWaLink} 
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
