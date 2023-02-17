import API_URL from "../../../API_URL";

export const SET_USER_USERID = "SET_USER_USERID";

export const CHECK_USER_LOGON = "CHECK_USER_LOGON";

export const setUserId = (user_id) => (dispatch) => {
  dispatch({
    type: SET_USER_USERID,
    payload: user_id,
  });
};

export const checkUserLogon = (siginDetails) => {
  return async (dispatch) => {
    try {
      const result = await fetch(API_URL + "/login/", {
        method: "POST",
        headers: {},
        body: JSON.stringify(siginDetails),
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: CHECK_USER_LOGON,
          payload: loginValid,
        });
      } else {
        console.log("Unknown error, No response");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

