export interface Question {
  id: string;
  title: string;
  description: string;
  tags: string[];
  location: string;
  urgency: 'Baja' | 'Media' | 'Alta';
  createdAt: string;
  author: string;
}

export interface Answer {
  id: string;
  questionId: string;
  author: string;
  cause: string;
  steps: string[];
  workedCount: number;
  notWorkedCount: number;
  isBestAnswer: boolean;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  location: string;
  successRate: number;
  image: string;
  description: string;
}

export const mockQuestions: Question[] = [
  {
    id: '1',
    title: 'Baja presión de agua en mi departamento',
    description: 'Desde hace dos días sale un hilo de agua en la ducha y lavamanos. Vivo en un cuarto piso.',
    tags: ['Gasfitería', 'Hogar', 'Agua'],
    location: 'Santiago, Providencia',
    urgency: 'Alta',
    createdAt: '2024-03-28',
    author: 'Juan Pérez'
  },
  {
    id: '2',
    title: 'Cómo configurar router dual band',
    description: 'Compré un router nuevo pero no logro que los dispositivos vean la red 5G.',
    tags: ['Tecnología', 'Internet', 'Redes'],
    location: 'Remoto',
    urgency: 'Media',
    createdAt: '2024-03-27',
    author: 'María González'
  },
  {
    id: '3',
    title: 'Filtración en el techo por lluvia',
    description: 'Apareció una mancha de humedad en el living después de la última tormenta.',
    tags: ['Construcción', 'Techo', 'Humedad'],
    location: 'Viña del Mar',
    urgency: 'Alta',
    createdAt: '2024-03-26',
    author: 'Ricardo Soto'
  }
];

export const mockAnswers: Answer[] = [
  {
    id: '101',
    questionId: '1',
    author: 'Carlos Técnico',
    cause: 'Filtros de los aireadores obstruidos por sarro o sedimentos en la cañería principal.',
    steps: [
      'Desenroscar la punta de la llave (aireador).',
      'Sumergir la pieza en vinagre blanco por 30 minutos.',
      'Cepillar los restos de sarro.',
      'Volver a instalar y probar el flujo.'
    ],
    workedCount: 45,
    notWorkedCount: 3,
    isBestAnswer: true
  },
  {
    id: '102',
    questionId: '1',
    author: 'Vecino solidario',
    cause: 'Llave de paso general parcialmente cerrada.',
    steps: [
      'Ubicación de la llave de paso (detrás del WC o en nicho exterior).',
      'Girar en sentido antihorario hasta el tope.',
      'Verificar si la presión vuelve a la normalidad.'
    ],
    workedCount: 12,
    notWorkedCount: 1,
    isBestAnswer: false
  }
];

export const mockServices: Service[] = [
  {
    id: 's1',
    name: 'Roberto Instalaciones',
    category: 'Gasfitería',
    location: 'Providencia, Santiago',
    successRate: 98,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=200&h=200',
    description: 'Especialista en redes de agua y climatización.'
  },
  {
    id: 's2',
    name: 'Tech Solutions',
    category: 'Tecnología',
    location: 'Todo el país',
    successRate: 95,
    image: 'https://images.unsplash.com/photo-1551033541-20701c1938bc?auto=format&fit=crop&q=80&w=200&h=200',
    description: 'Configuración de redes y soporte remoto.'
  },
  {
    id: 's3',
    name: 'Maiten Construcciones',
    category: 'Construcción',
    location: 'Viña del Mar',
    successRate: 92,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=200&h=200',
    description: 'Reparación de techumbres y aislación.'
  }
];
