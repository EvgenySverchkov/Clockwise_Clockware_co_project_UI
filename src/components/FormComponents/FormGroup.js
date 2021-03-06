import React from "react";
import PropTypes from "prop-types";

const FormGroup = ({ children, isRow = true }) => (
  <div
    className={`form-group ${
      isRow ? "row" : ""
    } text-center text-sm-left col-12 col-md-10 col-lg-8`}
  >
    {children}
  </div>
);

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  isRow: PropTypes.bool,
};

export default FormGroup;
