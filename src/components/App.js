import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import Header from "./Header";
import Pokedex from "./Pokedex";
import Pokebank from "./Pokebank";
import AddEntry from "./AddEntry";
import KantoMap from "./KantoMap";
import UsefulLinks from "./UsefulLinks";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="ui container main">
            <Route path="/" component={Pokedex} exact />
            <Route path="/pokebank" component={Pokebank} />
            <Route path="/add-entry" component={AddEntry} />
            <Route path="/kanto-map" component={KantoMap} />
            <Route path="/useful-links" component={UsefulLinks} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;