import React from 'react'
import Post from './Post'
import s from './MyPosts.module.scss'

import {addPostActionCreator, updateNewPostActionCreator} from "../../../../Redux/reducers/profileReducer";

const MyPosts = (props) => {
	//# Make new POST

	let newPostElement = React.createRef()
	let addPost = () => {
		props.dispatch(addPostActionCreator())
	}
	//# Change input area
	let onPostChange =() => {
		let text = newPostElement.current.value
		let action = updateNewPostActionCreator(text)
		props.dispatch(action)
	}
	//# Render all posts
	let allPosts = props.myPosts.map((item, index) => (
		<Post key={index} postText={item.text} likesCount={item.likes} />
	))

	return (
		<div className={s.myPosts}>
			<div className={s.newPostArea}>
				<textarea
					name='new-post'
					ref={newPostElement}
					className={s.textarea}
					value={props.inputedText}
					onChange={onPostChange}
				></textarea>
				<button onClick={addPost} className='make-post'>
					Make Post
				</button>
			</div>
			{allPosts}
		</div>
	)
}
export default MyPosts
