import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { userLoginReducer } from "./Reducers/Login";
import {
  complaintFormReducer,
  complaintListReducer,
} from "./Reducers/Complaint";
import { eventListReducer } from "./Reducers/Event";

const rootReducer = combineReducers({
  userLoginReducer,
  complaintFormReducer,
  complaintListReducer,
  eventListReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
