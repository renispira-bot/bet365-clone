import type { LiveMatchStats } from '../types';

export const liveMatchStats: Record<string, LiveMatchStats> = {
  live1: { matchId: 'live1', homePossession: 58, awayPossession: 42, homeShots: 8, awayShots: 3, homeCorners: 5, awayCorners: 2 },
  live2: { matchId: 'live2', homePossession: 45, awayPossession: 55, homeShots: 12, awayShots: 10, homeCorners: 6, awayCorners: 7 },
  live3: { matchId: 'live3', homePossession: 52, awayPossession: 48, homeShots: 6, awayShots: 9, homeCorners: 3, awayCorners: 5 },
  live8: { matchId: 'live8', homePossession: 47, awayPossession: 53, homeShots: 9, awayShots: 11, homeCorners: 4, awayCorners: 6 },
};
