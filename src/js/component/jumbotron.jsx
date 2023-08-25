import React from "react";
import propTypes, { number, string } from "prop-types";


const Jumbotron = (props) => {
  return (
    <div className="container p-5">
      <h1 className="display-4">{props.jumbotronTitle}</h1>
      <p className="lead">
        {props.description}
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          {props.button}
        </a>
      </p>
    </div>
  );
};

Jumbotron.propTypes = {
  jumbotronTitle: propTypes.string,
  description: propTypes.string,
  button: propTypes.string
}

export default Jumbotron;
