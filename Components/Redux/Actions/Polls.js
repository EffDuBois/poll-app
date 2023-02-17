import API_URL from "../../../API_URL";


export const GET_POLL_LIST = "GET_POLL_LIST";
export const POST_POLL_ANSWER = "POST_POLL_ANSWER"

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

  export const postPollAnswer = (answer) => {
    return async (dispatch) => {
      try {
        const result = await fetch(API_URL + "/polls/", {
          method: "POST",
          headers: {},
          body: JSON.stringify(answer),
        });
        const json = await result.json()
        if (json) {
          dispatch({
            type: POST_POLL_ANSWER,
            payload: json
          });
        } else {
          console.log("Unknown error, No response");
        }
      } catch (error) {
        console.log(error);
      }
    };
  };