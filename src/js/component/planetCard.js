import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetCard = (props) => {

  const { store, actions } = useContext(Context);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://wallpaperaccess.com/full/2137903.jpg"  style={{ height: "auto", width: "100%" }}className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.plan.name}</h5>
       
          <div>Terrain: {props.plan.terrain}</div>
          <div>Surface water: {props.plan.surface_water}</div>
          <div>Population: {props.plan.population}</div>
       
        <div className="d-flex justify-content-between">
        <Link
          to={{
            pathname: `/detailsplanet/${props.plan.name}`,
            state: props.plan,
          }}
          className="btn btn-primary"
        >
          {" "}
          Go somewhere
        </Link>
        <button type="button" className="btn btn-outline-danger" onClick={(e)=>{actions.addToFavorites(props.plan),actions.preventRepeat(props.plan),actions.getType(props.plan)}} ><i className="fas fa-heart"></i></button>
        </div>
      </div>
    </div>
  );
};

PlanetCard.propTypes = {
  match: PropTypes.object,
};
