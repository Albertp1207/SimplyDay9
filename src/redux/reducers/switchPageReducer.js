import { SWITCH_PAGE } from "../actions/switchPageAction"

const initialState = {
    name: "main",
    info: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SWITCH_PAGE:
            return {
                name: action.payload.name,
                info: action.payload.info
            };
        default:
            return state
    }
}