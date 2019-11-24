import { I_AM_WRITING_NOW, CLEAR_INPUT } from "../constants/actionType";

var initialState = {
    input_name: ''
}

export default function(state, action) {
    state = state || initialState;

    switch(action.type) {
        case I_AM_WRITING_NOW:
            return Object.assign({}, state, {
                status: 'WRITING_NOW',
                input_name: action.data
            })

        case CLEAR_INPUT:
            return Object.assign({}, initialState)

        default:
            return state;
    }
}