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

export type ViewType = 'home' | 'in-play' | 'sport' | 'casino';
export type SubViewType = 'all' | 'today' | 'tomorrow' | 'upcoming';
export type ModalType = 'login' | 'register' | null;
export type BetSlipTab = 'single' | 'multiple';

export type BetSlipAction =
  | { type: 'ADD_SELECTION'; payload: BetSelection }
  | { type: 'REMOVE_SELECTION'; payload: string }
  | { type: 'CLEAR_ALL' }
  | { type: 'UPDATE_ODDS'; payload: { id: string; odds: number } };

// Match extras
export type FormResult = 'W' | 'D' | 'L';

export type MatchExtras = {
  matchId: string;
  homeForm: FormResult[];
  awayForm: FormResult[];
  homePosition: number;
  awayPosition: number;
  overUnder25: { over: number; under: number };
  btts: { yes: number; no: number };
};

// Live match stats
export type LiveMatchStats = {
  matchId: string;
  homePossession: number;
  awayPossession: number;
  homeShots: number;
  awayShots: number;
  homeCorners: number;
  awayCorners: number;
};

// Casino types
export type CasinoCategory = 'all' | 'popular' | 'new' | 'jackpot' | 'table';

export type CasinoGame = {
  id: string;
  name: string;
  provider: string;
  category: CasinoCategory;
  gradient: string;
  pattern?: string;
  isNew?: boolean;
  jackpotAmount?: string;
};
