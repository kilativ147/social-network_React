import s from './Chats.module.scss'

const Chats = (props) => {
	let chatsList = props.chats.map((item, index) => (
		<li key={index} className={s.chats_item}>
			<button type='button'>{item.name}</button>
		</li>
	))

	return (
		<div className={s.chats}>
			<ul className={s.chats_list}>{chatsList}</ul>
		</div>
	)
}

export default Chats
