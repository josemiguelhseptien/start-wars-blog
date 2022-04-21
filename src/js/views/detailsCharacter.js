import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsCharacter = (props) => {
  const [character, setCharacter] = useState(props.location.state);

  return (
    <div className="jumbotron ">
      <div className="descriptionContainer d-flex">
        <div className="imagePlaceHolder"></div>
        <img src="http://cdn.pastemagazine.com/www/blogs/lists/starwars.jpg"/>
        <div className="textDescription">
          <div className="characterTitle"><h2>{character.name}</h2></div>
          <div className="characterText">
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis lacus nec velit iaculis luctus. Nullam tempus lectus a
              velit ornare commodo.
            </h5>
          </div>
        </div>
      </div>
      <div className="pageBottom d-flex justify-content-between">
        <div className="box1">
          <div className="header1">
            <h4>Height</h4>
          </div>
          <div className="description1"><h5>{character.height}</h5></div>
        </div>
		<div className="box1">
          <div className="header1">
            <h4>Mass</h4>
          </div>
          <div className="description1"><h5>{character.mass}</h5></div>
        </div>
		<div className="box1">
          <div className="header1">
            <h4>Gender</h4>
          </div>
          <div className="description1"><h5>{character.gender}</h5></div>
        </div>
		<div className="box1">
          <div className="header1">
            <h4>Birth year</h4>
          </div>
          <div className="description1"><h5>{character.birth_year}</h5></div>
        </div>
      </div>
    </div>
  );
};

DetailsCharacter.propTypes = {
  match: PropTypes.object,
};
