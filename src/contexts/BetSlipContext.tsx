import { createContext, useContext, useReducer, useState, useMemo, useCallback, type ReactNode } from 'react';
import type { BetSelection, BetSlipAction } from '../types';

type BetSlipState = {
  selections: BetSelection[];
};

function betSlipReducer(state: BetSlipState, action: BetSlipAction): BetSlipState {
  switch (action.type) {
    case 'ADD_SELECTION': {
      if (state.selections.some(s => s.id === action.payload.id)) {
        return state;
      }
      return { selections: [...state.selections, action.payload] };
    }
    case 'REMOVE_SELECTION':
      return { selections: state.selections.filter(s => s.id !== action.payload) };
    case 'CLEAR_ALL':
      return { selections: [] };
    case 'UPDATE_ODDS':
      return {
        selections: state.selections.map(s =>
          s.id === action.payload.id ? { ...s, odds: action.payload.odds } : s
        ),
      };
    default:
      return state;
  }
}

type BetSlipContextType = {
  selections: BetSelection[];
  stake: string;
  setStake: (val: string) => void;
  totalOdds: number;
  potentialReturns: number;
  addSelection: (sel: BetSelection) => void;
  removeSelection: (id: string) => void;
  clearAll: () => void;
  isSelected: (id: string) => boolean;
  toggleSelection: (sel: BetSelection) => void;
};

const BetSlipContext = createContext<BetSlipContextType | null>(null);

export function BetSlipProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(betSlipReducer, { selections: [] });
  const [stake, setStake] = useState('');

  const totalOdds = useMemo(() => {
    if (state.selections.length === 0) return 0;
    return state.selections.reduce((acc, s) => acc * s.odds, 1);
  }, [state.selections]);

  const stakeNum = parseFloat(stake) || 0;
  const potentialReturns = useMemo(() => {
    return parseFloat((stakeNum * totalOdds).toFixed(2));
  }, [stakeNum, totalOdds]);

  const addSelection = useCallback((sel: BetSelection) => {
    dispatch({ type: 'ADD_SELECTION', payload: sel });
  }, []);

  const removeSelection = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_SELECTION', payload: id });
  }, []);

  const clearAll = useCallback(() => {
    dispatch({ type: 'CLEAR_ALL' });
  }, []);

  const isSelected = useCallback((id: string) => {
    return state.selections.some(s => s.id === id);
  }, [state.selections]);

  const toggleSelection = useCallback((sel: BetSelection) => {
    if (state.selections.some(s => s.id === sel.id)) {
      dispatch({ type: 'REMOVE_SELECTION', payload: sel.id });
    } else {
      dispatch({ type: 'ADD_SELECTION', payload: sel });
    }
  }, [state.selections]);

  return (
    <BetSlipContext.Provider value={{
      selections: state.selections,
      stake,
      setStake,
      totalOdds,
      potentialReturns,
      addSelection,
      removeSelection,
      clearAll,
      isSelected,
      toggleSelection,
    }}>
      {children}
    </BetSlipContext.Provider>
  );
}

export function useBetSlip() {
  const ctx = useContext(BetSlipContext);
  if (!ctx) throw new Error('useBetSlip must be used within BetSlipProvider');
  return ctx;
}
