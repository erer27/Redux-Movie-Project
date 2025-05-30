import {FETCH_MOVIE_LIST,FETCH_MOVIE_DETAIL} from './types'
import axios from "axios";

export const fetchMovieList = (page) => dispatch => {
    axios.get('http://localhost/movie/list_react',{
        params:{
            page:page
        }
    }).then((response) => {
        console.log(response)
        const action={
            type:FETCH_MOVIE_LIST,
            payload:response.data
        }
        dispatch(action)
    })
}

export const fetchMovieDetail = (id) => dispatch => {
    axios.get('http://localhost/movie/detail_react',{
        params:{
            id:id
        }
    }).then((response) => {
        console.log(response)
        const action={
            type:FETCH_MOVIE_DETAIL,
            payload:response.data
        }
        dispatch(action)
    })
}
