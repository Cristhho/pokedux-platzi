import { AnyAction, Dispatch, MiddlewareAPI } from 'redux';

import { RootState } from '../reducers/pokemons';
import { PokemonActions } from '../actions/types';

export const logger = (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => (next: Dispatch<AnyAction>) => (action: PokemonActions) => {
  console.log(action);
  next(action);
}

export const pokedexIndex = (api: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => (next: Dispatch<AnyAction>) => (action: PokemonActions) => {
  switch (action.type) {
    case 'SET_POKEMONS':
      const newPayload = action.payload.map((_poke, index) => ({
        ..._poke,
        index: index+1
      }));
      const updatedAction: PokemonActions = {
        type: action.type,
        payload: newPayload
      }
      next(updatedAction);
      break;
    default:
      next(action);
      break;
  }
}
