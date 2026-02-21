import type { PopularBet } from '../types';

export const popularBets: PopularBet[] = [
  {
    id: 'pb1',
    title: 'Trefish Premier League',
    selections: [
      { matchLabel: 'Man City vs Arsenal', pick: 'Man City', odds: 1.85 },
      { matchLabel: 'Liverpool vs Chelsea', pick: 'Liverpool', odds: 1.72 },
      { matchLabel: 'Newcastle vs Aston Villa', pick: 'Newcastle', odds: 2.00 },
    ],
    totalOdds: 6.36,
  },
  {
    id: 'pb2',
    title: 'Akumulator Europian',
    selections: [
      { matchLabel: 'Real Madrid vs Barcelona', pick: 'Real Madrid', odds: 2.30 },
      { matchLabel: 'Bayern vs Dortmund', pick: 'Bayern Munich', odds: 1.55 },
      { matchLabel: 'PSG vs Bayern Munich', pick: 'Barazim', odds: 3.40 },
    ],
    totalOdds: 12.13,
  },
  {
    id: 'pb3',
    title: 'Dyshe Tenisi',
    selections: [
      { matchLabel: 'Djokovic vs Alcaraz', pick: 'C. Alcaraz', odds: 1.75 },
      { matchLabel: 'Sinner vs Medvedev', pick: 'J. Sinner', odds: 1.55 },
    ],
    totalOdds: 2.71,
  },
  {
    id: 'pb4',
    title: 'Kombinim NBA',
    selections: [
      { matchLabel: 'Lakers vs Celtics', pick: 'Boston Celtics', odds: 1.70 },
      { matchLabel: 'Warriors vs Bucks', pick: 'Golden State', odds: 1.95 },
      { matchLabel: 'Nuggets vs Suns', pick: 'Denver Nuggets', odds: 1.80 },
    ],
    totalOdds: 5.97,
  },
  {
    id: 'pb5',
    title: 'Speciale Six Nations',
    selections: [
      { matchLabel: 'Angli vs Francë', pick: 'Francë', odds: 1.55 },
      { matchLabel: 'Irlandë vs Uells', pick: 'Irlandë', odds: 1.15 },
    ],
    totalOdds: 1.78,
  },
  {
    id: 'pb6',
    title: 'Akumulator i së Premtes',
    selections: [
      { matchLabel: 'Everton vs Wolves', pick: 'Everton', odds: 1.55 },
      { matchLabel: 'Atletico vs Sevilla', pick: 'Atletico Madrid', odds: 1.65 },
      { matchLabel: 'Navi vs FaZe', pick: 'Navi', odds: 1.65 },
      { matchLabel: 'Miami vs Brooklyn', pick: 'Miami Heat', odds: 1.40 },
    ],
    totalOdds: 5.91,
  },
];
