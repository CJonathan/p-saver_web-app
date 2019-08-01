const initState = {
  isLoading: false,
  selectedRegion: 'kanto',
  listType: 'icon',
  totalEntry: 0,
  totalCaught: 0,
  kanto: [],
  johto: [],
  hoenn: [],
  sinnoh: [],
  unova: [],
  kalos: [],
  alola: [],
};

export default (state = initState, action) => {
  switch(action.type) {
    case 'FETCH_POKEBANK_BY_REGION':
      return Object.assign({}, state, action.payload);
    case 'SET_POKEBANK_REGION':
      return { ...state, selectedRegion: action.payload };
    case 'SET_POKEBANK_LOADING_STATUS':
      return { ...state, isLoading: action.payload };
    case 'CHANGE_POKEBANK_LIST_TYPE':
      return { ...state, listType: action.payload };
    case 'SET_POKEBANK_TOTAL_AMOUNT':
      return { ...state, totalEntry: action.payload };
    case 'SET_POKEBANK_CURRENT_COUNT':
      return { ...state, totalCaught: action.payload};
    default:
      return state;
  }
}
