import React from 'react';
import ArrayHelper from '../helpers/ArrayHelper'

export interface StoreState {
  x: { index: string, id: string, no: string, name: string }[],
  y: { index: string, id: string, no: string, name: string }[],
  version: number,
}

interface PayloadState {
  x?: { index: string, data: object },
  y?: { index: string, data: object },
  version?: number,
}

interface StoreAction {
  type: ActionType,
  payload?: PayloadState,
}

export enum ActionType {
  SET_X = 'SET_X',
  SET_Y = 'SET_Y',
  SET_VERSION = 'SET_VERSION',
  RESET = 'RESET',
}

const initialState = {
  x: [],
  y: [],
  version: 3,
}

const reducer: React.Reducer<StoreState, StoreAction> = (state, action) => {
  switch (action.type) {
    case 'SET_X':
      const x = ArrayHelper.addOrReplace(state.x, { ...action.payload.x }, (a, b) => a.index === b.index)
      return { ...state, x: x.filter(v => v.id !== null) }
    case 'SET_Y':
      const y = ArrayHelper.addOrReplace(state.y, { ...action.payload.y }, (a, b) => a.index === b.index)
      return { ...state, y: y.filter(v => v.id !== null) }
    case 'SET_VERSION':
      return { ...state, version: action.payload.version }

    default:
      return state
  }
}

const StoreProvider: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreProvider

interface ContextState {
  state: StoreState,
  dispatch: React.Dispatch<StoreAction>,
}

export const StoreContext = React.createContext({} as ContextState);

export const useStoreContext = (): ContextState => React.useContext(StoreContext)