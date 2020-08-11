import {FETCH_COMMENTS, COMMENT_SUCCESS, COMMENT_DELETE, COMMENT_UPDATE} from "./types"

export const fetchComments = (id) => (dispatch) =>{
    console.log(id)
    fetch(`http://localhost:5000/comments/${id}`)
        .then(res => res.json())
        .then(comments => {
            console.log(comments)
            dispatch({
            type: FETCH_COMMENTS,
            payload: comments
        })})

}

export const addComments = (id, body) => dispatch => {
    //const body = JSON.stringify(favItinerary)
          fetch("http://localhost:5000/comments/addComments/"+ id, {
            method: "POST",
            headers: {"Content-type": "Application/JSON", "Authorization": `bearer ${localStorage.token}`},
            body
          
          })
          .then(response => response.json())
          .then(res =>  {
          console.log(res)
             dispatch({
              type: COMMENT_SUCCESS,
              payload: res
            });
          })
          .catch(err => console.log(err));
      }; 

export const deleteComments = id => dispatch => {
        //const body = JSON.stringify(favItinerary)
            fetch("http://localhost:5000/comments/deleteComments/"+id, {
                method: "DELETE",
                headers: {"Content-type": "Application/JSON", "Authorization": `bearer ${localStorage.token}`},
                
                })
            .then(response => response.json())
            .then(res =>  {
                console.log(res)
                dispatch({
                    type: COMMENT_DELETE,
                    payload: res
                });
                })
            .catch(err => console.log(err));
            };

export const updateComment = (id, body) => dispatch => {
    fetch("http://localhost:5000/comments/updateComments/"+id, {
                method: "PUT",
                headers: {"Content-type": "Application/JSON", "Authorization": `bearer ${localStorage.token}`},
                body
                })
            .then(response => response.json())
            .then(res =>  {
                console.log(res)
                dispatch({
                    type: COMMENT_UPDATE,
                    payload: res
                });
                })
            .catch(err => console.log(err));
} 