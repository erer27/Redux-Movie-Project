import {FETCH_MAIN_DATA,NEWS_LIST} from "../actions/types";

const mainState = {
    main_data:[]
}
// dispatch(action)
export default function mainReducer(state = mainState, action) {
    switch(action.type) {
        case FETCH_MAIN_DATA:
            return {
                ...state,
                main_data:action.payload
            }
        case NEWS_LIST:
            return {
                ...state,
                news_data: action.payload
            }
        default:
            return state;
    }
}