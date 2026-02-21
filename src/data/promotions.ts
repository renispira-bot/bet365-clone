import type { Promotion } from '../types';

export const promotions: Promotion[] = [
  {
    id: 'promo1',
    title: 'Bet Builder',
    subtitle: 'Combine selections from the same match. Build your bet your way!',
    ctaText: 'Build Your Bet',
    bgColor: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%)',
  },
  {
    id: 'promo2',
    title: '2 Goals Ahead Early Payout',
    subtitle: 'If your team goes 2 goals ahead, we pay out your bet as a winner!',
    ctaText: 'Learn More',
    bgColor: 'linear-gradient(135deg, #0d3810 0%, #1b5e20 50%, #2e7d32 100%)',
  },
  {
    id: 'promo3',
    title: 'Acca Boost',
    subtitle: 'Get up to 70% extra on your accumulators. The more selections, the bigger the boost!',
    ctaText: 'Boost Now',
    bgColor: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
  },
  {
    id: 'promo4',
    title: 'In-Play Betting',
    subtitle: 'Bet on thousands of live events every week with the best live odds.',
    ctaText: 'Bet In-Play',
    bgColor: 'linear-gradient(135deg, #b71c1c 0%, #c62828 50%, #d32f2f 100%)',
  },
];
