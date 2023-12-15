import Header from '../Header/Header'
import Aside from '../Aside/Aside'
import Profile from '../Profile/Profile'
import Dialogs from '../Dialogs/Dialogs'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App(props) {
	return (
		<Router>
			<div className='app-wrapper'>
				<Header />
				<Aside sidebar={props.state.sidebar} />
				<div>
					<Routes>
						<Route
							path='/profile'
							element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}
						/>
						<Route
							path='/dialogs'
							element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App