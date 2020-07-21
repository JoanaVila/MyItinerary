import { FETCH_CITIES, NEW_CITY } from "./types"

export const fetchCities = () => dispatch => {
    console.log("fetching") 
        fetch("http://localhost:5000/cities/all")
        .then(res => res.json())
        .then(cities => {
            console.log(cities)
            dispatch({
            type: FETCH_CITIES,
            payload: cities
        })});
    }