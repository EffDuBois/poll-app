import { GET_POLL_LIST } from "../Actions/Polls";
import { POST_POLL_ANSWER } from "../Actions/Polls";

const initialPollListState = {
  poll_list: [],
};

export function pollListReducer(state = initialPollListState, action) {
  switch (action.type) {
    case GET_POLL_LIST:
      return { ...state, poll_list: action.payload };

    default:
      return state;
  }
}


export function pollAnswerReducer(state = {}, action) {
  switch (action.type) {
    case POST_POLL_ANSWER:
      console.log(action.payload);
      return {};

    default:
      console.log(state);
      return {};
  }
}
