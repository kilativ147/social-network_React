import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";

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
					name: 'Stanislav',
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
				inputText: '',
			},
		},
		dialogsPage: {
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
		},
	},
	_callSubscribe() {
		console.log('')
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscribe = observer
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._callSubscribe(this._state)
	},
}
export default store

window.store = store._state
