import React from 'react';
import '../../style/pokemonBankListItem.css';

class PokemonIconItem extends React.Component {

  onContextMenu = (e, pkmn, nc, earlyExit) => {
    e.preventDefault();
    this.props.onUpdateCaughtNb(pkmn, nc, earlyExit);
  };

  onUpdateClick(pkmn, nbCaught){
    this.props.onUpdateCaughtNb(pkmn, nbCaught)
  }

  render() {
    let { pkmn } = this.props;
    return (
      <div className={"bank-item " + (pkmn.isCaught ? 'isCaught' : pkmn.isNotCatchable ? 'isNotCatchable isNotCaught' : 'isNotCaught')}>
        <div className="bank-card">
          <img onClick={() => this.onUpdateClick(pkmn, pkmn.nbCaught + 1)}
               onContextMenu={(e) => this.onContextMenu(e, pkmn, pkmn.nbCaught - 1, pkmn.nbCaught === -1)}
               className="tiny ui image"
               alt={pkmn.pokemon.name}
               src={pkmn.pokemon.avatar} />
          {pkmn.nbCaught > 1 ? <a className="ui red circular label">{pkmn.nbCaught}</a> : ''}
        </div>
      </div>
    );
  }
}

export default PokemonIconItem;
