import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { userLoginReducer } from "./Reducers/Login";
import {
  complaintFormReducer,
  complaintListReducer,
} from "./Reducers/Complaint";
import { eventListReducer, eventDetailsReducer } from "./Reducers/Event";
import { pollListReducer } from "./Reducers/Polls";

const rootReducer = combineReducers({
  userLoginReducer,
  complaintFormReducer,
  complaintListReducer,
  eventListReducer,
  eventDetailsReducer,
  pollListReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
