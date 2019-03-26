import johnApi from '../api/johnApi';
import { endpoints } from '../config';
import { getToken } from '../helpers/token';
import { prepRequestForPokedex, replacePokemonInPokedex } from "../helpers/request";

const updatePokedex = (region, pokedex) => async(dispatch) => {
  let obj = {};
  obj[region] = pokedex;
  dispatch({ type: 'FETCH_POKEDEX_BY_REGION', payload: obj });
};

export const changeListType = (newListType) => async(dispatch) => {
  dispatch({ type: 'CHANGE_POKEDEX_LIST_TYPE', payload: newListType });
};

export const setRegionAndFetchPokemon = (region) => async(dispatch, getState) => {
  let state = getState();
  if(state.pokedex.selectedRegion !== region.toLowerCase()) {
    dispatch(setSelectedRegion(region));
  }
  if(state.pokedex[region].length === 0) {
    await dispatch(fetchPokedexPerRegion(region));
  }
};

export const fetchPokedexPerRegion = (region) => async(dispatch) => {
  dispatch(setLoadingStatus(true));
  const response = await johnApi.get(endpoints.getPokedex, { params: { region } });
  dispatch(updatePokedex(region, response.data.pokemons));
  dispatch(setLoadingStatus(false));
};

export const setSelectedRegion = (region) => async(dispatch) => {
  dispatch({ type: 'SET_POKEDEX_REGION', payload: region.toLowerCase() });
};

export const setLoadingStatus = (status) => async(dispatch) => {
  dispatch({ type: 'SET_POKEDEX_LOADING_STATUS', payload: status });
};

export const updateCaughtNb = (pokemon, nc, earlyExit) => async(dispatch, getState) => {

  if(earlyExit) return;
  let state = getState();
  let pokedex = state.pokedex[pokemon.region];

  let { nbCaught, isNotCatchable, isCaught, registrationDate } = prepRequestForPokedex(pokemon, nc);

  const response = await johnApi.patch(endpoints.patchPokedex + `/${pokemon._id}`, {
    token: getToken(),
    region: pokemon.region,
    entry: pokemon.entry,
    nbCaught,
    registrationDate,
    isNotCatchable,
    isCaught,
  });

  pokedex = replacePokemonInPokedex(pokedex, pokemon, response);

  dispatch(updatePokedex(pokemon.region, pokedex));
};

export const updateNote = (pokemon, note) => async(dispatch, getState) => {
  let state = getState();
  let pokedex = state.pokedex[pokemon.region];
  const response = await johnApi.patch(endpoints.patchPokedex + `/${pokemon._id}`, {
    token: getToken(),
    region: pokemon.region,
    entry: pokemon.entry,
    note,
  });
  pokedex = replacePokemonInPokedex(pokedex, pokemon, response);
  dispatch(updatePokedex(pokemon.region, pokedex));
};