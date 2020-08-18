import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { addCurrentOrderToState } from "../../../store/clientSide/data/actions";
import { toggleAuth } from "../../../store/clientSide/services/actions";

function LogOutBtn() {
  const state = useSelector((state) => {
    return { currentOrder: state.ordersReducer.currentOrder };
  });
  const dispatch = useDispatch();

  function logOutHandl() {
    ["user", "token"].forEach((item) => localStorage.removeItem(item));
    dispatch(addCurrentOrderToState({ ...state.currentOrder, email: "" }));
    dispatch(toggleAuth(false));
  }
  return (
    <li className="nav-item">
      <Link className="nav-link" to="/" onClick={logOutHandl}>
        Logout
      </Link>
    </li>
  );
}

export default LogOutBtn;
