import MyPosts from "./components/MyPosts/MyPosts"
import s from './Profile.module.css'

const Profile = (props) => {
	return (
		<div className={s.profile}>
			<div className={s.cover}>
				<img
					src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
					alt=''
				/>
			</div>
			<MyPosts
				myPosts={props.profilePage.myPosts}
				inputedText={props.profilePage.newPost.inputedText}
				dispatch={props.dispatch}
			/>
		</div>
	)
}

export default Profile
