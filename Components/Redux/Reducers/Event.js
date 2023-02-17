import { GET_EVENT_LIST, GET_EVENT_DETAILS } from "../Actions/Event"; 

const initialEventListState = {
    event_list: [],
}

export function eventListReducer(state=initialEventListState, action) {
    switch(action.type){
        case GET_EVENT_LIST:
            return{...state, event_list: action.payload};
        default:
            return state;
    };
}

const initialEventDeatailState = {
    eventDetails: {}
}

export function eventDetailsReducer(state=initialEventDeatailState, action){
    switch (action.type) {
        case GET_EVENT_DETAILS:
            return{...state, eventDetails: action.payload};
        default:
            return state;
    }
}

