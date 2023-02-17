import API_URL from "../../../API_URL";

export const SET_COMPLAINT_FIRSTNAME = "SET_COMPLAINT_FIRST_NAME";
export const SET_COMPLAINT_LASTNAME = "SET_COMPLAINT_LAST_NAME";
export const SET_COMPLAINT_PHONENUMBER = "SET_COMPLAINT_PHONE_NUMBER";
export const SET_COMPLAINT_ISSUE = "SET_COMPLAINT_ISSUE";
export const SET_COMPLAINT_IMAGE_URL = "SET_COMPLAINT_IMAGE_URL";
export const SET_COMPLAINT_LOCATION = "SET_COMPLAINT_LOCATION";
export const SET_COMPLAINT_DESCRIPTION = "SET_COMPLAINT_DESCRIPTION";

export const GET_COMPLAINT_LIST = "GET_COMPLAINT_LIST";

export const POST_COMPLAINT = "POST_COMPLAINT";

export const getComplaintList = () => {
  return async (dispatch) => {
    try {
      const result = await fetch("https://mocki.io/v1/a92809ab-e62f-455d-b4d9-415604921543", {
        method: "GET",
        headers: {},
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_COMPLAINT_LIST,
          payload: json,
        });
      } else {
        console.log("Unable to fetch!",result);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postComplaint = (complaintDetails) => {
  return async (dispatch) => {
    try {
      const result = await fetch(API_URL + "/complaints/user_id", {
        method: "POST",
        headers: {},
        body: JSON.stringify(complaintDetails),
      });
      console.log(result);
      dispatch({
        type: POST_COMPLAINT,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setComplaintFirstname = (first_name) => (dispatch) => {
  dispatch({
    type: SET_COMPLAINT_FIRSTNAME,
    payload: first_name,
  });
};

export const setComplaintsLastname = (last_name) => (dispatch) => {
  dispatch({
    type: SET_COMPLAINT_LASTNAME,
    payload: last_name,
  });
};

export const setComplaintPhonenumber = (phone_number) => (dispatch) => {
  dispatch({
    type: SET_COMPLAINT_PHONENUMBER,
    payload: phone_number,
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
