const API_URL = "http://192.168.29.71:4000/complaints/5";

export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_PASSWORD = "SET_USER_PASSWORD";

export const SET_COMPLAINT_FIRSTNAME = "SET_COMPLAINT_FIRST_NAME";
export const SET_COMPLAINT_LASTNAME = "SET_COMPLAINT_LAST_NAME";
export const SET_COMPLAINT_PHONENUMBER = "SET_COMPLAINT_PHONE_NUMBER";
export const SET_COMPLAINT_ISSUE = "SET_COMPLAINT_ISSUE";
export const SET_COMPLAINT_IMAGE_URL = "SET_COMPLAINT_IMAGE_URL";
export const SET_COMPLAINT_LOCATION = "SET_COMPLAINT_LOCATION";
export const SET_COMPLAINT_DESCRIPTION = "SET_COMPLAINT_DESCRIPTION";

export const GET_COMPLAINT_LIST = "GET_COMPLAINT_LIST";

export const setEmail = (email) => (dispatch) => {
  dispatch({
    type: SET_USER_EMAIL,
    payload: email,
  });
};

export const setLoginPassword = (loginPassword) => (dispatch) => {
  dispatch({
    type: SET_USER_PASSWORD,
    payload: loginPassword,
  });
};

export const getComplaintList = () => {
  return async (dispatch) => {
    try {
      const result = await fetch(API_URL, {
        method: "GET",
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_COMPLAINT_LIST,
          payload: json,
        });
      } else {
        console.log("Unable to fetch!");
      }
    } catch (error) {
      console.log("fetch error:  "+error);
    }
  };
};

export const setComplaintFirstname = (firstName) => (dispatch) => {
  dispatch({
    type: SET_USER_COMPLAINT_FIRSTNAME,
    payload: firstName,
  });
};

export const setComplaintsLastname = (lastName) => (dispatch) => {
  dispatch({
    type: SET_COMPLAINT_LAST_NAME,
    payload: lastName,
  });
};

export const setComplaintPhonenumber = (phoneNumber) => (dispatch) => {
  dispatch({
    type: SET_COMPLAINT_PHONENUMBER,
    payload: phoneNumber,
  });
};

export const setComplaintIssue = (issue) => (dispatch) => {
  dispatch({
    type: SET_COMPLAINT_ISSUE,
    payload: issue,
  });
};

export const setComplaintImageUrl = (image) => (dispatch) => {
  dispatch({
    type: SET_COMPLAINT_IMAGE_URL,
    payload: image,
  });
};

export const setComplaintLocation = (location) => (dispatch) => {
  dispatch({
    type: SET_COMPLAINT_LOCATION,
    payload: location,
  });
};

export const setComplaintDescription = (description) => (dispatch) => {
  dispatch({
    type: SET_COMPLAINT_DESCRIPTION,
    payload: description,
  });
};
