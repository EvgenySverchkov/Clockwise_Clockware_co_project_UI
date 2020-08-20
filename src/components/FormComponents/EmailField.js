import React from "react";
import PropTypes from "prop-types";

const EmailField = ({ id, chngHandler, value, readonly=false }) => (
  <div className="col-sm-8 col-md-8">
    <input
      id={id}
      type="email"
      name="email"
      className="form-control"
      onChange={chngHandler||null}
      value={value}
      required
      readOnly = {readonly}
    />
  </div>
);

EmailField.propTypes = {
  id: PropTypes.string,
  chngHandler: PropTypes.func,
  value: PropTypes.string,
};

export default EmailField;
