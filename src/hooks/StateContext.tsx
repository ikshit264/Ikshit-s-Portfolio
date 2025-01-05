'use client'

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { AllFolders } from '@/Data/All-Data';
import { ErrorData } from '@/Data/All-Error-Data';

interface WindowContextType {
  Open: boolean[];
  Min: boolean[];
  Max: boolean[];
  IsFront: number;
  IsPhone: boolean;
  OpenError: boolean[];
  MinError: boolean[];
  MaxError: boolean[];
  IsFrontError: number;
}

type Action =
  | { type: 'SET_OPEN'; index: number; value: boolean }
  | { type: 'SET_MIN'; index: number; value: boolean }
  | { type: 'SET_MAX'; index: number; value: boolean }
  | { type: 'SET_FRONT'; index: number }
  | { type: 'SET_PHONE'; value: boolean }
  | { type: 'SET_ERROR_OPEN'; index: number; value: boolean }
  | { type: 'SET_ERROR_MIN'; index: number; value: boolean }
  | { type: 'SET_ERROR_MAX'; index: number; value: boolean }
  | { type: 'SET_ERROR_FRONT'; index: number }
  | { type: 'INITIALIZE_ARRAYS'; folderLength: number; errorLength: number };

const stateReducer = (state: WindowContextType, action: Action): WindowContextType => {
  switch (action.type) {
    case 'INITIALIZE_ARRAYS':
      return {
        ...state,
        Open: Array(action.folderLength).fill(false),
        Min: Array(action.folderLength).fill(false),
        Max: Array(action.folderLength).fill(false),
        OpenError: Array(action.errorLength).fill(false),
        MinError: Array(action.errorLength).fill(false),
        MaxError: Array(action.errorLength).fill(false)
      };
    case 'SET_OPEN':
      const newOpen = [...state.Open];
      newOpen[action.index] = action.value;
      return { ...state, Open: newOpen };
    case 'SET_MIN':
      const newMin = [...state.Min];
      newMin[action.index] = action.value;
      return { ...state, Min: newMin };
    case 'SET_MAX':
      const newMax = [...state.Max];
      newMax[action.index] = action.value;
      return { ...state, Max: newMax };
    case 'SET_FRONT':
      return { ...state, IsFront: action.index };
    case 'SET_PHONE':
      return { ...state, IsPhone: action.value };
    case 'SET_ERROR_OPEN':
      const newErrorOpen = [...state.OpenError];
      newErrorOpen[action.index] = action.value;
      return { ...state, OpenError: newErrorOpen };
    case 'SET_ERROR_MIN':
      const newErrorMin = [...state.MinError];
      newErrorMin[action.index] = action.value;
      return { ...state, MinError: newErrorMin };
    case 'SET_ERROR_MAX':
      const newErrorMax = [...state.MaxError];
      newErrorMax[action.index] = action.value;
      return { ...state, MaxError: newErrorMax };
    case 'SET_ERROR_FRONT':
      return { ...state, IsFrontError: action.index };
    default:
      return state;
  }
};

const initialContext: WindowContextType = {
  Open: [],
  Min: [],
  Max: [],
  IsFront: 0,
  IsPhone: false,
  OpenError: [],
  MinError: [],
  MaxError: [],
  IsFrontError: 0,
};

interface ContextValue {
  state: WindowContextType;
  dispatch: React.Dispatch<Action>;
}

const StateContext = createContext<ContextValue | undefined>(undefined);

export const StateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialContext);

  useEffect(() => {
    // Initialize arrays after component mounts and data is available
    if (Array.isArray(AllFolders) && Array.isArray(ErrorData)) {
      dispatch({
        type: 'INITIALIZE_ARRAYS',
        folderLength: AllFolders.length,
        errorLength: ErrorData.length
      });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      dispatch({ type: 'SET_PHONE', value: window.innerWidth <= 768 });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Check if AllFolders and ErrorData are fetched correctly
  if (!Array.isArray(AllFolders) || !Array.isArray(ErrorData)) {
    console.error('AllFolders or ErrorData is not fetched correctly.');
    return null;
  }

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateManagement = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateManagement must be used within a StateProvider');
  }

  const { state, dispatch } = context;

  const makeFalse = (index: number, name: string) => {
    if (index < 0 || index >= state.Open.length) return;

    if (name.toLowerCase() === 'open') {
      dispatch({ type: 'SET_MAX', index, value: false });
      dispatch({ type: 'SET_MIN', index, value: false });
      dispatch({ type: 'SET_OPEN', index, value: false });
    } else if (name.toLowerCase() === 'max') {
      if (!state.IsPhone) {
        dispatch({ type: 'SET_MAX', index, value: false });
      }
    } else if (name.toLowerCase() === 'min') {
      dispatch({ type: 'SET_MIN', index, value: false });
    }
  };

  const makeTrue = (index: number, name: string) => {
    if (index < 0 || index >= state.Open.length) return;

    if (name.toLowerCase() === 'open') {
      dispatch({ type: 'SET_OPEN', index, value: true });
      dispatch({ type: 'SET_MIN', index, value: false });
      dispatch({ type: 'SET_FRONT', index });
      if (state.IsPhone) {
        dispatch({ type: 'SET_MAX', index, value: true });
      }
    } else if (name.toLowerCase() === 'max') {
      if (state.Open[index]) {
        dispatch({ type: 'SET_MAX', index, value: true });
        dispatch({ type: 'SET_FRONT', index });
      }
    } else if (name.toLowerCase() === 'min') {
      if (state.Open[index]) {
        dispatch({ type: 'SET_MIN', index, value: true });
      }
    }
  };

  const makeErrorFalse = (index: number, name: string) => {
    if (index < 0 || index >= state.OpenError.length) return;

    if (name.toLowerCase() === 'open') {
      dispatch({ type: 'SET_ERROR_OPEN', index, value: false });
    }
  };

  const makeErrorTrue = (index: number, name: string) => {
    if (index < 0 || index >= state.OpenError.length) return;

    if (name.toLowerCase() === 'open') {
      dispatch({ type: 'SET_ERROR_OPEN', index, value: true });
      dispatch({ type: 'SET_ERROR_FRONT', index });
    }
  };

  return {
    Open: state.Open,
    Min: state.Min,
    Max: state.Max,
    IsFront: state.IsFront,
    IsPhone: state.IsPhone,
    OpenError: state.OpenError,
    MinError: state.MinError,
    MaxError: state.MaxError,
    IsFrontError: state.IsFrontError,
    makeFalse,
    makeTrue,
    makeErrorFalse,
    makeErrorTrue
  };
};