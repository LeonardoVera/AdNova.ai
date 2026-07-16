// filepath: src/features/simulator/data/presets.js
import gourmetJam from '../../../assets/gourmet_jam.jpg';
import woolJacket from '../../../assets/wool_jacket.jpg';

export const PRESETS = [
  {
    id: 'jam',
    name: 'Mermelada de Fresa Gourmet (Lote Ruby)',
    category: 'Abarrotes / Gourmet',
    sku: 'AB-JAM-083',
    stock: 340,
    costPrice: 4.10,
    originalPrice: 8.50,
    daysInWarehouse: 75,
    capitalTiedUp: 1394.00,
    reason: 'Próxima caducidad (3 meses) y baja velocidad de venta tradicional en góndola.',
    image: gourmetJam,
    gradientTheme: 'linear-gradient(135deg, #f87171 0%, #b91c1c 100%)',
    campaigns: {
      recuperar: {
        discountPercent: 30,
        price: 5.95,
        code: 'ADV-JAM-30',
        title: '🍓 ¡Desayunos Premium a un Precio Increíble!',
        copy: 'Disfruta el sabor auténtico de la Mermelada de Fresa Gourmet Ruby. Elaborada con fruta 100% orgánica seleccionada a mano. Consíguela HOY con un 30% de descuento especial. ¡Perfecta para untar, hornear o regalar! Pocas unidades disponibles en bodega.',
        strategy: 'Oferta de Consumo Acelerado. Objetivo: Liberar espacio en góndola antes de la llegada del nuevo lote de temporada.',
        roi: 'Recupera el costo de adquisición completo ($4.10 por frasco) y genera un margen de ganancia neto del 31% ($1.85 por frasco). Recupera $2,023 USD de capital de trabajo.',
        proyectedROAS: 'ROAS Proyectado: 4.8x (Retorno estimado sobre inversión en pauta publicitaria digital).'
      },
      liquidacion: {
        discountPercent: 50,
        price: 4.25,
        code: 'ADV-JAM-50',
        title: '🚨 Super Liquidación: Mermelada Gourmet al 50%',
        copy: '¡Sabor premium a mitad de precio! Últimos frascos de nuestra Mermelada de Fresa Gourmet Ruby en descuento absoluto. Hecha a mano en pequeños lotes. Llévatela hoy al 50% OFF antes de que se agote. ¡Ideal para reposteros y amantes del buen dulce!',
        strategy: 'Venta Flash de Liquidación. Objetivo: Vaciar stock inmediatamente por cercanía de fecha de consumo preferente y evitar pérdida total.',
        roi: 'Venta al costo operativo directo ($4.25 venta vs $4.10 costo). Salva la inversión original al 100%, evita pérdidas de inventario por caducidad y libera el espacio de almacenamiento.',
        proyectedROAS: 'ROAS Proyectado: 3.2x.'
      }
    }
  },
  {
    id: 'jacket',
    name: 'Abrigo de Lana de Invierno Premium',
    category: 'Moda / Ropa',
    sku: 'MD-WAC-102',
    stock: 85,
    costPrice: 75.00,
    originalPrice: 180.00,
    daysInWarehouse: 120,
    capitalTiedUp: 6375.00,
    reason: 'Fin de la temporada invernal. Capital inmovilizado y espacio ocupado requerido para la colección de Primavera-Verano.',
    image: woolJacket,
    gradientTheme: 'linear-gradient(135deg, #a1a1aa 0%, #27272a 100%)',
    campaigns: {
      recuperar: {
        discountPercent: 35,
        price: 117.00,
        code: 'ADV-COAT-35',
        title: '🧥 Elegancia Invernal: Liquidación Exclusiva',
        copy: 'Viste con distinción sin pagar de más. Nuestro Abrigo de Lana Virgen Premium está disponible con un 35% de descuento por tiempo limitado. Confección italiana, corte atemporal y abrigo térmico superior. Invierte hoy en tu guardarropa de invierno y ahorra.',
        strategy: 'Campaña de Liquidación de Temporada Excedente. Dirigida a compradores inteligentes en busca de ofertas off-season.',
        roi: 'Recupera el costo total de fabricación ($75.00) y genera un margen neto positivo del 35.8% ($42.00 por prenda). Recupera $9,945 USD totales de capital inmovilizado.',
        proyectedROAS: 'ROAS Proyectado: 6.2x.'
      },
      liquidacion: {
        discountPercent: 55,
        price: 81.00,
        code: 'ADV-COAT-55',
        title: '🍂 Venta Final de Temporada: Abrigo Premium -55%',
        copy: '¡Últimas unidades! Llévate nuestro Abrigo de Lana de Invierno Premium con un 55% de descuento imbatible. Calidad de alta costura a una fracción de su costo real. No habrá reposición de este modelo. ¡Adquiere tu clásico ahora!',
        strategy: 'Liquidación de Temporada Agresiva. Venta flash para liberar el 100% de percheros en tienda física.',
        roi: 'Venta al costo operativo base ($81.00 venta vs $75.00 costo). Asegura la recuperación total del costo capital inmovilizado ($6,375 USD) con un margen de seguridad mínimo.',
        proyectedROAS: 'ROAS Proyectado: 4.5x.'
      }
    }
  }
];
