import React from "react";
import PropTypes from "prop-types";

import MasterCard from "./MasterCard";
import ComeBackBtn from "./ComeBackBtn";
import SubmitBtn from "./SubmitBtn";
import EmptyList from "./EmptyList";

function FreeMastersList({ submitHandler, isLoad, suitableMasters, backTo }) {
  if (suitableMasters.length === 0) {
    return (
      <>
        <EmptyList>List is empty...</EmptyList>
        <ComeBackBtn backTo={backTo} />
      </>
    );
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="row">
        {suitableMasters.map((item) => {
          return (
            <MasterCard
              id={item.id}
              name={item.name}
              rating={item.rating}
              towns={item.towns}
              key={item.id}
            />
          );
        })}
      </div>
      <ComeBackBtn backTo={backTo} />
      <SubmitBtn isLoad={isLoad} />
    </form>
  );
}

FreeMastersList.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  isLoad: PropTypes.bool,
  suitableMasters: PropTypes.array,
  backTo: PropTypes.string.isRequired,
};

export default FreeMastersList;
