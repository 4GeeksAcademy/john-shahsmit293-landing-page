import React from "react";
import propTypes, { number, string } from "prop-types";

const Cards = (props) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <div className="card">
        <img src={props.photo} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <hr />
          <a href="#" className="btn btn-primary">
            {props.link}
          </a>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  photo: propTypes.string,
  title: propTypes.string,
  link: propTypes.string,
};

export default Cards;
