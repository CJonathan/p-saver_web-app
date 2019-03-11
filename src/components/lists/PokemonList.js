import React from 'react';
import PokemonBankListItem from '../items/PokemonBankListItem';
import PokemonListCardItem from '../items/PokemonListCardItem';
import { capitalize } from "../../helpers/text";

class PokemonList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      listType: this.props.listType,
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
    if(this.state.listType === 'list'){
      return list.map(pokemon => {
        return (
          <PokemonBankListItem
            key={pokemon._id}
            onNoteSubmit={this.props.onNoteSubmit}
            onAnchorClick={this.props.onAnchorClick}
            region={this.props.region}
            pkmn={pokemon}
          />
        );
      });
    } else {
      list = list.filter(pokemon => !this.state.isChecked || !pokemon.isCaught);
      list = list.filter(pokemon => !this.state.isChecked || !pokemon.isNotCatchable);
      return list.map(pokemon => {
        return (
          <PokemonListCardItem
            key={pokemon._id}
            onNoteSubmit={this.props.onNoteSubmit}
            onAnchorClick={this.props.onAnchorClick}
            region={this.props.region}
            pkmn={pokemon}
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
        <label htmlFor={'not-caught-checkbox'}>Not Caught only ({PokemonList.filterUnCaught(this.props.pokemons)})</label>
    </div>;
    return this.props.parent === 'pokedex' ? html : '';
  }

  onFilterClick = (e, type) => {
    this.setState({
      listType: type
    })
  };

  render() {
    const isListActive = this.state.listType === 'list' ? 'active' : '';
    const isCardActive = this.state.listType === 'card' ? 'active' : '';
    const listType = this.state.listType === 'list' ? 'centered' : 'three column';
    const nbPokemonCaught = PokemonList.calculateCaught(this.props.pokemons);
    const { region, totalEntry, pokemons, totalCaught} = this.props;

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
              <button className={"ui button " + isListActive }
                      type="button"
                      onClick={(e) => this.onFilterClick(e, 'list')}>
                <i className="list icon"/>
              </button>
              <button className={"ui button " + isCardActive }
                      type="button"
                      onClick={(e) => this.onFilterClick(e, 'card')}>
                <i className="address card icon"/>
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
};

export default PokemonList;