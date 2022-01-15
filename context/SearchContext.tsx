import React from 'react';
import { ArrayHelper } from '../helpers/ArrayHelper'

export interface StoreState {
  x: SearchItem[],
  y: SearchItem[],
  version: number,
}

interface SearchItem {
  index: string,
  id: string,
  no: string,
  name: string
}

interface PayloadState {
  x?: { index: string, data: object },
  y?: { index: string, data: object },
  version?: number,
}

interface PayloadAction {
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

const reducer: React.Reducer<StoreState, PayloadAction> = (state, action) => {
  switch (action.type) {
    case 'SET_X':
      const x = ArrayHelper.addOrReplace(state.x, { ...action.payload.x }, (a, b) => a.index === b.index)
      return { ...state, x: x.filter((v: SearchItem) => v.id !== null) }
    case 'SET_Y':
      const y = ArrayHelper.addOrReplace(state.y, { ...action.payload.y }, (a, b) => a.index === b.index)
      return { ...state, y: y.filter((v: SearchItem) => v.id !== null) }
    case 'SET_VERSION':
      return { ...state, version: action.payload.version }

    default:
      return state
  }
}

const SearchProvider: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchProvider

interface ContextState {
  state: StoreState,
  dispatch: React.Dispatch<PayloadAction>,
}

export const SearchContext = React.createContext({} as ContextState);

export const useSearchContext = (): ContextState => React.useContext(SearchContext)