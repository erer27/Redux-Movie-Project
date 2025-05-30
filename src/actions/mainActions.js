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