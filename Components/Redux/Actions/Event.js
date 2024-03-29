import API_URL from "../../../API_URL";

export const GET_EVENT_LIST =  "GET_EVENT_LIST";
export const GET_EVENT_DETAILS = "GET_EVENT_DETAILS";

export const getEventList = (timeframe) => {
    return async (dispatch) => {
      try {
        const result = await fetch(API_URL + "/events/"+timeframe, {
          method: "GET",
          headers: {},
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_EVENT_LIST,
            payload: json,
          });
        } else {
          console.log("Unable to fetch!");
        }
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const getEventDetails = (event_id) => {
    return async (dispatch) => {
      try {
        const result = await fetch(API_URL + "/events/events/"+event_id, {
          method: "GET",
          headers: {},
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_EVENT_DETAILS,
            payload: json,
          });
        } else {
          console.log("Unable to fetch!");
        }
      } catch (error) {
        console.log(error);
      }
    };
  };  
