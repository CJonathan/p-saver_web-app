import React from 'react';

const data = [
  {
    header: "Every Mithycal:",
    url: "https://www.youtube.com/watch?v=YlX2VwgmaUE"
  },
  {
    header: "Get a PokeBank ready miew",
    url: "https://www.reddit.com/r/pokemon/comments/5q4meg/how_to_trick_pokebank_into_thinking_your_gen_1/"
  },
  {
    header: "Get 8f (change dresser ID;OD)",
    url: "https://www.youtube.com/watch?v=H8AgGp5cqPI&feature=youtu.be"
  },
  {
    header: "Speed Run pokemon red/blue",
    url: "https://www.youtube.com/watch?v=XAXGQ8oywxM"
  },
  {
    header: "Old man glitch tainer name red/blue",
    url: "https://glitchcity.info/wiki/Old_man_glitch"
  },
  {
    header: "Pokemon index number (glitch)",
    url: "https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_index_number_%28Generation_I%29"
  },
  {
    header: "Catch pokemon lvl 1 to instant 100 red/blue",
    url: "https://www.ocf.berkeley.edu/~jdonald/pokemon/level100.html"
  },
  {
    header: "Pokemon Exchange process",
    url: "https://www.thonky.com/pokemon/trade-from-red-to-gold"
  },
  {
    header: "Pokemon Ranger delete save (forum)",
    url: "https://projectpokemon.org/home/forums/topic/40247-pokemon-ranger-manaphy-egg-reset/"
  },
  {
    header: "3ds save backup tool",
    url: "https://projectpokemon.org/home/forums/topic/11330-a-tool-to-backup-hgss-saves/"
  },
  {
    header: "3ds install homebrew",
    url: "https://www.generation-game.com/tuto-hack-3ds-comment-installer-homebrew-launcher/"
  }
];

function renderData(){
  return data.map(e => {
    return(
      <div className="ui list" key={e.header}>
        <div className="item">
          <div className="header">{e.header}</div>
          <a href={e.url} rel="noopener noreferrer" target="_blank">{e.url}</a>
        </div>
      </div>
    )
  })
}

const UsefulLinks = () => {

  return (
    <div>
      {renderData()}
    </div>
  );
};

export default UsefulLinks;