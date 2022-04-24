import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = (props) => {
  const { store, actions } = useContext(Context);
    return (
      <div className="card" style={{width: "18rem"}}>
        <img src="http://cdn.pastemagazine.com/www/blogs/lists/starwars.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.char.name}</h5>
          <div>Gender: {props.char.gender}</div>
          <div>Weight: {props.char.mass}</div>
          <div>Birth year{props.char.birth_year}</div>
          <div className="d-flex justify-content-between">
          <Link
          to={{
            pathname: `/detailscharacter/${props.char.name}`,
            state: props.char,
          }}
          className="btn btn-primary"
        >
          {" "}
          Go somewhere
        </Link>
        <button type="button" className="btn btn-outline-danger" onClick={()=>{actions.addToFavorites(props.char),actions.preventRepeat(props.char),actions.getType(props.char)}}><i className="fas fa-heart"></i></button>
        </div>
        </div>
      </div>
    );
  
};

CharacterCard.propTypes = {
  match: PropTypes.object,
};
