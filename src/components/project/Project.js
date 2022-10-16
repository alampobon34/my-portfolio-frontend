import React from 'react'
import img from './img.png';
import './Project.css';
function Project({ URL, title, data, demo_link, source_code, description, technologies }) {

	return (
		<div className='project center' id="project">
			<div className="project-img">

				{
					<img src={`${URL}${data.image}`} alt="" />
				}
				{/* <img src={img} alt="" /> */}""
			</div>

			<div className="project-details">
				<h2>{title}</h2>
				<div className="project-links">
					<a rel='noopener' target="_blank" aria-label="LinkedIn" href="https://www.linkedin.com/in/sayed-monshurul-alam-430103174/">Demo</a>
					<span>|</span>
					{source_code === "none" ?
						<a className="disable-link" rel='noopener' target="_blank" aria-label="LinkedIn">Source Code</a>
						:
						<a rel='noopener' target="_blank" aria-label="LinkedIn" href={`${source_code}`}>Source Code</a>
					}
				</div>

				<div className="project-desc">
					<p>{description}</p>
				</div>

				<div className="project-technology">
					<h4>Technology Included: </h4>
					{technologies.map(technology => (
						<>
							{/* <span>{technology.name ? technology.name : ""}</span> */}
							{/* <span className='technology-bar'>|</span> */}
							<img className='technology-icon' src={`${URL}${technology.icon}`} alt="" width={40} height={40} />

						</>

					))}

				</div>
			</div>

		</div>
	)
}

export default Project
