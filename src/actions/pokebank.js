import johnApi from '../api/johnApi';
import { endpoints } from '../config';
import { prepRequestForPokebank, replacePokemonInPokedex } from "../helpers/request";

const updatePokedex = (region, pokedex) => async(dispatch) => {
  let obj = {};
  obj[region] = pokedex;
  dispatch({ type: 'FETCH_POKEBANK_BY_REGION', payload: obj });
};

export const changeListType = (newListType) => async(dispatch) => {
  dispatch({ type: 'CHANGE_POKEBANK_LIST_TYPE', payload: newListType });
};

export const setRegionAndFetchPokemon = (region) => async(dispatch, getState) => {
  let state = getState();
  if(state.pokebank.selectedRegion !== region.toLowerCase()) {
    dispatch(setSelectedRegion(region));
  }
  if(state.pokebank[region].length === 0) {
    await dispatch(fetchPokedexPerRegion(region));
  }
};

export const fetchPokedexPerRegion = (region) => async(dispatch) => {
  dispatch(setLoadingStatus(true));
  const response = await johnApi.get(endpoints.getPokebank, { params: { region } });
  dispatch(updatePokedex(region, response.data.pokemons));
  dispatch(setLoadingStatus(false));
};

export const setSelectedRegion = (region) => async(dispatch) => {
  dispatch({ type: 'SET_POKEBANK_REGION', payload: region.toLowerCase() });
};

export const setLoadingStatus = (status) => async(dispatch) => {
  dispatch({ type: 'SET_POKEBANK_LOADING_STATUS', payload: status });
};
const setAmountInStore = (totalEntry, totalCaught) => async (dispatch) => {
  dispatch({ type: 'SET_POKEBANK_TOTAL_AMOUNT', payload: totalEntry });
  dispatch({ type: 'SET_POKEBANK_CURRENT_COUNT', payload: totalCaught });
};

export const fetchAmountFromDb = () => async(dispatch) => {
  const response = await johnApi.get(endpoints.count);
  dispatch(setAmountInStore(response.data.totalEntry, response.data.totalCaught))
};

export const updateCaughtNb = (pokemon, nc, earlyExit) => async(dispatch, getState) => {

  if(earlyExit) return;
  let state = getState();
  let pokedex = state.pokebank[pokemon.region];

  let { nbCaught, isNotCatchable, isCaught, registrationDate } = prepRequestForPokebank(pokemon, nc);

  if(nbCaught === 1 && pokemon.isCaught === false){
   dispatch(setAmountInStore(state.pokebank.totalEntry, state.pokebank.totalCaught + 1))
  }
  if(nbCaught === 0 && pokemon.isCaught === true){
   dispatch(setAmountInStore(state.pokebank.totalEntry, state.pokebank.totalCaught - 1))
  }

  const response = await johnApi.patch(endpoints.patchPokebank + `/${pokemon._id}`, {
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
  let pokedex = state.pokebank[pokemon.region];
  const response = await johnApi.patch(endpoints.patchPokebank + `/${pokemon._id}`, {
    region: pokemon.region,
    entry: pokemon.entry,
    note,
  });
  pokedex = replacePokemonInPokedex(pokedex, pokemon, response);
  dispatch(updatePokedex(pokemon.region, pokedex));
};