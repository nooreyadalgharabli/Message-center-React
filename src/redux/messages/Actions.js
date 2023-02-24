import axios from 'axios';
import { CAPTURE_ID, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./Types"


// const list = [
//     {
//     user_id: 1,
//     name: "George",
//     last_messag: "This is some awesome thinking!",
//     date: "26/01/2023",
//     image: "https://reqres.in/img/faces/1-image.jpg",
//     time: '20:55'
//     },
//     {
//     user_id: 2,
//     name: "Janet",
//     last_messag: "This is clear, concise, and complete!",
//     date: "23/01/2023",
//     image: "https://reqres.in/img/faces/2-image.jpg",
//     time: '10:05'
//     },
//     {
//     user_id: 3,
//     name: "Emma",
//     last_messag: "Keep up the incredible work!",
//     date: "26/21/2023",
//     image: "https://reqres.in/img/faces/3-image.jpg",
//     time: '17:41'
//     },
//     {
//     user_id: 4,
//     name: "Eve",
//     last_messag: "I can tell you’ve been practicing!",
//     date: "16/01/2023",
//     image: "https://reqres.in/img/faces/4-image.jpg",
//     time: '21:36'
//     },
//     {
//     user_id: 5,
//     name: "Charles",
//     last_messag: "Interesting thoughts!",
//     date: "16/01/2023",
//     image: "https://reqres.in/img/faces/5-image.jpg",
//     time: '21:36'
//     },
//     {
//     user_id: 6,
//     name: "Tracey",
//     last_messag: "test last message",
//     date: "16/01/2023",
//     image: "https://reqres.in/img/faces/6-image.jpg",
//     time: '21:36'
//     },
//     ]

// export const ContactList = () => {
//     return {
//         type: CONTACT_LIST,
//         payload: list
//     }
// }

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
          axios.get('https://mocki.io/v1/d7300ef8-55c6-4952-81d2-ee6bf890a93c')
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