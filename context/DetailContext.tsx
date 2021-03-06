import React from 'react';

interface StoreState {
  x: string,
  y: string,
}

interface PayloadAction {
  type: ActionType,
  payload?: string,
}

export enum ActionType {
  SET_X = 'SET_X',
  SET_Y = 'SET_Y',
}

const initialState = {
  x: 'n1',
  y: 'n1',
}

const reducer: React.Reducer<StoreState, PayloadAction> = (state, action) => {
  switch (action.type) {
    case 'SET_X':
      return { ...state, x: action.payload }
    case 'SET_Y':
      return { ...state, y: action.payload }
    default:
      return state
  }
}

export const DetailProvider: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <DetailContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DetailContext.Provider>
  )
}

interface ContextState {
  state: StoreState,
  dispatch: React.Dispatch<PayloadAction>,
}

export const DetailContext = React.createContext({} as ContextState);

export const useDetailContext = (): ContextState => React.useContext(DetailContext)
