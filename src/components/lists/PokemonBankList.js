import React from 'react';
import PokemonBankListItem from '../items/PokemonBankListItem';
import PokemonListCardItem from '../items/PokemonListCardItem';
import { capitalize } from "../../helpers/text";

class PokemonBankList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      listType: 'list',
      search: '',
    };
  }

  static filterCaught(pkms) {
    return pkms.filter(e => {
      return e.isCaught;
    });
  };

  static calculateCaught(pkms) {
    return PokemonBankList.filterCaught(pkms).length;
  }

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

  onFilterClick = (e, type) => {
    this.setState({
      listType: type
    })
  };

  render() {
    const isListActive = this.state.listType === 'list' ? 'active' : '';
    const isCardActive = this.state.listType === 'card' ? 'active' : '';
    const listType = this.state.listType === 'list' ? 'centered' : 'three column';
    const nbPokemonCaught = PokemonBankList.calculateCaught(this.props.pokemons)

    return (
      <div className="pokemon-list">
        <h2 className="ui header">{capitalize(this.props.region)}
          {this.props.totalEntry ? <span className="float-right">Total</span> : ''}
          <div className="sub header">
            {nbPokemonCaught} / {this.props.pokemons.length}
            {this.props.totalEntry ? <span className="float-right">
              {this.props.totalCaught} / {this.props.totalEntry}</span> : ''}
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
        <div className={"ui grid " + listType}>{this.getList()}</div>
      </div>
    );
  }
}

export default PokemonBankList;