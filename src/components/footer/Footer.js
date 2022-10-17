import React from 'react'
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import './Footer.css';
function Footer() {
	return (
		<div className='footer'>
			<div className="footer-items">
				<a rel='noopener' target="_blank" aria-label="LinkedIn" href="https://www.linkedin.com/in/sayed-monshurul-alam-430103174/"><FaLinkedinIn size={30} className="footer-icon linkedin" />
				</a>
				<a rel='noopener' target="_blank" aria-label="github" href="https://github.com/alampobon34"><FaGithub size={30} className="footer-icon github" /></a>
				<a rel='noopener' target="_blank" aria-label="LinkedIn" href="https://www.facebook.com/alampobon34"><FaFacebook size={30} className="footer-icon twitter" /></a>
				<a rel='noopener' target="_blank" aria-label="LinkedIn" href="https://www.instagram.com/alam_pobon/"><FaInstagram size={30} className="footer-icon instagram" /></a >
			</div >
			<div className="footer-copy-right">
				<span>© Alam Pobon 2022</span>
			</div>
		</div >
	)
}

export default Footer
