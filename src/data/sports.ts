import type { Sport } from '../types';

export const sports: Sport[] = [
  {
    id: 'football',
    name: 'Football',
    emoji: '\u26BD',
    matchCount: 142,
    leagues: [
      { id: 'epl', name: 'Premier League', country: 'England', matchCount: 10 },
      { id: 'laliga', name: 'La Liga', country: 'Spain', matchCount: 10 },
      { id: 'bundesliga', name: 'Bundesliga', country: 'Germany', matchCount: 9 },
      { id: 'seriea', name: 'Serie A', country: 'Italy', matchCount: 10 },
      { id: 'ligue1', name: 'Ligue 1', country: 'France', matchCount: 9 },
      { id: 'ucl', name: 'Champions League', country: 'Europe', matchCount: 8 },
      { id: 'uel', name: 'Europa League', country: 'Europe', matchCount: 8 },
    ],
  },
  {
    id: 'tennis',
    name: 'Tennis',
    emoji: '\uD83C\uDFBE',
    matchCount: 86,
    leagues: [
      { id: 'atp', name: 'ATP Tour', country: 'World', matchCount: 32 },
      { id: 'wta', name: 'WTA Tour', country: 'World', matchCount: 28 },
      { id: 'grandslam', name: 'Grand Slam', country: 'World', matchCount: 26 },
    ],
  },
  {
    id: 'basketball',
    name: 'Basketball',
    emoji: '\uD83C\uDFC0',
    matchCount: 54,
    leagues: [
      { id: 'nba', name: 'NBA', country: 'USA', matchCount: 15 },
      { id: 'euroleague', name: 'EuroLeague', country: 'Europe', matchCount: 12 },
      { id: 'ncaa', name: 'NCAA', country: 'USA', matchCount: 27 },
    ],
  },
  {
    id: 'ice-hockey',
    name: 'Ice Hockey',
    emoji: '\uD83C\uDFD2',
    matchCount: 38,
    leagues: [
      { id: 'nhl', name: 'NHL', country: 'USA/Canada', matchCount: 16 },
      { id: 'khl', name: 'KHL', country: 'Russia', matchCount: 12 },
      { id: 'shl', name: 'SHL', country: 'Sweden', matchCount: 10 },
    ],
  },
  {
    id: 'cricket',
    name: 'Cricket',
    emoji: '\uD83C\uDFCF',
    matchCount: 22,
    leagues: [
      { id: 'ipl', name: 'IPL', country: 'India', matchCount: 8 },
      { id: 'intl', name: 'International', country: 'World', matchCount: 14 },
    ],
  },
  {
    id: 'baseball',
    name: 'Baseball',
    emoji: '\u26BE',
    matchCount: 30,
    leagues: [
      { id: 'mlb', name: 'MLB', country: 'USA', matchCount: 15 },
      { id: 'npb', name: 'NPB', country: 'Japan', matchCount: 15 },
    ],
  },
  {
    id: 'volleyball',
    name: 'Volleyball',
    emoji: '\uD83C\uDFD0',
    matchCount: 18,
    leagues: [
      { id: 'vnl', name: 'Nations League', country: 'World', matchCount: 10 },
      { id: 'cev', name: 'CEV Champions League', country: 'Europe', matchCount: 8 },
    ],
  },
  {
    id: 'handball',
    name: 'Handball',
    emoji: '\uD83E\uDD3E',
    matchCount: 16,
    leagues: [
      { id: 'ehf', name: 'EHF Champions League', country: 'Europe', matchCount: 8 },
      { id: 'bundesliga-hb', name: 'Bundesliga', country: 'Germany', matchCount: 8 },
    ],
  },
  {
    id: 'rugby',
    name: 'Rugby Union',
    emoji: '\uD83C\uDFC9',
    matchCount: 14,
    leagues: [
      { id: 'sixnations', name: 'Six Nations', country: 'Europe', matchCount: 6 },
      { id: 'superrugby', name: 'Super Rugby', country: 'World', matchCount: 8 },
    ],
  },
  {
    id: 'boxing',
    name: 'Boxing',
    emoji: '\uD83E\uDD4A',
    matchCount: 8,
    leagues: [
      { id: 'boxing-main', name: 'Boxing Events', country: 'World', matchCount: 8 },
    ],
  },
  {
    id: 'darts',
    name: 'Darts',
    emoji: '\uD83C\uDFAF',
    matchCount: 12,
    leagues: [
      { id: 'pdc', name: 'PDC Events', country: 'World', matchCount: 12 },
    ],
  },
  {
    id: 'esports',
    name: 'Esports',
    emoji: '\uD83C\uDFAE',
    matchCount: 24,
    leagues: [
      { id: 'csgo', name: 'CS2', country: 'World', matchCount: 8 },
      { id: 'lol', name: 'League of Legends', country: 'World', matchCount: 8 },
      { id: 'dota2', name: 'Dota 2', country: 'World', matchCount: 8 },
    ],
  },
];
