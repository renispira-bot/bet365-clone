import type { Match } from '../types';

export const matches: Match[] = [
  // Premier League
  { id: 'm1', sportId: 'football', leagueId: 'epl', leagueName: 'England - Premier League', homeTeam: 'Manchester City', awayTeam: 'Arsenal', startTime: '15:00', odds: { home: 1.85, draw: 3.60, away: 4.20 }, marketsCount: 148 },
  { id: 'm2', sportId: 'football', leagueId: 'epl', leagueName: 'England - Premier League', homeTeam: 'Liverpool', awayTeam: 'Chelsea', startTime: '17:30', odds: { home: 1.72, draw: 3.80, away: 4.75 }, marketsCount: 145 },
  { id: 'm3', sportId: 'football', leagueId: 'epl', leagueName: 'England - Premier League', homeTeam: 'Tottenham', awayTeam: 'Manchester Utd', startTime: '20:00', odds: { home: 2.10, draw: 3.50, away: 3.40 }, marketsCount: 142 },
  { id: 'm4', sportId: 'football', leagueId: 'epl', leagueName: 'England - Premier League', homeTeam: 'Newcastle', awayTeam: 'Aston Villa', startTime: '15:00', odds: { home: 2.00, draw: 3.40, away: 3.60 }, marketsCount: 138 },
  { id: 'm5', sportId: 'football', leagueId: 'epl', leagueName: 'England - Premier League', homeTeam: 'Brighton', awayTeam: 'West Ham', startTime: '15:00', odds: { home: 1.90, draw: 3.50, away: 4.00 }, marketsCount: 135 },

  // La Liga
  { id: 'm6', sportId: 'football', leagueId: 'laliga', leagueName: 'Spain - La Liga', homeTeam: 'Real Madrid', awayTeam: 'Barcelona', startTime: '21:00', odds: { home: 2.30, draw: 3.40, away: 2.90 }, marketsCount: 152 },
  { id: 'm7', sportId: 'football', leagueId: 'laliga', leagueName: 'Spain - La Liga', homeTeam: 'Atletico Madrid', awayTeam: 'Sevilla', startTime: '18:30', odds: { home: 1.65, draw: 3.80, away: 5.50 }, marketsCount: 140 },
  { id: 'm8', sportId: 'football', leagueId: 'laliga', leagueName: 'Spain - La Liga', homeTeam: 'Real Sociedad', awayTeam: 'Villarreal', startTime: '16:00', odds: { home: 2.20, draw: 3.30, away: 3.20 }, marketsCount: 132 },

  // Bundesliga
  { id: 'm9', sportId: 'football', leagueId: 'bundesliga', leagueName: 'Germany - Bundesliga', homeTeam: 'Bayern Munich', awayTeam: 'Borussia Dortmund', startTime: '18:30', odds: { home: 1.55, draw: 4.20, away: 5.50 }, marketsCount: 146 },
  { id: 'm10', sportId: 'football', leagueId: 'bundesliga', leagueName: 'Germany - Bundesliga', homeTeam: 'RB Leipzig', awayTeam: 'Bayer Leverkusen', startTime: '15:30', odds: { home: 2.40, draw: 3.50, away: 2.80 }, marketsCount: 138 },

  // Champions League
  { id: 'm11', sportId: 'football', leagueId: 'ucl', leagueName: 'Europe - Champions League', homeTeam: 'PSG', awayTeam: 'Bayern Munich', startTime: '21:00', odds: { home: 2.50, draw: 3.40, away: 2.70 }, marketsCount: 150 },
  { id: 'm12', sportId: 'football', leagueId: 'ucl', leagueName: 'Europe - Champions League', homeTeam: 'Inter Milan', awayTeam: 'Real Madrid', startTime: '21:00', odds: { home: 2.80, draw: 3.30, away: 2.45 }, marketsCount: 148 },

  // Tennis - ATP
  { id: 'm13', sportId: 'tennis', leagueId: 'atp', leagueName: 'ATP - Australian Open', homeTeam: 'N. Djokovic', awayTeam: 'C. Alcaraz', startTime: '11:00', odds: { home: 2.10, draw: null, away: 1.75 }, marketsCount: 42 },
  { id: 'm14', sportId: 'tennis', leagueId: 'atp', leagueName: 'ATP - Australian Open', homeTeam: 'J. Sinner', awayTeam: 'D. Medvedev', startTime: '14:00', odds: { home: 1.55, draw: null, away: 2.40 }, marketsCount: 40 },
  { id: 'm15', sportId: 'tennis', leagueId: 'atp', leagueName: 'ATP - Australian Open', homeTeam: 'A. Zverev', awayTeam: 'S. Tsitsipas', startTime: '09:30', odds: { home: 1.70, draw: null, away: 2.15 }, marketsCount: 38 },

  // Tennis - WTA
  { id: 'm16', sportId: 'tennis', leagueId: 'wta', leagueName: 'WTA - Dubai Open', homeTeam: 'I. Swiatek', awayTeam: 'A. Sabalenka', startTime: '16:00', odds: { home: 2.05, draw: null, away: 1.80 }, marketsCount: 36 },
  { id: 'm17', sportId: 'tennis', leagueId: 'wta', leagueName: 'WTA - Dubai Open', homeTeam: 'C. Gauff', awayTeam: 'E. Rybakina', startTime: '18:00', odds: { home: 1.90, draw: null, away: 1.90 }, marketsCount: 34 },

  // NBA
  { id: 'm18', sportId: 'basketball', leagueId: 'nba', leagueName: 'USA - NBA', homeTeam: 'LA Lakers', awayTeam: 'Boston Celtics', startTime: '02:30', odds: { home: 2.20, draw: null, away: 1.70 }, marketsCount: 85 },
  { id: 'm19', sportId: 'basketball', leagueId: 'nba', leagueName: 'USA - NBA', homeTeam: 'Golden State', awayTeam: 'Milwaukee Bucks', startTime: '03:00', odds: { home: 1.95, draw: null, away: 1.85 }, marketsCount: 82 },
  { id: 'm20', sportId: 'basketball', leagueId: 'nba', leagueName: 'USA - NBA', homeTeam: 'Denver Nuggets', awayTeam: 'Phoenix Suns', startTime: '04:00', odds: { home: 1.80, draw: null, away: 2.05 }, marketsCount: 80 },

  // EuroLeague
  { id: 'm21', sportId: 'basketball', leagueId: 'euroleague', leagueName: 'Europe - EuroLeague', homeTeam: 'Real Madrid BC', awayTeam: 'Olympiacos', startTime: '20:00', odds: { home: 1.65, draw: null, away: 2.25 }, marketsCount: 62 },
  { id: 'm22', sportId: 'basketball', leagueId: 'euroleague', leagueName: 'Europe - EuroLeague', homeTeam: 'Barcelona BC', awayTeam: 'Fenerbahce', startTime: '20:45', odds: { home: 1.50, draw: null, away: 2.55 }, marketsCount: 58 },

  // NHL
  { id: 'm23', sportId: 'ice-hockey', leagueId: 'nhl', leagueName: 'USA/Canada - NHL', homeTeam: 'Toronto Maple Leafs', awayTeam: 'Montreal Canadiens', startTime: '01:00', odds: { home: 1.75, draw: null, away: 2.10 }, marketsCount: 55 },
  { id: 'm24', sportId: 'ice-hockey', leagueId: 'nhl', leagueName: 'USA/Canada - NHL', homeTeam: 'NY Rangers', awayTeam: 'Boston Bruins', startTime: '01:30', odds: { home: 2.00, draw: null, away: 1.85 }, marketsCount: 52 },
  { id: 'm25', sportId: 'ice-hockey', leagueId: 'nhl', leagueName: 'USA/Canada - NHL', homeTeam: 'Edmonton Oilers', awayTeam: 'Colorado Avalanche', startTime: '03:00', odds: { home: 1.90, draw: null, away: 1.95 }, marketsCount: 50 },

  // Cricket
  { id: 'm26', sportId: 'cricket', leagueId: 'ipl', leagueName: 'India - IPL', homeTeam: 'Mumbai Indians', awayTeam: 'Chennai Super Kings', startTime: '15:30', odds: { home: 1.85, draw: null, away: 1.95 }, marketsCount: 45 },
  { id: 'm27', sportId: 'cricket', leagueId: 'ipl', leagueName: 'India - IPL', homeTeam: 'Royal Challengers', awayTeam: 'Kolkata Knight Riders', startTime: '19:30', odds: { home: 2.10, draw: null, away: 1.75 }, marketsCount: 42 },

  // Baseball
  { id: 'm28', sportId: 'baseball', leagueId: 'mlb', leagueName: 'USA - MLB', homeTeam: 'NY Yankees', awayTeam: 'LA Dodgers', startTime: '01:00', odds: { home: 1.90, draw: null, away: 1.90 }, marketsCount: 48 },
  { id: 'm29', sportId: 'baseball', leagueId: 'mlb', leagueName: 'USA - MLB', homeTeam: 'Houston Astros', awayTeam: 'Atlanta Braves', startTime: '02:00', odds: { home: 2.05, draw: null, away: 1.80 }, marketsCount: 45 },

  // Handball
  { id: 'm30', sportId: 'handball', leagueId: 'ehf', leagueName: 'Europe - EHF Champions League', homeTeam: 'THW Kiel', awayTeam: 'Barcelona HB', startTime: '18:45', odds: { home: 2.80, draw: 8.00, away: 1.40 }, marketsCount: 28 },

  // Rugby
  { id: 'm31', sportId: 'rugby', leagueId: 'sixnations', leagueName: 'Europe - Six Nations', homeTeam: 'England', awayTeam: 'France', startTime: '17:45', odds: { home: 2.50, draw: 21.00, away: 1.55 }, marketsCount: 35 },
  { id: 'm32', sportId: 'rugby', leagueId: 'sixnations', leagueName: 'Europe - Six Nations', homeTeam: 'Ireland', awayTeam: 'Wales', startTime: '15:00', odds: { home: 1.15, draw: 26.00, away: 7.00 }, marketsCount: 32 },

  // Esports
  { id: 'm33', sportId: 'esports', leagueId: 'csgo', leagueName: 'CS2 - ESL Pro League', homeTeam: 'Navi', awayTeam: 'FaZe Clan', startTime: '18:00', odds: { home: 1.65, draw: null, away: 2.20 }, marketsCount: 22 },
  { id: 'm34', sportId: 'esports', leagueId: 'lol', leagueName: 'LoL - LEC', homeTeam: 'G2 Esports', awayTeam: 'T1', startTime: '19:00', odds: { home: 2.40, draw: null, away: 1.55 }, marketsCount: 18 },
  { id: 'm35', sportId: 'esports', leagueId: 'dota2', leagueName: 'Dota 2 - DPC', homeTeam: 'Team Spirit', awayTeam: 'Team Liquid', startTime: '16:00', odds: { home: 1.80, draw: null, away: 2.00 }, marketsCount: 20 },
];
