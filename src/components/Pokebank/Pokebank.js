import React from 'react';
import { connect } from 'react-redux';

import johnApi from "../../api/johnApi";

import PokemonList from "../Lists/PokemonList.Pokebank.map";
import { setRegionAndFetchPokemon, fetchPokedexPerRegion, fetchAmountFromDb } from "../../actions/pokebank";
import { removeClass } from "../../helpers/cssClass";

class Pokebank extends React.Component {
  state = {
    totalEntry: 0,
    totalCaught: 0,
  };

  componentDidMount = () => {
    this.props.fetchAmountFromDb();
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
          totalEntry={this.props.totalEntry}
          totalCaught={this.props.totalCaught}
          listType={this.props.listType}
          parent={'pokebank'}
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
    selectedPokedex: state.pokebank[state.pokebank.selectedRegion],
    selectedRegion: state.pokebank.selectedRegion,
    isLoading: state.pokebank.isLoading,
    listType: state.pokebank.listType,
    totalEntry: state.pokebank.totalEntry,
    totalCaught: state.pokebank.totalCaught,
  };
};

export default connect(mapStateToProps, { setRegionAndFetchPokemon, fetchPokedexPerRegion, fetchAmountFromDb })(Pokebank);