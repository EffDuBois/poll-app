import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { userLoginReducer } from "./Reducers/Login";
import {
  complaintFormReducer,
  complaintListReducer,
} from "./Reducers/Complaint";
import { eventListReducer, eventDetailsReducer } from "./Reducers/Event";

const rootReducer = combineReducers({
  userLoginReducer,
  complaintFormReducer,
  complaintListReducer,
  eventListReducer,
  eventDetailsReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
