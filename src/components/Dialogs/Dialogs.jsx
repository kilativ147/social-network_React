import Chats from './components/Chats'
import History from './components/History'
import s from './Dialogs.module.scss'

const Dialogs = (props) => {
	return (
		<div className={s.dialogs_page}>
			<Chats chats={props.dialogsPage.chats} dispatch={props.dispatch} />
			<History history={props.dialogsPage.history} newMessage={props.dialogsPage.newMessage}dispatch={props.dispatch} />
		</div>
	)
}

export default Dialogs
