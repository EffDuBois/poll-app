import { SET_USER_USERID, CHECK_USER_LOGON } from "../Actions/Login";

const initialLoginState = {
  user_logon: {
    user_id: "",
    logon: true,
  },
};

export function userLoginReducer(state = initialLoginState, action) {
  switch (action.type) {
    case SET_USER_USERID:
      return { ...state, user_logon: { user_id: action.payload } };
    case CHECK_USER_LOGON:
      return { ...state, user_logon: action.payload };
    default:
      return state;
  }
}
