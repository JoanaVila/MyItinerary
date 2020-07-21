import { FETCH_ACTIVITIES} from "./types"

export const fetchActivities = (id) => dispatch => {
    console.log(id) 
        fetch(`http://localhost:5000/activities/${id}`)
        .then(res => res.json())
        .then(activities => {
            console.log(activities)
            dispatch({
            type: FETCH_ACTIVITIES,
            payload: activities
        })});
    }
