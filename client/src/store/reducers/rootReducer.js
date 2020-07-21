import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import activitiesReducer from "./activitiesReducer";
import loginReducer from "./loginReducer"


const rootReducer = combineReducers({cities: citiesReducer, 
    itineraries: itinerariesReducer, 
    activities: activitiesReducer,
    auth: loginReducer });




export default rootReducer;