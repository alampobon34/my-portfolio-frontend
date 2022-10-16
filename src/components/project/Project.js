import React from 'react'
import img from './basic-banner.jpg';
import './Project.css';
function Project({ URL, title, data, demo_link, source_code, description, technologies }) {

	return (
		<div className='project center' id="project">
			<div className="project-img">

				{
					data.image ? <img src={"https://backend-alampobon34.herokuapp.com/uploads/" + data.image} alt="" />

						: < img src={img} alt="" />
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
					{technologies.map(technology => (
						<>
							{/* <span>{technology.name ? technology.name : ""}</span> */}
							{/* <span className='technology-bar'>|</span> */}
							<img className='technology-icon' src={"https://backend-alampobon34.herokuapp.com/uploads/" + technology.icon} alt="" width={40} height={40} />

						</>

					))}

				</div>
			</div>

		</div>
	)
}

export default Project
