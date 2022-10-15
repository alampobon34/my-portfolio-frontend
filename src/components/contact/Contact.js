import React, { useState, useEffect } from 'react'
import './Contact.css';
import Button from '../button/Button'
import Input from '../input/Input';
import api from '../../helpers/axios';

import { toast } from 'react-toastify';
function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState([]);
	const [loading, setLoading] = useState(false);



	function handleClick(e) {
		e.preventDefault();

		const data = {
			name: name, email: email, subject: subject, message: message

		}
		// console.log(data);
		api.post("contact", data)
			.then((res) => {
				const data = res.data;
				if (data.status === 200) {
					setName("");
					setEmail("");
					setSubject("");
					setMessage("");
					setError("")
					toast(data.message);
					setLoading(false);
				} else {
					toast("Something went wrong!!!");

				}
			})
			.catch(({ response }) => {
				setError(response.data.errors);

			})
	}


	return (
		<div className='contact' id='contact'>
			<div className="contact-wrap">
				<h2>Contact Form</h2>
				<form className="contact-form" onSubmit={handleClick} >
					<div className="form-col">

						<div className="form-group">
							<Input type="text" placeholder="Enter Full Name" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
							<span className='form-error'>{error ? error.name : ""}</span>
						</div>
						<div className="form-group">
							<Input type="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
							<span className='form-error'>{error ? error.email : ""}</span>
						</div>
						<div className="form-group">
							<Input className='textarea' type="text" placeholder="Enter Subject" name="subject" value={subject} onChange={(e) => { setSubject(e.target.value) }} />
							<span className='form-error'>{error ? error.subject : ""}</span>
						</div>
						<div>
							<textarea cols="10" rows="5" className="textarea" placeholder="Enter Message" name="message" value={message} onChange={(e) => { setMessage(e.target.value) }} /></div>
						<span className='form-error'>{error ? error.message : ""}</span>
						<div className="form-btn">
							<Button type="submit" title="Submit" />
						</div>

					</div>

				</form>
			</div >
		</div >)
}

export default Contact
