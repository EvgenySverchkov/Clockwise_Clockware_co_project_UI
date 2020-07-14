import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

function AddNewTownForm({ handler, newTownFormIsLoad }) {
  return (
    <form onSubmit={handler}>
      <div className="form-group row justify-content-sm-center">
        <label
          htmlFor="town"
          className="col-sm-4 col-lg-3 col-xl-3 col-form-label"
        >
          Enter new town
        </label>
        <div className="col-sm-5 col-xl-4">
          <input id="town" type="text" className="form-control" />
        </div>
      </div>
      <div className="row justify-content-sm-center">
        <input
          type="submit"
          value= {newTownFormIsLoad ? "Loading..." : "Add town"}
          className="btn btn-primary col-12 col-sm-4 mt-3"
        />
      </div>
    </form>
  );
}

AddNewTownForm.propTypes = {
  handler: PropTypes.func,
};

function mapStateToProps(state){
  return {
    newTownFormIsLoad: state.main_adminPanel_reduser.newTownFormIsLoad
  }
}

export default connect(mapStateToProps)(AddNewTownForm);
