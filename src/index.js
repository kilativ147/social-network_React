import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './Redux/State'
import App from './components/App/App'
import './index.css'
import './nullstyle.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
let renderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<App state={state} dispatch={store.dispatch.bind(store)} />
		</React.StrictMode>,
	)
}

renderEntireTree(store.getState())
store.subscribe(renderEntireTree)
