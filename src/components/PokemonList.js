import React from 'react';
import PokemonListItem from './PokemonListItem';
import { capitalize } from "../helpers/text";

class PokemonList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      search: '',
    };
  }

  static filterCaught(pkms) {
    return pkms.filter(e => {
      return e.isCaught;
    });
  };

  static filterUnCaught(pkms) {
    let list = pkms.filter(e => {
      return !e.isCaught;
    });
    return list.filter(e => {
      return !e.isNotCatchable;
    }).length;
  }

  static calculateCaught(pkms) {
    return PokemonList.filterCaught(pkms).length;
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

  getList() {
    let list = this.props.pokemons.filter(pokemon => this.state.search === '' || pokemon.pokemon.name.toLowerCase().includes(this.state.search));
    list = list.filter(pokemon => !this.state.isChecked || !pokemon.isCaught);
    list = list.filter(pokemon => !this.state.isChecked || !pokemon.isNotCatchable);
    return list.map(pokemon => {
      return (
        <PokemonListItem
          key={pokemon._id}
          onNoteSubmit={this.props.onNoteSubmit}
          onAnchorClick={this.props.onAnchorClick}
          region={this.props.region}
          pkmn={pokemon}
        />
      );
    });
  };

  render() {
    return (
      <div className="pokemon-list">
        <h2 className="ui header">{capitalize(this.props.region)}
          {this.props.totalEntry ? <span className="float-right">Total</span> : ''}
          <div className="sub header">
            {PokemonList.calculateCaught(this.props.pokemons)} / {this.props.pokemons.length}
            {this.props.totalEntry ? <span className="float-right">{this.props.totalCaught} / {this.props.totalEntry}</span> : ''}
          </div>
        </h2>
        <form className="ui form">
          <div className="field">
            <label>Search</label>
            <input type="text"
                   value={this.state.search}
                   onChange={this.onSearchChange}
            />
          </div>
        </form>
        <div className="not-caught">
          <input type="checkbox"
                 id="not-caught-checkbox"
                 checked={this.state.isChecked}
                 onChange={this.onInputChange} />
          <label
            htmlFor={'not-caught-checkbox'}>Not Caught only ({PokemonList.filterUnCaught(this.props.pokemons)})</label>
        </div>
        <div className="ui three column grid">{this.getList()}</div>
      </div>
    );
  }
};

export default PokemonList;