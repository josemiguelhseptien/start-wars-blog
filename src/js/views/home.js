import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { Context } from "../store/appContext";


export const Home = () => {
  const { store, actions } = useContext(Context);
 
  return (
    <div className="container">
      <div className="characterTitle">
        <h1>Characters</h1>
        <div className="characterCardList">
          {store.people.map((character, index) => {
            return <CharacterCard key={index} char={character} />;
          })}
        </div>
      </div>
      <div className="planetTitle">
		  <h1>Planets</h1>
        <div className="planetCardList">
          {store.planets.map((planet, index) => {
            return <PlanetCard key={index} plan={planet} />;
          })}
        </div>
      </div>
    </div>
  );
};
