import React from "react";
import propTypes from "prop-types";

const Footer = (props) => {
  return (
    <div className="card text-center bg-dark text-light rounded-0">
      <div className="card-header">Copyright@ Your Website {props.year}</div>
    </div>
  );
};

Footer.propTypes = {
  year: propTypes.number,
};
export default Footer;
