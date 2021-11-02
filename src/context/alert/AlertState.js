import { useReducer } from "react";

import AlertReducer from "./AlertReducer";
import AlertContext from "./alertContext";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // SET ALERT
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {msg, type}
    })
    setTimeout(() => {
    RemoveAlert();
    }, 3500);
  };
  // REMOVE ALERT
  const RemoveAlert = () => dispatch({type: REMOVE_ALERT})
  return <AlertContext.Provider
  value={{
    alert: state,
    setAlert
  }}
  >{props.children}</AlertContext.Provider>;
};

export default AlertState;
