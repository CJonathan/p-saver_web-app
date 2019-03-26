import React from 'react';
import { connect } from 'react-redux';

import PokemonList from "../Lists/PokemonList.Pokedex.map";
import { setRegionAndFetchPokemon, fetchPokedexPerRegion } from "../../actions/pokedex";
import { removeClass } from "../../helpers/cssClass";

class Pokedex extends React.Component {
  componentDidMount = () => {
    this.props.fetchPokedexPerRegion(this.props.selectedRegion);
  };

  onMenuClick = (e) => {
    removeClass(e);
    this.props.setRegionAndFetchPokemon(e.target.dataset.pkdx);
  };

  renderContent() {
    if(this.props.selectedPokedex.length === 0 && this.props.isLoading) {
      return (
        <div>
          <p>Loading</p>
          <div className="ui active centered inline loader" />
        </div>
      );
    } else if(this.props.selectedPokedex.length > 0) {
      return (
        <PokemonList
          region={this.props.selectedRegion}
          pokemons={this.props.selectedPokedex}
          listType={this.props.listType}
          parent={'pokedex'}
        />
      );
    }
    else if(this.props.selectedPokedex.length === 0 && !this.props.isLoading) {
      return <div>No pokemon found. :( </div>;
    }
  }

  render() {
    return (
      <div>
        <div className="ui four item menu regions">
          <a onClick={this.onMenuClick} data-pkdx="kanto" className={"item " + (this.props.selectedRegion === 'kanto' ? 'active' : '')}>Kanto</a>
          <a onClick={this.onMenuClick} data-pkdx="johto" className={"item " + (this.props.selectedRegion === 'johto' ? 'active' : '')}>Johto</a>
          <a onClick={this.onMenuClick} data-pkdx="hoenn" className={"item " + (this.props.selectedRegion === 'hoenn' ? 'active' : '')}>Hoenn</a>
          <a onClick={this.onMenuClick} data-pkdx="sinnoh" className={"item " + (this.props.selectedRegion === 'sinnoh' ? 'active' : '')}>Sinnoh</a>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPokedex: state.pokedex[state.pokedex.selectedRegion],
    selectedRegion: state.pokedex.selectedRegion,
    isLoading: state.pokedex.isLoading,
    listType: state.pokedex.listType,
  };
};

export default connect(mapStateToProps, { setRegionAndFetchPokemon, fetchPokedexPerRegion })(Pokedex);