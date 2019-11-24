import { fill_in_form_page, clear_input } from "./commonAction"

export function dispatch_fill_in_action(data) {
    return function(dispatch) {
        dispatch(fill_in_form_page(data))
    }
}

export function dispatch_clear_input_action() {
    return function(dispatch) {
        dispatch(clear_input())
    }
}