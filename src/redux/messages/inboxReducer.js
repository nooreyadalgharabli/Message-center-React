import { CAPTURE_ID, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './Types'

const initialState = {
    loading: false,
    users: [],
    error: '',
    clickedMessage:{
        "user_id": 1,
        "name": "George",
        "last_messag": "This is some awesome thinking!",
        "date": "26/01/2023",
        "image": "https://reqres.in/img/faces/1-image.jpg",
        "time": "20: 55"
    }   
    
}

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
              ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
              ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        case CAPTURE_ID:
            return {
                ...state,
                clickedMessage: state.users.find(item => item.user_id === action.payload)
            }
        default: return state
    }
}

export default Reducer