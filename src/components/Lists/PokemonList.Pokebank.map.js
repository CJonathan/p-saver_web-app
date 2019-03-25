import { connect } from 'react-redux';
import { changeListType, updateCaughtNb, updateNote } from '../../actions/pokebank';
import PokemonList from "./PokemonList";

export default connect(null, { changeListType, updateCaughtNb, updateNote })(PokemonList);