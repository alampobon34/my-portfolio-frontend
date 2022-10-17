import React from 'react'
import html from './icons/icons8-html-5.svg';
import css from './icons/icons8-css3.svg';
import js from './icons/icons8-javascript.svg';
import python from './icons/icons8-python.svg';
import vue from './icons/icons8-vue-js.svg';
import laravel from './icons/laravel-2.svg';
import django from './icons/icons8-django.svg'
import react from './icons/react-2.svg';

import './About.css';
function About({ technology }) {

	return (
		<div className='about' id='about'>
			<div className='about-container center'>

				{/* technology logo */}

				<div className="about-technology">
					<div className="technology-row">
						{/* {technology.map(technology => (
							<img key={technology.id} className="technology-icons" src={"https://backend-alampobon34.herokuapp.com/uploads/" + technology.icon} alt="" />

						))} */}

						<img className="technology-icons" src={html} alt="" />
						<img className="technology-icons" src={css} alt="" />
						<img className="technology-icons" src={js} alt="" />
						<img className="technology-icons" src={python} alt="" />
					</div>
					<div className="technology-row">
						<img className="technology-icons" src={react} alt="" />
						<img className="technology-icons" src={vue} alt="" />
						<img className="technology-icons" src={laravel} alt="" />
						<img className="technology-icons" src={django} alt="" />
					</div>

				</div>

				{/* paragraph */}
				<div className="about-desc">
					<p>As a self-taught developer, I have spent a significant amount of time in understanding the technologies which is listed here.</p>
				</div>



			</div>
		</div>)
}

export default About
