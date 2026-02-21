import type { CasinoGame } from '../types';

export const casinoGames: CasinoGame[] = [
  // Popullore (Popular)
  { id: 'cg1', name: 'Ari i Olimpit', provider: 'Leo Games', category: 'popular', gradient: 'linear-gradient(135deg, #FFD700, #FF8C00)' },
  { id: 'cg2', name: 'Shqiponja e Zjarrtë', provider: 'Eagle Studio', category: 'popular', gradient: 'linear-gradient(135deg, #DC143C, #8B0000)' },
  { id: 'cg3', name: 'Thesari i Butrintit', provider: 'Leo Games', category: 'popular', gradient: 'linear-gradient(135deg, #2E8B57, #006400)' },
  { id: 'cg4', name: 'Deti i Jonit', provider: 'Adriatic Play', category: 'popular', gradient: 'linear-gradient(135deg, #1E90FF, #00008B)' },
  { id: 'cg5', name: 'Flaka e Diamantit', provider: 'Crystal Games', category: 'popular', gradient: 'linear-gradient(135deg, #E0E0FF, #6A5ACD)' },

  // Të Reja (New)
  { id: 'cg6', name: 'Luani i Artë', provider: 'Leo Games', category: 'new', gradient: 'linear-gradient(135deg, #DAA520, #B8860B)', isNew: true },
  { id: 'cg7', name: 'Yjet e Natës', provider: 'Starlight Games', category: 'new', gradient: 'linear-gradient(135deg, #191970, #4B0082)', isNew: true },
  { id: 'cg8', name: 'Festa e Frutave', provider: 'FruitBox', category: 'new', gradient: 'linear-gradient(135deg, #FF6347, #FF4500)', isNew: true },
  { id: 'cg9', name: 'Mbreti i Piratëve', provider: 'Sea Games', category: 'new', gradient: 'linear-gradient(135deg, #8B4513, #2F4F4F)', isNew: true },
  { id: 'cg10', name: 'Magjia e Faraonit', provider: 'Egypt Studio', category: 'new', gradient: 'linear-gradient(135deg, #CD853F, #8B6914)', isNew: true },

  // Jackpot
  { id: 'cg11', name: 'Mega Jackpot Shqiptar', provider: 'Leo Games', category: 'jackpot', gradient: 'linear-gradient(135deg, #FFD700, #FF1493)', jackpotAmount: '$2,456,789' },
  { id: 'cg12', name: 'Fortuna e Madhe', provider: 'Fortune Play', category: 'jackpot', gradient: 'linear-gradient(135deg, #00CED1, #008080)', jackpotAmount: '$1,234,567' },
  { id: 'cg13', name: 'Rrota e Fatit', provider: 'Wheel Games', category: 'jackpot', gradient: 'linear-gradient(135deg, #FF69B4, #C71585)', jackpotAmount: '$876,543' },
  { id: 'cg14', name: 'Thesari i Dragoit', provider: 'Dragon Studio', category: 'jackpot', gradient: 'linear-gradient(135deg, #FF4500, #8B0000)', jackpotAmount: '$543,210' },
  { id: 'cg15', name: 'Ëndrra e Artë', provider: 'DreamSlot', category: 'jackpot', gradient: 'linear-gradient(135deg, #FFD700, #B8860B)', jackpotAmount: '$321,098' },

  // Lojëra Tavoline (Table Games)
  { id: 'cg16', name: 'Blackjack Royal', provider: 'Leo Tables', category: 'table', gradient: 'linear-gradient(135deg, #006400, #004d00)' },
  { id: 'cg17', name: 'Ruleta Europiane', provider: 'Euro Roulette', category: 'table', gradient: 'linear-gradient(135deg, #8B0000, #4B0000)' },
  { id: 'cg18', name: 'Poker Shqiptar', provider: 'Leo Tables', category: 'table', gradient: 'linear-gradient(135deg, #191970, #000080)' },
  { id: 'cg19', name: 'Baccarat VIP', provider: 'VIP Games', category: 'table', gradient: 'linear-gradient(135deg, #4B0082, #2E0854)' },
  { id: 'cg20', name: 'Punto Banco', provider: 'Classic Games', category: 'table', gradient: 'linear-gradient(135deg, #2F4F4F, #1a2f2f)' },
];
