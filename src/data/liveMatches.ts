import type { LiveMatch } from '../types';

export const liveMatches: LiveMatch[] = [
  {
    id: 'live1', sportId: 'football', leagueId: 'epl', leagueName: 'England - Premier League',
    homeTeam: 'Everton', awayTeam: 'Wolves', startTime: '15:00',
    homeScore: 1, awayScore: 0, minute: 34, period: '1st Half',
    odds: { home: 1.55, draw: 4.00, away: 6.50 }, marketsCount: 82,
  },
  {
    id: 'live2', sportId: 'football', leagueId: 'epl', leagueName: 'England - Premier League',
    homeTeam: 'Fulham', awayTeam: 'Bournemouth', startTime: '15:00',
    homeScore: 2, awayScore: 2, minute: 67, period: '2nd Half',
    odds: { home: 3.20, draw: 2.80, away: 2.60 }, marketsCount: 78,
  },
  {
    id: 'live3', sportId: 'football', leagueId: 'laliga', leagueName: 'Spain - La Liga',
    homeTeam: 'Valencia', awayTeam: 'Real Betis', startTime: '16:00',
    homeScore: 0, awayScore: 1, minute: 52, period: '2nd Half',
    odds: { home: 4.50, draw: 3.40, away: 1.75 }, marketsCount: 75,
  },
  {
    id: 'live4', sportId: 'tennis', leagueId: 'atp', leagueName: 'ATP - Indian Wells',
    homeTeam: 'R. Nadal', awayTeam: 'A. Rublev', startTime: '13:00',
    homeScore: 1, awayScore: 1, minute: 0, period: '3rd Set',
    odds: { home: 2.30, draw: null, away: 1.65 }, marketsCount: 28,
  },
  {
    id: 'live5', sportId: 'basketball', leagueId: 'nba', leagueName: 'USA - NBA',
    homeTeam: 'Miami Heat', awayTeam: 'Brooklyn Nets', startTime: '00:30',
    homeScore: 78, awayScore: 72, minute: 0, period: 'Q3',
    odds: { home: 1.40, draw: null, away: 3.00 }, marketsCount: 45,
  },
  {
    id: 'live6', sportId: 'basketball', leagueId: 'euroleague', leagueName: 'Europe - EuroLeague',
    homeTeam: 'Panathinaikos', awayTeam: 'Maccabi Tel Aviv', startTime: '19:00',
    homeScore: 45, awayScore: 42, minute: 0, period: 'Q2',
    odds: { home: 1.55, draw: null, away: 2.45 }, marketsCount: 38,
  },
  {
    id: 'live7', sportId: 'ice-hockey', leagueId: 'nhl', leagueName: 'USA/Canada - NHL',
    homeTeam: 'Tampa Bay Lightning', awayTeam: 'Florida Panthers', startTime: '00:00',
    homeScore: 2, awayScore: 3, minute: 0, period: '3rd Period',
    odds: { home: 3.50, draw: null, away: 1.35 }, marketsCount: 32,
  },
  {
    id: 'live8', sportId: 'football', leagueId: 'bundesliga', leagueName: 'Germany - Bundesliga',
    homeTeam: 'Wolfsburg', awayTeam: 'Frankfurt', startTime: '15:30',
    homeScore: 1, awayScore: 1, minute: 78, period: '2nd Half',
    odds: { home: 3.40, draw: 2.50, away: 2.40 }, marketsCount: 68,
  },
  {
    id: 'live9', sportId: 'esports', leagueId: 'csgo', leagueName: 'CS2 - BLAST Premier',
    homeTeam: 'Vitality', awayTeam: 'Astralis', startTime: '17:00',
    homeScore: 1, awayScore: 0, minute: 0, period: 'Map 2',
    odds: { home: 1.30, draw: null, away: 3.40 }, marketsCount: 15,
  },
  {
    id: 'live10', sportId: 'tennis', leagueId: 'wta', leagueName: 'WTA - Indian Wells',
    homeTeam: 'J. Pegula', awayTeam: 'M. Keys', startTime: '14:00',
    homeScore: 0, awayScore: 1, minute: 0, period: '2nd Set',
    odds: { home: 2.60, draw: null, away: 1.50 }, marketsCount: 24,
  },
];
