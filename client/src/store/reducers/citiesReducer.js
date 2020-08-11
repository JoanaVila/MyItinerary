import { FETCH_CITIES, ONE_CITY} from "../actions/types"

const initialState = {
    cities: [],
    city: {}
}
   
export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_CITIES:
            console.log("reducer"); 
            return {
                ...state,
                cities: action.payload
            };
        case ONE_CITY:
            return {
                ...state,
                city: action.payload
            }
        
        default:
            return state;
    }
}
