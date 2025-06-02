import axios from "axios";
export const fetchMainData = () => dispatch => {

    axios.get('http://localhost/main_react').then(res => {
        console.log(res)
        const action={
            type:'FETCH_MAIN_DATA',
            payload:res.data.list
        }
        dispatch(action);
    })
}

export const fetchNewsData =(fd) => dispatch => {
    console.log("asdfasdfsdafsdafasdf")
    axios.get('http://localhost:3355/news/list',{

        params:{
            query:fd
        }
    }).then(res => {
        const action={
            type:'NEWS_LIST',
            payload:res.data
        }
        console.log(res.data)
        dispatch(action);
    })
}