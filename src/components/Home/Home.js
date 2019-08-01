import React from 'react';
import connect from "react-redux/es/connect/connect";

import PokemonList from "../Lists/PokemonList.Pokebank.map";
import { fetchPokedexPerRegion, fetchAmountFromDb } from "../../actions/pokebank";

class Home extends React.Component {
  state = {
    regions: [
      'kanto',
      'johto',
      'hoenn',
      'sinnoh',
      'unova',
      'kalos',
      'alola'
    ],
  };

  componentDidMount() {
    this.state.regions.forEach(region => {
      this.props.fetchPokedexPerRegion(region)
    })
  }

  render() {
    return (
      <div>
        <PokemonList
          region={this.props.selectedRegion}
          pokemons={this.props.selectedPokedex}
          totalEntry={this.props.totalEntry}
          totalCaught={this.props.totalCaught}
          listType="card"
          parent={'pokebank'}
        />
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.pokebank.isLoading,
    totalEntry: state.pokebank.totalEntry,
    totalCaught: state.pokebank.totalCaught,
  };
};

export default connect(mapStateToProps, { fetchPokedexPerRegion, fetchAmountFromDb })(Home);
