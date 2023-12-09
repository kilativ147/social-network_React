import { NavLink } from 'react-router-dom'
import './Friend.scss'

const Friend = (props) => {
	let link = `/dialogs/${props.id}`
  return (
		<li className='aside__friend friend'>
			<NavLink to={link}>
				<div className='friend__img'>
					<img src={props.img} alt='' />
				</div>
				<p className='friend__name'>{props.name}</p>
			</NavLink>
		</li>
	)
}

export default Friend
