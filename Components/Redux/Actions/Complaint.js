import API_URL from "../../../API_URL";

export const GET_COMPLAINT_LIST = "GET_COMPLAINT_LIST";

export const POST_COMPLAINT = "POST_COMPLAINT";

export const getComplaintList = () => {
  return async (dispatch) => {
    try {
      const result = await fetch(
        "https://mocki.io/v1/a92809ab-e62f-455d-b4d9-415604921543",
        {
          method: "GET",
          headers: {},
        }
      );
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_COMPLAINT_LIST,
          payload: json,
        });
      } else {
        console.log("Unable to fetch!", result);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postComplaint = (ComplaintDetails) => {
  return async (dispatch) => {
    try {
      const result = await fetch(API_URL + "/complaints/user_id", {
        method: "POST",
        headers: {},
        body: JSON.stringify(ComplaintDetails),
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: POST_COMPLAINT,
          payload: json,
        });
      } else {
        console.log("error no resposnse received");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
