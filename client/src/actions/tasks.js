import axios from 'axios';
import { GET_TASKS, POST_TASKS, GET_ERROR} from "./types";

export const getTasks = () => async dispatch => {
    const res = await axios.get('/api/v1/allTasks');
    try{
    dispatch({
        type: GET_TASKS,
        payload: res.data
    });
} catch (err) {
    dispatch({
        type: GET_ERROR,
        payload:{ status: err.response.status}
    })
}
}

export const postTasks = (formData) => async dispatch => {
    const config = {
        headers: {
        'content-type': 'application/json'
        }
    }
    try{
        const res = await axios.post('/api/v1/postTasks', formData, config);
        dispatch({
            type:POST_TASKS,
            payload: res.data
        })
    } catch(err){
        const errors = err.response.data.errors
        dispatch({
            type:GET_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        })
    }
}