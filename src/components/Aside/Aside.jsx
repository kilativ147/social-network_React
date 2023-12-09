// import Friend from './components'
import { NavLink } from 'react-router-dom'
import Friend from './components/Friend'
import './Aside.css'

const Aside = (props) => {
	
	let friends = props.sidebar.friends.map((item, index) => (
		<Friend key={index} className='aside__friend' id={item.id} img={item.img} name={item.name} />
	))
	
	return (
		<aside className='aside'>
			<nav>
				<ul className='aside__list'>
					<li className='aside__item'>
						<NavLink to='/profile'>
							Profile
						</NavLink>
					</li>
					<li className='aside__item'>
						<NavLink to='/dialogs'>
							Dialogs
						</NavLink>
					</li>
					<li className='aside__item'>
						<NavLink to='/music'>Music</NavLink>
					</li>
					<li className='aside__item'>
						<NavLink to='/news'>News</NavLink>
					</li>
					<li className='aside__item'>
						<NavLink to='/settings'>Settings</NavLink>
					</li>
				</ul>
			</nav>
			<div className='aside__friends'>
				<ul className="aside__friends-list">
					{friends}
				</ul>
			</div>
		</aside>
	)
}

export default Aside
