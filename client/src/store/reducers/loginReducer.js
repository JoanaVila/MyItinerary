import {LOGIN_SUCCESS, USER_LOADER, SET_CURRENT_USER} from "../actions/types"

const initialState = {
    auth: {},
    user: {}
}

   
export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            console.log("reducer"); 
            return {
                ...state,
                auth: action.payload
            };
        case USER_LOADER: 
            return {
                ...state,
                user: action.payload
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            }    

        default:
            return state;
    }
}