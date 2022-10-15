import React from 'react'
import './Input.css';
function input({ ...rest }) {
	return (
		<div className='input' id="input">
			<input {...rest} />

		</div>
	)
}

export default input
