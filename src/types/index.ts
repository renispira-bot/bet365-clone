export type SportId =
  | 'football'
  | 'tennis'
  | 'basketball'
  | 'ice-hockey'
  | 'cricket'
  | 'baseball'
  | 'volleyball'
  | 'handball'
  | 'rugby'
  | 'boxing'
  | 'darts'
  | 'esports';

export type Sport = {
  id: SportId;
  name: string;
  emoji: string;
  matchCount: number;
  leagues: League[];
};

export type League = {
  id: string;
  name: string;
  country: string;
  matchCount: number;
};

export type Match = {
  id: string;
  sportId: SportId;
  leagueId: string;
  leagueName: string;
  homeTeam: string;
  awayTeam: string;
  startTime: string;
  odds: Odds;
  marketsCount: number;
};

export type Odds = {
  home: number;
  draw: number | null;
  away: number;
};

export type LiveMatch = Match & {
  homeScore: number;
  awayScore: number;
  minute: number;
  period: string;
};

export type BetSelection = {
  id: string;
  matchId: string;
  matchLabel: string;
  market: string;
  selection: string;
  odds: number;
};

export type Promotion = {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  bgColor: string;
};

export type PopularBet = {
  id: string;
  title: string;
  selections: { matchLabel: string; pick: string; odds: number }[];
  totalOdds: number;
};

export type ViewType = 'home' | 'in-play' | 'sport';
export type SubViewType = 'all' | 'today' | 'tomorrow' | 'upcoming';
export type ModalType = 'login' | 'register' | null;

export type BetSlipAction =
  | { type: 'ADD_SELECTION'; payload: BetSelection }
  | { type: 'REMOVE_SELECTION'; payload: string }
  | { type: 'CLEAR_ALL' }
  | { type: 'UPDATE_ODDS'; payload: { id: string; odds: number } };
