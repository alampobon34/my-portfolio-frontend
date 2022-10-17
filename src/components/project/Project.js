import React, { useState } from 'react'
import banner from './banner.jpg';
import food from './food.png';
import netflix from './netflix.png';
//icons import
import html from './icons/icons8-html-5.svg';
import css from './icons/icons8-css3.svg';
import js from './icons/icons8-javascript.svg';
import python from './icons/icons8-python.svg';
import vue from './icons/icons8-vue-js.svg';
import laravel from './icons/laravel-2.svg';
import django from './icons/icons8-django.svg'
import react from './icons/react-2.svg';
import './Project.css';
function Project({ title, data, demo_link, source_code, description, technologies }) {
	const [titleName, setTitleName] = useState("");

	function IconRender(name, alt, classname, width, height) {
		if (name === "HTML5") {
			return <img className={classname} src={html} alt={alt} width={width} height={height} />
		} else if (name === "CSS3") {
			return <img className={classname} src={css} alt={alt} width={width} height={height} />
		}
		else if (name === "JavaScript") {
			return <img className={classname} src={js} alt={alt} width={width} height={height} />
		}
		else if (name === "Python") {
			return <img className={classname} src={python} alt={alt} width={width} height={height} />
		}
		else if (name === "Django") {
			return <img className={classname} src={django} alt={alt} width={width} height={height} />
		}
		else if (name === "Laravel") {
			return <img className={classname} src={laravel} alt={alt} width={width} height={height} />
		}
		else if (name === "React JS") {
			return <img className={classname} src={react} alt={alt} width={width} height={height} />
		}
		else if (name === "Vue JS") {
			return <img className={classname} src={vue} alt={alt} width={width} height={height} />
		}
	}

	function BannerRender(name) {
		if (name === "Food Ordering App") {
			return <img src={food} alt="" />
		}
		else if (name === "Netflix Clone") {
			return <img src={netflix} alt="" />
		}
		else {
			return <img src={banner} alt="" />
		}
	}

	// data.title === "Food Ordering App" ? ImageRender() : <img src={banner} alt="" />

	return (
		<div className='project center' id="project">
			<div className="project-img">
				{/* <img src={"https://backend-alampobon34.herokuapp.com/uploads/" + data.image} alt="" /> */}
				{
					BannerRender(title)
				}


			</div>

			<div className="project-details">
				<h2>{title}</h2>
				<div className="project-links">
					{demo_link === "none" ?
						<a className="disable-link" rel='noopener' target="_blank" aria-label="LinkedIn">Demo</a>
						:
						<a rel='noopener' target="_blank" aria-label="LinkedIn" href={`${demo_link}`}>Demo</a>
					}
					<span>|</span>
					{source_code === "none" ?
						<a className="disable-link" rel='noopener' target="_blank" aria-label="LinkedIn">Source Code</a>
						:
						<a rel='noopener' target="_blank" aria-label="LinkedIn" href={`${source_code}`}>Source Code</a>
					}
				</div>

				<div className="project-desc">
					<p>{description ? description : ""}</p>
				</div>

				<div className="project-technology">
					<h4>Technology Included: </h4>
					{technologies.map(technology => {

						{/* <span>{technology.name ? technology.name : ""}</span> */ }
						{/* <span className='technology-bar'>|</span> */ }

						return IconRender(technology.name, "", "technology-icon", 40, 40)



					})}

				</div>
			</div>

		</div>
	)
}

export default Project
