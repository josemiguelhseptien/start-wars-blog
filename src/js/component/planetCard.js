import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.plan.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
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
      </div>
    </div>
  );
};

PlanetCard.propTypes = {
  match: PropTypes.object,
};
