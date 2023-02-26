import axios from 'axios';
import { CAPTURE_ID, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./Types"

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
          axios.get('https://mocki.io/v1/8f859fd1-1bc1-4314-8866-0f5c6befe238')
          .then(response => {
            const users = response.data.data
            dispatch(fetchUsersSuccess(users))
            })
          .catch(error => {
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
          })
    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users 
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const captureID = (clickedID) => {
    return {
        type: CAPTURE_ID,
        payload: clickedID
    }
}