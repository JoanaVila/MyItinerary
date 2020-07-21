import axios from "axios"
import { REGISTER_SUCCESS } from "./types"

export const addUser = (body) => async dispatch => {
    console.log(body)
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    /* const body = {name: name, email: email, password: password, profile_pic: profile_pic} */
    try {
      const res = await axios.post("http://localhost:5000/users/register", body, config)
      dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
      })
      console.log (res.data)
    } catch (error) {
       console.log(error.message) 
    }
    
}

export const togglerFavAction = (itinerary) => async dispatch => {
    console.log(itinerary)
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
}}