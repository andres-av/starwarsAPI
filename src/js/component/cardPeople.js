// Import React libraries
import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

// Import Images
import portal from "../../img/portal.png"

// Import Styles
import "../../styles/components/card.css";

const CardPeople = ({person})=> {

  return (
      <div className="card">
        <img src={person.image} className="card-img-top" alt="Character Picture" />
        <div className="card-body">
          <div className="btnContainer" >
          <h5 className="card-title">{person.name}</h5>
          <button type="button" className="btn btn-outline-warning">
            <i className="fa-solid fa-heart-circle-plus"></i>
            </button>
          </div>
          <p className="card-text text-wrap">Gender: {person.gender}</p>
          <p className="card-text text-wrap">Species: {person.species}</p>
          <p className="card-text text-wrap">Status: {person.status}</p>
            <Link to="/learn-more/people" className="btn portal">
                <img src={portal} width="50" height="50"/>
            </Link>
        </div>
      </div>
  );
};

export default CardPeople