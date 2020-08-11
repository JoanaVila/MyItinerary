import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import activitiesReducer from "./activitiesReducer";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import commentReducer from "./commentReducer";


const rootReducer = combineReducers({cities: citiesReducer, 
    itineraries: itinerariesReducer, 
    activities: activitiesReducer,
    auth: loginReducer,
    userfavs: userReducer,
    comments: commentReducer,
 });




export default rootReducer;