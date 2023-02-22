import { CAPTURE_ID, CONTACT_LIST } from "./Types"


const list = [
    {
    user_id: 1,
    name: "Ahmed",
    last_messag: "test last message",
    date: "26/01/2023",
    image: "https://reqres.in/img/faces/1-image.jpg",
    time: '20:55'
    },
    {
    user_id: 2,
    name: "Noor",
    last_messag: "test last message",
    date: "26/01/2023",
    image: "https://reqres.in/img/faces/2-image.jpg",
    time: '10:05'
    },
    {
    user_id: 3,
    name: "Rawan",
    last_messag: "test last message",
    date: "26/01/2023",
    image: "https://reqres.in/img/faces/3-image.jpg",
    time: '17:41'
    },
    {
    user_id: 4,
    name: "Ali",
    last_messag: "test last message",
    date: "26/01/2023",
    image: "https://reqres.in/img/faces/4-image.jpg",
    time: '21:36'
    },
    ]

export const ContactList = () => {
    return {
        type: CONTACT_LIST,
        payload: list
    }
}

export const captureID = (clickedID) => {
    return {
        type: CAPTURE_ID,
        payload: clickedID
    }
}