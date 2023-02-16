import { GET_POLL_LIST } from "../Actions/Polls";

const initialPollListState = {
    pollList: {}
}

export function pollListReducer (state= state.initialPollListState, type){
    switch (action.type) {
        case GET_POLL_LIST:
            return{ ...state, pollList: payload};
    
        default:
            return state;
    }
}