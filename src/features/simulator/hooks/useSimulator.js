// filepath: src/features/simulator/hooks/useSimulator.js
import { useState, useRef } from 'react';
import { PRESETS } from '../data/presets';

export function useSimulator() {
  const [selectedProduct, setSelectedProduct] = useState(PRESETS[0]);
  const [discountStrategy, setDiscountStrategy] = useState('recuperar');
  
  // Custom Product States
  const [customName, setCustomName] = useState('');
  const [customCategory, setCustomCategory] = useState('Abarrotes / Gourmet');
  const [customStock, setCustomStock] = useState(100);
  const [customCost, setCustomCost] = useState(12.00);
  const [customPrice, setCustomPrice] = useState(25.00);
  const [customDays, setCustomDays] = useState(90);
  
  // AI Generator Animation States
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [generationText, setGenerationText] = useState('');
  const [showResults, setShowResults] = useState(false);
  
  // OCR Scanner Simulado State
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const resultsRef = useRef(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setGenerationProgress(0);
    setShowResults(false);
    
    const steps = [
      { progress: 15, text: '🔍 CFO de Bolsillo: Leyendo base de datos e identificando rotación crítica...' },
      { progress: 40, text: '📊 Analítica Contable: Calculando costo marginal de adquisición vs precio óptimo...' },
      { progress: 65, text: '✍️ Redacción de Conversión: Redactando copys con códigos de tracking para WhatsApp...' },
      { progress: 85, text: '🎨 Síntesis de Difusión: Generando el afiche publicitario optimizado con Inteligencia Artificial...' },
      { progress: 100, text: '✅ Atribución Lista: Generando enlace wa.link y código de rastreo de ROAS.' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setGenerationProgress(steps[currentStep].progress);
        setGenerationText(steps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsGenerating(false);
          setShowResults(true);
          setTimeout(() => {
            resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }, 600);
      }
    }, 900);
  };

  const handleScanInvoice = () => {
    setIsScanning(true);
    setScanResult(null);
    
    setTimeout(() => {
      setIsScanning(false);
      const randomProduct = {
        name: 'Harina de Almendras Orgánica 1Kg',
        category: 'Abarrotes / Gourmet',
        sku: 'AB-ALM-201',
        stock: 120,
        costPrice: 6.20,
        originalPrice: 13.50,
        daysInWarehouse: 65,
        capitalTiedUp: 744.00,
        reason: 'Rotación detenida, excedente por sobre-pedido registrado en la factura #F-29402.'
      };
      setScanResult(randomProduct);
      
      const newProduct = {
        id: 'ocr-' + Date.now(),
        name: randomProduct.name,
        category: randomProduct.category,
        sku: randomProduct.sku,
        stock: randomProduct.stock,
        costPrice: randomProduct.costPrice,
        originalPrice: randomProduct.originalPrice,
        daysInWarehouse: randomProduct.daysInWarehouse,
        capitalTiedUp: randomProduct.capitalTiedUp,
        reason: randomProduct.reason,
        image: null,
        gradientTheme: 'linear-gradient(135deg, #34d399 0%, #065f46 100%)',
        campaigns: {
          recuperar: {
            discountPercent: 30,
            price: 9.45,
            code: 'ADV-ALM-30',
            title: '🌾 Harina de Almendras Orgánica con 30% OFF',
            copy: `Disfruta de la mejor repostería saludable. Harina de Almendras Orgánica sin gluten. Calidad de exportación ahora disponible con un 30% de descuento. Usa el código ADV-ALM-30 en tu orden por WhatsApp. ¡Solo por tiempo limitado!`,
            strategy: 'Liquidación moderada de inventario de abarrotes. Recupera espacio en almacén.',
            roi: 'Recupera el costo de adquisición original ($6.20) y obtiene un margen neto del 34% ($3.25 por unidad). Recupera $1,134 USD totales.',
            proyectedROAS: 'ROAS Proyectado: 5.1x.'
          },
          liquidacion: {
            discountPercent: 50,
            price: 6.75,
            code: 'ADV-ALM-50',
            title: '🚨 Liquidación de Stock: Harina de Almendras 50%',
            copy: `¡Última oportunidad! Harina de Almendras Orgánica al 50% de descuento directo. Ideal para tu dieta keto o recetas saludables. Pídela directo a nuestro WhatsApp usando el código ADV-ALM-50. ¡Excedente limitado!`,
            strategy: 'Liquidación agresiva. Venta a precio cercano al costo para liberar liquidez.',
            roi: 'Venta al costo operativo ($6.75 venta vs $6.20 costo). Recupera capital de trabajo de forma inmediata, minimizando la merma operativa.',
            proyectedROAS: 'ROAS Proyectado: 3.5x.'
          }
        }
      };
      
      setSelectedProduct(newProduct);
    }, 2000);
  };

  const handleAddCustomProduct = (e) => {
    e.preventDefault();
    if (!customName.trim()) return;

    const discountPerc = discountStrategy === 'recuperar' ? 30 : 50;
    const finalPrice = Number((customPrice * (1 - discountPerc / 100)).toFixed(2));
    const cost = Number(customCost);
    const regular = Number(customPrice);
    const stockQty = Number(customStock);
    const days = Number(customDays);
    
    const newProduct = {
      id: 'custom-' + Date.now(),
      name: customName,
      category: customCategory,
      sku: 'US-' + customCategory.substring(0,2).toUpperCase() + '-' + Math.floor(100 + Math.random() * 900),
      stock: stockQty,
      costPrice: cost,
      originalPrice: regular,
      daysInWarehouse: days,
      capitalTiedUp: Number((stockQty * cost).toFixed(2)),
      reason: `Producto en almacén por más de ${days} días con flujo estancado.`,
      image: null, 
      gradientTheme: customCategory.includes('Ropa') 
        ? 'linear-gradient(135deg, #4f46e5 0%, #1e1b4b 100%)' 
        : 'linear-gradient(135deg, #10b981 0%, #064e3b 100%)', 
      campaigns: {
        recuperar: {
          discountPercent: discountPerc,
          price: finalPrice,
          code: 'ADV-PROD-30',
          title: `🔥 Oferta Especial: ${customName}`,
          copy: `⚡ ¡Gran Oportunidad! Consigue el mejor precio en ${customName}. Un producto de excelente calidad, ahora disponible con un ${discountPerc}% de descuento por tiempo limitado. Ideal para optimizar tu compra. ¡Pídelo hoy por WhatsApp usando el código ADV-PROD-30!`,
          strategy: `Estrategia de Movilidad de Inventario para ${customName}. Dirigida a recuperar la liquidez del stock inactivo.`,
          roi: `Recupera el costo de adquisición original ($${cost.toFixed(2)}) y genera un margen neto de ganancia. Libera capital atrapado.`,
          proyectedROAS: 'ROAS Proyectado: 4.5x.'
        },
        liquidacion: {
          discountPercent: 55,
          price: Number((regular * 0.45).toFixed(2)),
          code: 'ADV-PROD-55',
          title: `🚨 Liquidación Total: ${customName} al 55%`,
          copy: `¡Gran liquidación de inventario! Llévate ${customName} con un descuento del 55% sobre su precio regular. Ideal si buscas la mejor relación calidad-precio. Unidades limitadas disponibles en almacén. ¡Ordena por WhatsApp usando el código ADV-PROD-55!`,
          strategy: `Campaña agresiva de recuperación de capital al costo base. Maximiza la visibilidad de liquidación.`,
          roi: `Venta al costo operativo directo. Evita pérdidas por almacenamiento prolongado e inmovilización de capital.`,
          proyectedROAS: 'ROAS Proyectado: 3.0x.'
        }
      }
    };

    setSelectedProduct(newProduct);
    setCustomName('');
  };

  const activeCampaign = selectedProduct.campaigns[discountStrategy] || selectedProduct.campaigns['recuperar'];
  const simulatedWaLink = `https://wa.me/51999999999?text=Hola,%20me%20interesa%20la%20oferta%20de%20${encodeURIComponent(selectedProduct.name)}%20con%20el%20c%C3%B3digo%20${activeCampaign.code}`;

  return {
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
  };
}
