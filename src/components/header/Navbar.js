import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Hamburger from 'hamburger-react'
import logo from './logo192.png'
import './Navbar.css';
function Navbar() {
	const [isOpen, setOpen] = useState(false)
	return (
		<div className="navbar">
			<div className='nav-logo'>
				<Link to="hero" smooth={true} activeClass="active" offset={-10} spy={true} className="nav-link" >
					<img src={logo} alt="" width={30} height={30} />
				</Link>


			</div>
			<div className={`nav-items ${isOpen && "open"}`}>
				<Link to="hero" smooth={true} activeClass="active" offset={-10} spy={true} className="nav-link" >Home</Link>
				<Link activeClass="active" offset={-60} spy={true} to="about" smooth={true} className="nav-link" >About</Link>
				<Link activeClass="active" offset={-60} spy={true} to="project" smooth={true} className="nav-link" >Project</Link>
				<Link activeClass="active" offset={-60} spy={true} to="contact" smooth={true} className="nav-link" >Contact</Link>

			</div>

			<div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setOpen(!isOpen)}>

				<div className="bar"><Hamburger size={20} /></div>
			</div>

		</div>
	)
}

export default Navbar
