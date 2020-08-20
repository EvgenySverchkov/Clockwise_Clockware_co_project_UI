import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import postData from "../../components/AdminScreen/services/postData";
import FormGroup from "../../components/FormComponents/FormGroup";
import Label from "../../components/FormComponents/Label";
import TextField from "../../components/FormComponents/TextField";
import Button from "../../components/FormComponents/Button";

import { SERVERDOMAIN } from "../../services/serverUrls";

import { addNewTown } from "../../store/townsManagement/actions";
import {
  changeSuccessModalDataAdmin,
  changeModalWarningDataAdmin,
} from "../../store/adminModalWindows/actions";
import { changeAddMewTownFormIsLoad } from "../../store/townsManagement/actions";

function AddNewTownPage({ history }) {
  const state = useSelector((state) => {
    return {
      newTownFormIsLoad: state.townReduser.newTownFormIsLoad,
    };
  });
  const dispatch = useDispatch();

  function handler(e) {
    e.preventDefault();
    let townName = e.target.town.value;
    townName =
      townName.charAt(0).toUpperCase() + townName.slice(1).toLowerCase();
    let infoObj = {
      name: townName,
    };
    dispatch(changeAddMewTownFormIsLoad(true));
    postData(`${SERVERDOMAIN}/towns/post`, infoObj)
      .then((data) => {
        if (data.success) {
          dispatch(addNewTown(data.payload));
          dispatch(
            changeSuccessModalDataAdmin({
              msg: data.msg,
              backBtnTxt: "Go to the list of towns",
              backTo: "/admin/townsList",
            })
          );
          history.push("/admin");
          document.getElementById("callSuccessModalBtn").click();
        } else {
          dispatch(changeModalWarningDataAdmin({ msg: data.msg }));
          document.getElementById("callWarningModalBtn").click();
        }
        dispatch(changeAddMewTownFormIsLoad(false));
      })
      .catch((err) => alert(err));
  }
  return (
    <form onSubmit={handler} className="mt-4 row justify-content-center">
      <FormGroup>
        <Label forId="town">Enter new town</Label>
        <TextField id={"town"} />
      </FormGroup>
      <Button loading={state.newTownFormIsLoad} value={"Add town"} />
    </form>
  );
}

AddNewTownPage.propTypes = {
  history: PropTypes.object,
};

export default AddNewTownPage;
