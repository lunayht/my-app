import { I_AM_WRITING_NOW, CLEAR_INPUT } from "../constants/actionType";

export function fill_in_form_page(data) {
    return{
        type: I_AM_WRITING_NOW,
        data
    }
}

export function clear_input() {
    return{
        type: CLEAR_INPUT
    }
}