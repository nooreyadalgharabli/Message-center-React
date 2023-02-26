import { CAPTURE_ID, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './Types'

const initialState = {
    loading: false,
    users: [],
    error: '',
    clickedMessage:{
        "user_id": 1,
        "name": "George",
        "last_messag": "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
        "date": "26/01/2023",
        "image": "https://reqres.in/img/faces/1-image.jpg",
        "time": "02:55 PM"
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