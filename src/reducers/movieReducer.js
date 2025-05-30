import {FETCH_MOVIE_LIST,FETCH_MOVIE_DETAIL} from "../actions/types"
// Map => {} ,
const movieState={
    movie_list:{},
    movie_detail:{}
}
/*
        1. types.js => 구분 (내부 프로토콜)
            export const FETCH_BOARD_LISTS='FETCH_BOARD_LIST'

        => 종류별로 처리
            types는 동시 처리
           actions 함수는 따로 처리
           reducer 따로 처리 ==> index에서 한번에 모아서 처리
 */
export default function(state=movieState, action){
    switch(action.type){
        case FETCH_MOVIE_LIST:
            return {
                ...state,
                movie_list: action.payload
            }
        case FETCH_MOVIE_DETAIL:
            return {
                ...state,
                movie_detail:action.payload
            }
        default:
            return state;
    }
}