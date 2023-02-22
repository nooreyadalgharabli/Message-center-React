import { CAPTURE_ID, CONTACT_LIST } from './Types'

const initialState = {
    data:[],
    clickedMessage:{
        user_id: 1,
        name: "Ahmed",
        last_messag: "test last message",
        date: "26/01/2023",
        image: "https://reqres.in/img/faces/1-image.jpg",
        time: '20:55'
    }   
    
}

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case CONTACT_LIST:
            return {
                ...state,
                data: action.payload
            }
        case CAPTURE_ID:
            return {
                ...state,
                clickedMessage: state.data.find(item => item.user_id === action.payload)
            }
        default: return state
    }
}

export default Reducer