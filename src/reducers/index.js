
import {combineReducers} from 'redux';
import pokedexReducer from './PokedexReducer';
import pokebankReducer from './PokebankReducer';

export default combineReducers({
  pokedex: pokedexReducer,
  pokebank: pokebankReducer,
})