import React, { useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Button from '../button/Button';
import { Link } from 'react-scroll';
import hero from './pic.jpg';
import './Hero.css';
import api from '../../helpers/axios'
function Hero({ profileName, profileBio, imageURL, profile }) {


	return (
		<div className='hero'>
			<div className="hero-wrap center">
				{/* hero image */}

				<div className="hero-image">
					{
						profile.image ? <img src={"http://127.0.0.1:8000/uploads/" + profile.image} alt="" />
							: <img src={hero} alt="" />
					}
				</div>

				{/* hero detail */}
				<div className="hero-detail">
					<h2 className='hero-title'>Hey, This is <span style={{ color: "#FF3852" }}>
						<Typewriter cursor cursorStyle='|' typeSpeed={100} deleteSpeed={50} delaySpeed={1000} words={["Sayed Monshurul Alam"]} />
					</span></h2>
					<p className='hero-description'>{profile.bio ? profile.bio : ""}</p>

					<div className="hero-btn">
						<Link activeClass="active" offset={-60} spy={true} to="project" smooth={true} className="nav-link" ><Button type="button" title="My Work" /></Link>
						<Link activeClass="active" offset={-60} spy={true} to="contact" smooth={true} className="nav-link" ><Button type="button" title="Contact" /></Link>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
