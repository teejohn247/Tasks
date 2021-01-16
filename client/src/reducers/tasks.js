import { GET_TASKS, POST_TASKS, GET_ERROR } from "../actions/types";

const initialState = {
    tasks: null,
    loading:true,
    error: {}
}


export default function(state = initialState, action){
    const { type, payload } = action;
    switch(type){
        case GET_TASKS:
        return {
            ...state,
            tasks: payload,
            loading: false
        }
        case POST_TASKS:
        return {
            ...state,
            tasks: [payload, ...state.tasks],
            loading: false
        }
       case DELETE_POST:
        return {
            ...state,
            tasks: state.posts.filter(post => post._id !== payload),
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