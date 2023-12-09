const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const SEND_MESSAGE = 'SEND-NEW-MESSAGE'
const UPDATE_MESSAGE_BOGY = 'UPDATE-MESSAGE-BODY'

let store = {
	_state: {
		sidebar: {
			friends: [
				{
					id: 1,
					name: 'Ivan',
					img: 'https://easydrawingart.com/wp-content/uploads/2023/04/How-to-Draw-a-Human-Face.jpg',
				},
				{
					id: 2,
					name: 'Stas',
					img: 'https://easydrawingart.com/wp-content/uploads/2023/04/14-how-to-draw-a-face-boy.jpg.webp',
				},
				{
					id: 3,
					name: 'Olena',
					img: 'https://thumb.tildacdn.com/tild3937-3462-4436-b438-393163393539/-/resize/600x/-/format/webp/1_____.jpeg',
				},
			],
		},
		profilePage: {
			myPosts: [
				{ id: 1, text: 'This is my first POST', likes: 13 },
				{ id: 2, text: 'This is my second POST', likes: 9 },
				{ id: 3, text: 'This is already my third POST', likes: 3 },
			],
			newPost: {
				inputedText: '',
			},
		},
		dialogsPage: {
			chats: [
				{ id: 1, name: 'Ivan' },
				{ id: 2, name: 'Stas' },
				{ id: 3, name: 'Olena' },
			],
			history: [
				{id:1,message:'Hello'},
				{id:2,message:'My name is Olena'},
				{id:3,message:'What\'s yours?'},
			],
			newMessage:{
				inputText:''
			}
		},
	},
	_callsubscribe() {
		console.log('')
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callsubscribe = observer
	},

	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 4,
				text: this._state.profilePage.newPost.inputedText,
				likes: 0,
			}
			this._state.profilePage.myPosts.push(newPost)
			this._state.profilePage.newPost.inputedText = ''
			this._callsubscribe(this._state)
		} else if (action.type === UPDATE_NEW_POST) {
			this._state.profilePage.newPost.inputedText = action.text
			this._callsubscribe(this._state)
		} else if (action.type === SEND_MESSAGE) {
			let newMessage = {
				id: 4,
				message: this._state.dialogsPage.newMessage.inputText,
			}
			this._state.dialogsPage.history.push(newMessage)			
			this._state.dialogsPage.newMessage.inputText = ''
			this._callsubscribe(this._state)
		} else if (action.type === UPDATE_MESSAGE_BOGY) {
			this._state.dialogsPage.newMessage.inputText = action.text
			this._callsubscribe(this._state)
		}
	},
}
export default store

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => {
	return { type: UPDATE_NEW_POST, text: text }
}
export const sendNewMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateMessageBodyCreator = (text) => {
	return { type: UPDATE_MESSAGE_BOGY, text: text }
}

window.store = store
