import type { Promotion } from '../types';

export const promotions: Promotion[] = [
  {
    id: 'promo1',
    title: 'Ndërto Bastin',
    subtitle: 'Kombino zgjedhjet nga e njëjta ndeshje. Ndërto bastin tënd si të duash!',
    ctaText: 'Ndërto Bastin',
    bgColor: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%)',
  },
  {
    id: 'promo2',
    title: '2 Gola Përpara - Pagesë e Hershme',
    subtitle: 'Nëse skuadra juaj shkon 2 gola përpara, ne e paguajmë bastin tuaj si fitues!',
    ctaText: 'Mëso Më Shumë',
    bgColor: 'linear-gradient(135deg, #0d3810 0%, #1b5e20 50%, #2e7d32 100%)',
  },
  {
    id: 'promo3',
    title: 'Rritje Akumulatori',
    subtitle: 'Merr deri në 70% ekstra në akumulatorët tuaj. Sa më shumë zgjedhje, aq më e madhe rritja!',
    ctaText: 'Rrit Tani',
    bgColor: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
  },
  {
    id: 'promo4',
    title: 'Baste Live',
    subtitle: 'Vëndos baste në mijëra ngjarje live çdo javë me kuotat më të mira.',
    ctaText: 'Luaj Live',
    bgColor: 'linear-gradient(135deg, #b71c1c 0%, #c62828 50%, #d32f2f 100%)',
  },
];
