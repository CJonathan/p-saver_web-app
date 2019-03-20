import React from 'react';
import '../../style/pokemonBankListItem.css';

class PokemonListCardItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOverlayShown: false,
      note: this.props.pkmn.note || '',
      avatar: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pkmn.entry}.png`,
    };
  }

  onMouseEnter = () => {
    this.setState({
      isOverlayShown: true,
    });
  };

  onMouseLeave = () => {
    this.setState({
      isOverlayShown: false,
    });
  };

  onContextMenu = (e, id, region, total, isCaught) => {
    e.preventDefault();
    this.props.onAnchorClick(id, region, total, isCaught);
  };

  render() {
    let { pkmn, onAnchorClick } = this.props;
    return (
      <div onMouseEnter={this.onMouseEnter}
           onMouseLeave={this.onMouseLeave}
           className={"bank-item " + (pkmn.isCaught ? 'isCaught' : pkmn.isNotCatchable ? 'isNotCatchable isNotCaught' : 'isNotCaught')}>
        <div className="bank-card">
          <img onClick={() => onAnchorClick(pkmn._id, pkmn.nbCaught + 1, pkmn.isCaught)}
               onContextMenu={(e) => this.onContextMenu(e, pkmn._id, pkmn.region, pkmn.nbCaught - 1, pkmn.isCaught)}
               className="tiny ui image"
               alt={pkmn.pokemon.name}
               src={this.state.avatar} />
          {pkmn.nbCaught > 1 ? <a className="ui red circular label">{pkmn.nbCaught}</a> : ''}
        </div>
      </div>
    );
  }
}

export default PokemonListCardItem;