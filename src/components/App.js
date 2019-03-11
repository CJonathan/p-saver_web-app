import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import Header from "./Header";
import Pokedex from "./pages/Pokedex";
import Pokebank from "./pages/Pokebank";
import AddEntry from "./pages/AddEntry";
import KantoMap from "./pages/KantoMap";
import UsefulLinks from "./pages/UsefulLinks";
import MewGlitch from "./MewGlitch";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="hero-image"/>
          <div className="ui container main">
            <Route path="/" component={Pokedex} exact />
            <Route path="/pokebank" component={Pokebank} />
            <Route path="/add-entry" component={AddEntry} />
            <Route path="/kanto-map" component={KantoMap} />
            <Route path="/useful-links" component={UsefulLinks} />
            <Route path="/mew-glitch-list" component={MewGlitch} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;