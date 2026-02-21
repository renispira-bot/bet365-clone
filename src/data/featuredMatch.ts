import type { FormResult } from '../types';

export const featuredMatch = {
  id: 'm6',
  homeTeam: 'Real Madrid',
  awayTeam: 'Barcelona',
  league: 'Spain - La Liga',
  startTime: '21:00',
  homeForm: ['W','W','W','D','W'] as FormResult[],
  awayForm: ['W','D','W','W','L'] as FormResult[],
  odds: {
    home: 2.30,
    draw: 3.40,
    away: 2.90,
    over25: 1.55,
    under25: 2.40,
    bttsYes: 1.65,
    bttsNo: 2.15,
  },
};
