const initState = {
  isLoading: false,
  selectedRegion: 'kanto',
  listType: 'card',
  kanto: [],
  johto: [],
  hoenn: [],
  sinnoh: [],
};

export default (state = initState, action) => {
  switch(action.type) {
    case 'FETCH_POKEDEX_BY_REGION':
      return Object.assign({}, state, action.payload);
    case 'SET_POKEDEX_REGION':
      return { ...state, selectedRegion: action.payload };
    case 'SET_POKEDEX_LOADING_STATUS':
      return { ...state, isLoading: action.payload };
    case 'CHANGE_POKEDEX_LIST_TYPE':
      return { ...state, listType: action.payload };
    default:
      return state;
  }
}