export const GET_POLL_LIST = "GET_POLL_LIST";

export const getPollList = () => {
    return async (dispatch) => {
      try {
        const result = await fetch(API_URL + "/polls/", {
          method: "GET",
          headers: {},
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_POLL_LIST,
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