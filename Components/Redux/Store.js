import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {userLoginReducer , complaintFormReducer, complaintListReducer} from "./Reducers";

const rootReducer = combineReducers({userLoginReducer, complaintFormReducer, complaintListReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));