import {combineReducers} from 'redux';

import mainReducer from "./mainReducer";
import movieReducer from "./movieReducer";
import boardReducer from "./boardReducer";
export default combineReducers({
    mains:mainReducer,
    movies:movieReducer,
    boards: boardReducer
})