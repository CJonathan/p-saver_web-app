import React from 'react';
import johnApi from '../../api/johnApi';
import PokemonList from "../lists/PokemonList";
import { findWithAttr } from "../../helpers/filters";

class Pokebank extends React.Component {

  static removeClass(e) {
    let container = document.querySelector(".regions");
    let elems = container.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
    });
    e.target.classList.add('active');
  }

  state = {
    isLoading: false,
    totalEntry: 0,
    totalCaught: 0,
    pokemons: [],
  };

  componentDidMount = () => {
    this.fetchDataFromDb('kanto');
    this.fetchAmountFromDb();
  };

  toggleLoading = () => {
    this.setState({
      isLoading: !this.state.isLoading,
    });
  };

  onAnchorClick = async(id, nc, ic) => {
    console.log(id, nc, ic);
    let nbCaught = nc <= 0 ? 0 : nc;
    let isCaught = nbCaught > 0;
    let isNotCatchable = nbCaught === -1;
    let registrationDate = nbCaught === 1 && ic === false ? new Date() : nbCaught === 0 ? null : undefined;
    this.saveDateInDb(id, nbCaught, isCaught, isNotCatchable, registrationDate);
  };

  onNoteSubmit = async(id, note) => {
    const res = await johnApi.patch(`/bank/${id}`, { note });
    this.replaceInArray(id, res.data.pokemon);
  };

  replaceInArray(id, pkmn) {
    let idx = findWithAttr(this.state.pokemons, '_id', id);
    if(idx > -1) {
      let pkms = this.state.pokemons;
      pkms.splice(idx, 1, pkmn);
      this.setState({
        pokemons: pkms,
      });
    }
  }

  onMenuClick = (e) => {
    Pokebank.removeClass(e);
    this.fetchDataFromDb(e.target.dataset.pkdx);
  };

  saveDateInDb = async(id, nbCaught, isCaught, isNotCatchable, registrationDate) => {
    const res = await johnApi.patch(`/bank/${id}`, { nbCaught, isCaught, isNotCatchable, registrationDate });
    this.replaceInArray(id, res.data.pokemon);
    this.setState({
      totalCaught: res.data.totalCaught
    })
  };

  fetchDataFromDb = async(pkdx) => {
    this.toggleLoading();
    const res = await johnApi.get(`/bank?region=${pkdx.toLowerCase()}`);
    this.setState({
      pokemons: res.data.pokemons,
      region: res.data.region,
      isLoading: false,
    });
  };

  fetchAmountFromDb = async() => {
    const res = await johnApi.get('/bank/count');
    this.setState({
      totalEntry: res.data.totalEntry,
      totalCaught: res.data.totalCaught
    })
  };

  renderContent() {
    if(this.state.pokemons.length === 0 && this.state.isLoading) {
      return (
        <div>
          <p>Loading</p>
          <div className="ui active centered inline loader" />
        </div>
      );
    } else if(this.state.pokemons.length > 0) {
      return (
        <PokemonList
          onNoteSubmit={this.onNoteSubmit}
          onInputChange={this.onInputChange}
          onAnchorClick={this.onAnchorClick}
          totalEntry={this.state.totalEntry}
          totalCaught={this.state.totalCaught}
          region={this.state.region}
          pokemons={this.state.pokemons}
          parent={'pokebank'}
          listType={'list'}
        />
      );
    } else if(this.state.pokemons.length === 0 && !this.state.isLoading) {
      return <div>No pokemon found. :( </div>;
    }
  }

  render() {
    return (
      <div>
        <div className="ui four item menu regions">
          <a onClick={this.onMenuClick} data-pkdx="kanto" className="item active">Kanto</a>
          <a onClick={this.onMenuClick} data-pkdx="Johto" className="item">Johto</a>
          <a onClick={this.onMenuClick} data-pkdx="Hoenn" className="item">Hoenn</a>
          <a onClick={this.onMenuClick} data-pkdx="Sinnoh" className="item">Sinnoh</a>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

export default Pokebank;