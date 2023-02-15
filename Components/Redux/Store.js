import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {userLoginReducer , complaintReducer} from "./Reducers";

const rootReducer = combineReducers({userLoginReducer, complaintReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));