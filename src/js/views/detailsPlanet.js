import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsPlanet = (props) => {
  const [planet, setPlanet] = useState(props.location.state);

  return (
    <div className="jumbotron">
    <div className="imagePlaceHolder d-flex">
        <img
          src="https://wallpaperaccess.com/full/2137903.jpg"
          style={{ height: "300px", width: "400px" }}
        />
        <div className="textDescription">
          <div className="planetTitle">
            <h2>{planet.name}</h2>
          </div>
          <div className="planetText">
            {" "}
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis lacus nec velit iaculis luctus. Nullam tempus lectus a
              velit ornare commodo.
            </h5>
          </div>
        </div>
      </div>
	  <div className="pageBottom d-flex justify-content-between">
        <div className="box1 d-flex justify-content-center">
          <div className="header1">
            <h4>Climate</h4>
          </div>
          <div className="description1"><h5>{planet.climate}</h5></div>
        </div>
		<div className="box1 d-flex justify-content-center">
          <div className="header1">
            <h4>Terrain</h4>
          </div>
          <div className="description1"><h5>{planet.terrain}</h5></div>
        </div>
		<div className="box1 d-flex justify-content-center">
          <div className="header1">
            <h4>Population</h4>
          </div>
          <div className="description1"><h5>{planet.population}</h5></div>
        </div>
		<div className="box1 d-flex justify-content-center">
          <div className="header1">
            <h4>Gravity</h4>
          </div>
          <div className="description1"><h5>{planet.gravity}</h5></div>
        </div>
      </div>
    </div>
  );
};

DetailsPlanet.propTypes = {
  match: PropTypes.object,
};
