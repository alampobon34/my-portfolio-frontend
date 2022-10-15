import React from 'react'
import './Button.css';
function Button({ type, title, func }) {
	return (
		<div className='button' id='button'>
			<button className='btn' onClick={func} type={type}>{title}</button>
		</div>
	)
}

export default Button
