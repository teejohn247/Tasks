import axios from 'axios';
import { setAlert } from './alert';
import { GET_TASKS, POST_TASKS, DELETE_TASK, GET_ERROR, EDIT_TASK, SET_ALERT, REMOVE_ALERT} from "./types";

export const getTasks = () => async dispatch => {
    const res = await axios.get('https://moore-advice-task.herokuapp.com/api/v1/allTask');
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

export const deleteTask = (id) => async dispatch => {
    await axios.delete(`https://moore-advice-task.herokuapp.com/api/v1/delTask/${id}`);
      try{
      dispatch({
          type: DELETE_TASK,
          payload: id
      });
      dispatch(setAlert('Task removed', 'success'))
  } catch (err) {
    dispatch(setAlert('Error', 'danger'))

      dispatch({
          type: GET_ERROR,
          payload:{ status: err}
      })
  }
  }

  export const editTask = (formData, id) => async dispatch => {
    const config = {
        headers: {
        'content-type': 'application/json'
        }
    }
    console.log(id)
    try{
        const res = await axios.patch(`https://moore-advice-task.herokuapp.com/api/v1/editTask/${id}`, formData, config);
        dispatch({
            type:EDIT_TASK,
            payload: res.data
        })
        dispatch (setAlert('TASK EDITED', 'success'));
    } catch(err){
        const errors = err.response.data.errors
        // if(errors){
        //     errors.forEach(error => dispatch(
        //         setAlert(error.msg, 'danger')
        // ))
        // }
        dispatch({
            type:GET_ERROR,
            payload:{msg:err.response.msg, status:err.response.status}
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
        const res = await axios.post('https://moore-advice-task.herokuapp.com/api/v1/addTask', formData, config);
        dispatch({
            type:POST_TASKS,
            payload: res.data
        })
      dispatch(setAlert('Task added', 'success'));
    } catch(err){
        const errors = err.response.data.errors
        dispatch({
            type:GET_ERROR,
            payload:{msg:err.response.statusText, status:err.response.status}
        })
    }
}