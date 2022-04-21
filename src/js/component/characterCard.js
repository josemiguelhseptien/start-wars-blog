import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = (props) => {
    return (
      <div className="card" style={{width: "18rem"}}>
        <img src="http://cdn.pastemagazine.com/www/blogs/lists/starwars.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.char.name}</h5>
          <p className="text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
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
        <button type="button" class="btn btn-outline-danger"><i class="fas fa-heart"></i></button>
        </div>
      </div>
    );
  
};

CharacterCard.propTypes = {
  match: PropTypes.object,
};
