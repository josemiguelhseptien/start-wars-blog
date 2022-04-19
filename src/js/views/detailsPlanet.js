import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsPlanet = (props) => {
 
	const [planet,setPlanet]=useState(props.location.state)

    return (
		<div className="jumbotron">
	
		<div className="imagePlaceHolder"></div>
		<div className="textDescription">
			<div className="characterTitle">{planet.name}</div>
		</div>
	
		<div className="pageBottom"></div>
	</div>
    );
  
};

DetailsPlanet.propTypes = {
  match: PropTypes.object,
};


