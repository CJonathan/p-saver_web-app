import React from 'react';
import '../style/pokemonListItem.css';

import { capitalize } from '../helpers/text';
import { monthDayYeahShort } from '../helpers/date';

const config = {
  normal: '#a8a877',
  fight: '#c03027',
  flying: '#a78ff0',
  poison: '#9f409f',
  ground: '#e0c068',
  rock: '#b7a039',
  bug: '#a7b820',
  ghost: '#705898',
  fire: '#f08031',
  water: '#688ff0',
  grass: '#78c74f',
  electric: '#f8d030',
  psychic: '#f85887',
  ice: '#97d8d8',
  dragon: '#7038f8',
};

class PokemonListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      note: this.props.pkmn.note || '',
      avatar: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pkmn.entry}.png`
    };
  }

  static getTypes(types) {
    return types.map(e => {
      return (
        <a className="item" key={e}>
          <div style={{ backgroundColor: config[e], color: 'white' }} className="ui horizontal label">{e}</div>
        </a>
      );
    });
  }

  onNoteClick = () => {
    this.toggleNotes();
  };

  toggleNotes = () => {
    this.setState({ isShown: !this.state.isShown });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.toggleNotes();
    this.props.onNoteSubmit(this.props.pkmn._id, this.state.note.trim());
  };

  onInputChange = (e) => {
    this.setState({
      note: e.target.value,
    });
  };

  getInput() {
    if(this.state.isShown) {
      return (
        <form
          className="ui form mini"
          onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Note:</label>
            <input
              className="input-height"
              type="text"
              value={this.state.note}
              onChange={this.onInputChange}
              onBlur={this.onFormSubmit}
            />
          </div>
        </form>
      );
    } else {
      return (
        <div
          className="ui form mini">
          <div
            className="field"
            onClick={this.onNoteClick}>
            <label>Note:</label>
            <i className="meta">{this.props.pkmn.note || "write about pokemon..."}</i>
          </div>
        </div>
      );
    }
  }

  render() {
    let { pkmn, onAnchorClick } = this.props;
    return (
      <div className={"column " + (pkmn.isCaught ? 'isCaught' : '') + (pkmn.isNotCatchable ? 'isNotCatchable' : '')}>
        <div className={"ui fluid card"}>
          <div className="content">
            <img className="left floated tiny ui image" alt={pkmn.pokemon.name} src={this.state.avatar} />
            <div className="header">
              #{pkmn.entry} {capitalize(pkmn.pokemon.name)}
            </div>
            <div className="meta">
              {pkmn.pokemon.meta}
            </div>
            {PokemonListItem.getTypes(pkmn.pokemon.types)}
            <div className="description min-height">
              {pkmn.pokemon.about}
            </div>
            <div>
              {this.getInput()}
            </div>
          </div>
          <div className="extra content">
            <div className="ui label">
              <a
                onClick={() => onAnchorClick(pkmn._id, pkmn.nbCaught - 1, pkmn.isCaught)}
                className="minus-button">
                <i className="minus icon" />
              </a>
              Caught: {pkmn.nbCaught}
              <a
                onClick={() => onAnchorClick(pkmn._id, pkmn.nbCaught + 1, pkmn.isCaught)}
                className="detail">
                <i className="plus icon" />
              </a>
            </div>
          </div>
          <div className="extra content">
            Registred first: <strong>{monthDayYeahShort(pkmn.registrationDate)}</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonListItem;