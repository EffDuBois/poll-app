import {
  GET_COMPLAINT_LIST,

  POST_COMPLAINT
} from "../Actions/Complaint";

const initalComplaintsListState = {
  complaintList: [],
};

export function complaintListReducer(
  state = initalComplaintsListState,
  action
) {
  switch (action.type) {
    case GET_COMPLAINT_LIST:
      return { ...state, complaintList: action.payload };
    default:
      return state;
  }
}



export function postComplaintReducer(state = {}, action) {
  switch (action.type) {
    case POST_COMPLAINT:
      console.log(action.payload);
      return {};

    default:
      console.log(state);
      return {};
  }
}
