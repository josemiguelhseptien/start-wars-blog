import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";

export const Home = () => {
  const [planets, setPlanets] = useState([]);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getApiCharacters();
    getApiPlanets();
  }, []);

  const getApiCharacters = () => {
    fetch("https://swapi.dev/api/people")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // Read the response as json.
        return response.json();
      })
      .then((responseAsJson) => {
        // Do stuff with the JSONified response
        setCharacters(responseAsJson.results);
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  };

  const getApiPlanets = () => {
    fetch("https://swapi.dev/api/planets")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // Read the response as json.
        return response.json();
      })
      .then((responseAsJson) => {
        // Do stuff with the JSONified response
        setPlanets(responseAsJson.results);
      })
      .catch((error) => {
        console.log("Looks like there was a problem: \n", error);
      });
  };

  return (
    <div className="container">
      <div className="characterTitle">
        <h1>Characters</h1>
        <div className="characterCardList">
          {characters.map((character, index) => {
            return <CharacterCard key={index} char={character} />;
          })}
        </div>
      </div>
      <div className="planetTitle">
		  <h1>Planets</h1>
        <div className="planetCardList">
          {planets.map((planet, index) => {
            return <PlanetCard key={index} plan={planet} />;
          })}
        </div>
      </div>
    </div>
  );
};
