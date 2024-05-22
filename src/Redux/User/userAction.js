import {
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";
import axios from "axios";

export function fetchUser() {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_REQUEST });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch({ type: FETCH_USER_SUCCESS, payload: res.data }))
      .catch((err) =>
        dispatch({ type: FETCH_USER_ERROR, payload: err.message })
      );
  };
}
