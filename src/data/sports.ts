import type { Sport } from '../types';

export const sports: Sport[] = [
  {
    id: 'football',
    name: 'Futboll',
    emoji: '\u26BD',
    matchCount: 142,
    leagues: [
      { id: 'epl', name: 'Premier League', country: 'Angli', matchCount: 10 },
      { id: 'laliga', name: 'La Liga', country: 'Spanjë', matchCount: 10 },
      { id: 'bundesliga', name: 'Bundesliga', country: 'Gjermani', matchCount: 9 },
      { id: 'seriea', name: 'Serie A', country: 'Itali', matchCount: 10 },
      { id: 'ligue1', name: 'Ligue 1', country: 'Francë', matchCount: 9 },
      { id: 'ucl', name: 'Champions League', country: 'Europë', matchCount: 8 },
      { id: 'uel', name: 'Europa League', country: 'Europë', matchCount: 8 },
    ],
  },
  {
    id: 'tennis',
    name: 'Tenis',
    emoji: '\uD83C\uDFBE',
    matchCount: 86,
    leagues: [
      { id: 'atp', name: 'ATP Tour', country: 'Botë', matchCount: 32 },
      { id: 'wta', name: 'WTA Tour', country: 'Botë', matchCount: 28 },
      { id: 'grandslam', name: 'Grand Slam', country: 'Botë', matchCount: 26 },
    ],
  },
  {
    id: 'basketball',
    name: 'Basketboll',
    emoji: '\uD83C\uDFC0',
    matchCount: 54,
    leagues: [
      { id: 'nba', name: 'NBA', country: 'SHBA', matchCount: 15 },
      { id: 'euroleague', name: 'EuroLeague', country: 'Europë', matchCount: 12 },
      { id: 'ncaa', name: 'NCAA', country: 'SHBA', matchCount: 27 },
    ],
  },
  {
    id: 'ice-hockey',
    name: 'Hokej mbi Akull',
    emoji: '\uD83C\uDFD2',
    matchCount: 38,
    leagues: [
      { id: 'nhl', name: 'NHL', country: 'SHBA/Kanada', matchCount: 16 },
      { id: 'khl', name: 'KHL', country: 'Rusi', matchCount: 12 },
      { id: 'shl', name: 'SHL', country: 'Suedi', matchCount: 10 },
    ],
  },
  {
    id: 'cricket',
    name: 'Kriket',
    emoji: '\uD83C\uDFCF',
    matchCount: 22,
    leagues: [
      { id: 'ipl', name: 'IPL', country: 'Indi', matchCount: 8 },
      { id: 'intl', name: 'Ndërkombëtar', country: 'Botë', matchCount: 14 },
    ],
  },
  {
    id: 'baseball',
    name: 'Bejsboll',
    emoji: '\u26BE',
    matchCount: 30,
    leagues: [
      { id: 'mlb', name: 'MLB', country: 'SHBA', matchCount: 15 },
      { id: 'npb', name: 'NPB', country: 'Japoni', matchCount: 15 },
    ],
  },
  {
    id: 'volleyball',
    name: 'Volejboll',
    emoji: '\uD83C\uDFD0',
    matchCount: 18,
    leagues: [
      { id: 'vnl', name: 'Liga e Kombeve', country: 'Botë', matchCount: 10 },
      { id: 'cev', name: 'CEV Champions League', country: 'Europë', matchCount: 8 },
    ],
  },
  {
    id: 'handball',
    name: 'Hendboll',
    emoji: '\uD83E\uDD3E',
    matchCount: 16,
    leagues: [
      { id: 'ehf', name: 'EHF Champions League', country: 'Europë', matchCount: 8 },
      { id: 'bundesliga-hb', name: 'Bundesliga', country: 'Gjermani', matchCount: 8 },
    ],
  },
  {
    id: 'rugby',
    name: 'Regbi',
    emoji: '\uD83C\uDFC9',
    matchCount: 14,
    leagues: [
      { id: 'sixnations', name: 'Six Nations', country: 'Europë', matchCount: 6 },
      { id: 'superrugby', name: 'Super Rugby', country: 'Botë', matchCount: 8 },
    ],
  },
  {
    id: 'boxing',
    name: 'Boks',
    emoji: '\uD83E\uDD4A',
    matchCount: 8,
    leagues: [
      { id: 'boxing-main', name: 'Ngjarje Boksi', country: 'Botë', matchCount: 8 },
    ],
  },
  {
    id: 'darts',
    name: 'Shigjeta',
    emoji: '\uD83C\uDFAF',
    matchCount: 12,
    leagues: [
      { id: 'pdc', name: 'Ngjarje PDC', country: 'Botë', matchCount: 12 },
    ],
  },
  {
    id: 'esports',
    name: 'Esporte',
    emoji: '\uD83C\uDFAE',
    matchCount: 24,
    leagues: [
      { id: 'csgo', name: 'CS2', country: 'Botë', matchCount: 8 },
      { id: 'lol', name: 'League of Legends', country: 'Botë', matchCount: 8 },
      { id: 'dota2', name: 'Dota 2', country: 'Botë', matchCount: 8 },
    ],
  },
];
