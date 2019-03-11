import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui top fixed menu">
      <div className="item">
        <img alt="logo" className="ui image mini" src="pokeball.png" />
      </div>
      <NavLink to="/" className="item" activeClassName="active" exact={true}>Pokedex</NavLink>
      <NavLink to="/pokebank" className="item" activeClassName="active" >Pokebank</NavLink>
      <NavLink to="/kanto-map" className="item" activeClassName="active" >Kanto Fly map</NavLink>
      <NavLink to="/useful-links" className="item" activeClassName="active" >Links</NavLink>
    </div>
  );
};

export default Header;