const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'

let initialState = {
    myPosts: [
        { id: 1, text: 'This is my first POST', likes: 13 },
        { id: 2, text: 'This is my second POST', likes: 9 },
        { id: 3, text: 'This is already my third POST', likes: 3 },
    ],
    newPost: {
        inputText: '',
    },
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                text: state.newPost.inputedText,
                likes: 0,
            }
            state.myPosts.push(newPost)
            state.newPost.inputedText = ''
            break
        case UPDATE_NEW_POST:
            state.newPost.inputedText = action.text
            break
        default:
            break
    }
    return state
}

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => {
    return {type: UPDATE_NEW_POST, text: text}
}