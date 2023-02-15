import {
  SET_COMPLAINT_DESCRIPTION,
  SET_COMPLAINT_FIRSTNAME,
  SET_COMPLAINT_IMAGE_URL,
  SET_COMPLAINT_ISSUE,
  SET_COMPLAINT_LASTNAME,
  SET_COMPLAINT_LOCATION,
  SET_COMPLAINT_PHONENUMBER,
  
  GET_COMPLAINT_LIST,
} from "../Actions/Complaint";

const initalComplaintsFormState = {
  first_name: "",
  last_name: "",
  phone_number: "",
  issue: "",
  image: "",
  location: "",
  description: "",
};

export function complaintFormReducer(
  state = initalComplaintsFormState,
  action
) {
  switch (action.type) {
    case SET_COMPLAINT_FIRSTNAME:
      return { ...state, first_name: action.payload };
    case SET_COMPLAINT_LASTNAME:
      return { ...state, last_name: action.payload };
    case SET_COMPLAINT_PHONENUMBER:
      return { ...state, phone_number: action.payload };
    case SET_COMPLAINT_ISSUE:
      return { ...state, issue: action.payload };
    case SET_COMPLAINT_IMAGE_URL:
      return { ...state, image: action.payload };
    case SET_COMPLAINT_LOCATION:
      return { ...state, location: action.payload };
    case SET_COMPLAINT_DESCRIPTION:
      return { ...state, description: action.payload };

    default:
      return state;
  }
}

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
