import React from 'react';
import pokeApi from '../../api/pokeapi';

import PokemonCrawlerList from '../Crawler/PokemonCrawlerList';

const config = {
  'kanto': 1,
  'johto': 2,
  'hoenn': 3,
  'sinnoh': 4,
};

class AddEntry extends React.Component {
  state = {
    isChecked: false,
    generation: '',
    region: '',
    isLoading: false,
    pokemons: [],
  };

  onCheckboxChange = (e) => {
    this.setState({
      isChecked: e.target.checked,
    });
  };

  onInputChange = (e) => {
    this.setState({
      generation: e.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    this.fetchPokedex();
  };

  fetchPokedex = async() => {
    const res = await pokeApi.get(`/generation/${config[this.state.generation.toLowerCase()]}`);
    this.setState({
      pokemons: res.data.pokemon_species,
      region: res.data.main_region.name,
      isLoading: false,
    });
  };

  renderContent() {
    if(this.state.pokemons.length === 0 && this.state.isLoading) {
      return (
        <div className="ui segment">
          <p>Loading</p>
          <div className="ui active centered inline loader"></div>
        </div>
      );
    } else if(this.state.pokemons.length > 0) {
      return (
        <PokemonCrawlerList
          region={this.state.region}
          destination={this.state.isChecked ? '/pokebank' : '/pokedex'}
          pokemons={this.state.pokemons}
        />
      );
    }
    return (
      <div>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor={'gen'}>Select region</label>
            <div className="ui icon input">
              <input
                id="gen"
                type="text"
                placeholder="Region"
                value={this.state.generation}
                onChange={this.onInputChange}
              />
            </div>
          </div>
        </form>
        <div className="not-caught">
          <input type="checkbox"
                 id="checkbox-bank"
                 checked={this.state.isChecked}
                 onChange={this.onCheckboxChange} />
          <label htmlFor={'checkbox-bank'}>Add region to bank</label>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default AddEntry;