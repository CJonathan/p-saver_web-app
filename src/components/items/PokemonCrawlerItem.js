import React from 'react';
import pokeApi from '../../api/pokeapi';
import johnApi from '../../api/johnApi';

class PokemonCrawlerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      data: {
        entry: '',
        pokemon: {
          name: '',
          avatar: '',
          about: '',
          meta: '',
          types: [],
        },
        region: '',
        isCaught: false,
        isNotCatchable: false,
        nbCaught: 0,
      },
    };
  }

  componentDidMount = async() => {
    let data = { ...this.state.data };
    let arr = this.props.pokemon.url.split('/');
    data.entry = arr[arr.length - 2];
    data.region = this.props.region;
    let pokemon = { ...data.pokemon };
    pokemon.avatar = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.entry}.png`;
    const res = await pokeApi.get(`/pokemon-species/${data.entry}`);
    pokemon.about = res.data.flavor_text_entries.filter(e => {
      return e.language.name === 'fr';
    })[0].flavor_text;
    pokemon.meta = res.data.genera.filter(e => {
      return e.language.name === 'fr';
    })[0].genus;
    pokemon.name = res.data.names.filter(e => {
      return e.language.name === 'fr';
    })[0].name;
    const res2 = await pokeApi.get(`/pokemon/${data.entry}`);
    let types = [];
    for(let i = 0; i < res2.data.types.length; i++) {
      types.push(res2.data.types[i].type.name);
    }
    pokemon.types = types;
    data.pokemon = pokemon;
    this.setState({
      data,
    });
    johnApi.post(this.props.destination, this.state.data)
           .then(() => {
             this.setState({
               done: true,
             });
           });
  };

  getRender() {
    if(this.state.done) {
      return (
        <div className="ui card">
          <div className="ui label green">Done: Yes</div>
        </div>
      );
    } else {
      return (
        <div className="ui card">
          <div className="ui label red">Done: No</div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.getRender()}
      </div>
    );
  }
}

export default PokemonCrawlerItem;