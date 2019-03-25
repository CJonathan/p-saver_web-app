import { findWithAttr } from "./filters";

export function prepRequestForPokedex(pokemon, nc){
  let nbCaught = nc <= -1 ? -1 : nc;
  let isCaught = nbCaught > 0;
  let isNotCatchable = nbCaught === -1;
  let registrationDate = nbCaught === 1 && pokemon.isCaught === false ? new Date() : nbCaught === 0 ? null : undefined;

  return {
    nbCaught,
    isCaught,
    isNotCatchable,
    registrationDate
  }
}

export function prepRequestForPokebank(pokemon, nc){
  let nbCaught = nc <= 0 ? 0 : nc;
  let isCaught = nbCaught > 0;
  let isNotCatchable = nbCaught === -1;
  let registrationDate = nbCaught === 1 && pokemon.isCaught === false ? new Date() : nbCaught === 0 ? null : undefined;

  return {
    nbCaught,
    isCaught,
    isNotCatchable,
    registrationDate
  }
}

export function replacePokemonInPokedex(pokedex, pokemon, response){
  let idx = findWithAttr(pokedex, '_id', pokemon._id);
  if(idx > -1) {
    pokedex.splice(idx, 1, response.data.pokemon);
    return [...pokedex];
  }
}