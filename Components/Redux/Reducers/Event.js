import { GET_EVENT_LIST } from "../Actions/Event"; 

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