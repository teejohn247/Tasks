import { GET_TASKS, POST_TASKS, GET_ERROR, DELETE_TASK,EDIT_TASK } from "../actions/types";

const initialState = {
    tasks: null,
    loading:true,
    success: false,
    error: {}
}


export default function(state = initialState, action){
    const { type, payload } = action;
    switch(type){
        case GET_TASKS:
        return {
            ...state,
            tasks: payload.allTasks,
            loading: false
        }
        case POST_TASKS:
        return {
            ...state,
            tasks: [payload.task, ...state.tasks],
            success: true,
            loading: false
        }
        case EDIT_TASK:
        return {
            ...state,
            tasks: payload.allTasks,
            loading: false
        }
        case DELETE_TASK:
            console.log(payload.id)
            return {
                ...state,
                tasks: state.tasks.filter(task => task._id !== payload),
                loading: false
            }
        case GET_ERROR:
        return {
            ...state,
            error: payload,
            loading: false
        }
        default:
        return state;
    }
   
}