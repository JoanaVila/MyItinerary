import { FETCH_CITIES, ONE_CITY } from "./types"

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

export const getOneCity = (id) => dispatch => {
    fetch("http://localhost:5000/cities/" + id)
    .then (res => res.json())
    .then(city => {
        dispatch({
            type: ONE_CITY,
            payload: city,
        })
    })
}