import s from './Post.module.scss'

const Post = (props) => {
  return (
		<div className={s.post}>
			<div className={s.image}>
				<img
					src='https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'
					alt='Avatar'
				/>
			</div>
			<p className={s.text}>{props.postText}</p>
			<div className={s.likes}>
				<button className={s.likeButton}>'LIKES'</button>
				<span className={s.likeCount}>{props.likesCount}</span>
			</div>
		</div>
	)
}
export default Post
