const SEND_MESSAGE = 'SEND-NEW-MESSAGE'
const UPDATE_MESSAGE_BODY = 'UPDATE-MESSAGE-BODY'

let initialState = {
    chats: [
        { id: 1, name: 'Ivan' },
        { id: 2, name: 'Stanislav' },
        { id: 3, name: 'Olena' },
    ],
    history: [
        {id:1,message:'Hello'},
        {id:2,message:'My name is Olena'},
        {id:3,message:'What\'s yours?'},
    ],
    newMessage:{
        inputText: ''
    }
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessage.inputText,
            }
            state.history.push(newMessage)
            state.newMessage.inputText = ''
            break
        case UPDATE_MESSAGE_BODY:
            state.newMessage.inputText = action.text
            break
        default:
            break
    }
    return state
}

export default dialogsReducer;
export const sendNewMessageCreator = () => ({type: SEND_MESSAGE})
export const updateMessageBodyCreator = (text) => {
    return {type: UPDATE_MESSAGE_BODY, text: text}
}