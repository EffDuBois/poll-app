import { SET_USER_EMAIL, SET_USER_LOGIN_PASSWORD } from "../Actions/Login";

const initialLoginState = {
  email: "",
  loginPassword: "",
};

export function userLoginReducer(state = initialLoginState, action) {
  switch (action.type) {
    case SET_USER_EMAIL:
      return { ...state, email: action.payload };
    case SET_USER_LOGIN_PASSWORD:
      return { ...state, loginPassword: action.payload };
    default:
      return state;
  }
}
