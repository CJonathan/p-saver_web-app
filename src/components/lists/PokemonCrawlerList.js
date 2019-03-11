import React from 'react';
import PokemonCrawlerItem from "../items/PokemonCrawlerItem";
import { capitalize } from "../../helpers/text";

const PokemonCrawlerList = ({ region, pokemons, destination }) => {
  const list = pokemons.map(pokemon => {
    return (
      <PokemonCrawlerItem
        region={region}
        destination={destination}
        key={pokemon.entry}
        pokemon={pokemon}
      />
    );
  });
  return (
    <div className="pokemon-list">
      <h2 className="ui header">Fetching data for the {capitalize(region)} region...</h2>
      <div className="ui cards">{list}</div>
    </div>
  );
};

export default PokemonCrawlerList;