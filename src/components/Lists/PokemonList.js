import React from 'react';
import PokemonIconItem from '../Items/PokemonIconItem';
import PokemonCardItem from '../Items/PokemonCardItem';
import { capitalize } from "../../helpers/text";
import { filterUnCaught, calculateCaught } from "../../helpers/filters"
class PokemonList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      search: '',
    };
  }

  onInputChange = (ev) => {
    this.setState({
      isChecked: ev.target.checked,
    });
  };
  onSearchChange = (ev) => {
    this.setState({
      search: ev.target.value.toLowerCase(),
    });
  };

  onNoteSubmit = (pokemon, note) => {
    this.props.updateNote(pokemon, note)
  };

  onUpdateCaughtNb = (pokemon, nbCaught, earlyExit) => {
    this.props.updateCaughtNb(pokemon, nbCaught, earlyExit)
  };

  getList() {
    let list = this.props.pokemons.filter(pokemon => this.state.search === '' || pokemon.pokemon.name.toLowerCase().includes(this.state.search));

    if(this.props.listType === 'icon') {
      return list.map(pokemon => {
        return (
          <PokemonIconItem
            key={pokemon._id}
            pkmn={pokemon}
            onUpdateCaughtNb={this.onUpdateCaughtNb}
          />
        );
      });
    } else if(this.props.listType === 'card') {
      list = list.filter(pokemon => !this.state.isChecked || !pokemon.isCaught);
      list = list.filter(pokemon => !this.state.isChecked || !pokemon.isNotCatchable);
      return list.map(pokemon => {
        return (
          <PokemonCardItem
            key={pokemon._id}
            pkmn={pokemon}
            onNoteSubmit={this.onNoteSubmit}
            onUpdateCaughtNb={this.onUpdateCaughtNb}
          />
        );
      });
    }
  };

  getNotCaught() {
    let html =
      <div className="not-caught">
        <input type="checkbox"
               id="not-caught-checkbox"
               checked={this.state.isChecked}
               onChange={this.onInputChange} />
        <label htmlFor={'not-caught-checkbox'}>Not Caught only ({filterUnCaught(this.props.pokemons)})</label>
      </div>;
    return this.props.listType === 'card' && this.props.parent === 'pokedex' ? html : '';
  }

  render() {
    const isListActive = this.props.listType === 'icon' ? 'active' : '';
    const isCardActive = this.props.listType === 'card' ? 'active' : '';
    const listType = this.props.listType === 'icon' ? 'centered' : 'three column';
    const nbPokemonCaught = calculateCaught(this.props.pokemons);
    const { region, totalEntry, pokemons, totalCaught } = this.props;

    return (
      <div className="pokemon-list">
        <h2 className="ui header">{capitalize(region)}
          {totalEntry ? <span className="float-right">Total</span> : ''}
          <div className="sub header">
            {nbPokemonCaught} / {pokemons.length}
            {totalEntry ? <span className="float-right">{totalCaught} / {totalEntry}</span> : ''}
          </div>
        </h2>
        <form className="ui form">
          <div className="field">
            <div className="ui small basic icon buttons float-right">
              <button className={"ui button " + isListActive}
                      type="button"
                      onClick={() => this.props.changeListType('icon')}>
                <i className="list icon" />
              </button>
              <button className={"ui button " + isCardActive}
                      type="button"
                      onClick={() => this.props.changeListType('card')}>
                <i className="address card icon" />
              </button>
            </div>
          </div>
          <div className="field">
            <label>Search</label>
            <input type="text"
                   value={this.state.search}
                   onChange={this.onSearchChange} />
          </div>
        </form>
        {this.getNotCaught()}
        <div className={"ui grid " + listType}>{this.getList()}</div>
      </div>
    );
  }
}

export default PokemonList;