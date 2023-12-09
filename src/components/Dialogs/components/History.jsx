import { sendNewMessageCreator, updateMessageBodyCreator } from '../../../Redux/State'
import s from './History.module.scss'

const History = (props) => {
	//# DRAW MESSAGE HISTORY
	let messagesList = props.history.map((item, index) => (
		<li key={index} className={s.message}>
			{item.message}
		</li>
	))
	//#UPDATE MESSAGE BODY
	let onMessageUpdate = (e) => {
		let text = e.target.value
		props.dispatch(updateMessageBodyCreator(text))
	}
	//# SEND NEW MESSAGE
	let sendMessage = () => {
		props.dispatch(sendNewMessageCreator())
	}

	return (
		<div className={s.history_page}>
			<div className={s.history_messages}>
				<ul className={s.history_messages__list}>{messagesList}</ul>
			</div>
			<div className={s.new_message}>
				<textarea
					onChange={onMessageUpdate}
					value={props.newMessage.inputText}
					className={s.new_message__area}
					placeholder='Input your message'
				></textarea>
				<button onClick={sendMessage}>^ SEND ^</button>
			</div>
		</div>
	)
}

export default History
