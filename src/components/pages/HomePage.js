import React, { useState, useEffect } from 'react'
import Project from '../project/Project';
import About from '../about/About';
import Contact from '../contact/Contact';
import Hero from '../hero/Hero';
import api from '../../helpers/axios';
function HomePage() {

	const [profile, setProfile] = useState([]);
	const [projects, setProjects] = useState([]);
	const [technologies, setTechnologies] = useState([]);


	function getHomeData() {
		api.get("home")
			.then((response) => {
				setTechnologies(response.data.technologies);
				setProfile(response.data.profile);
				setProjects(response.data.projects);


			})
			.catch(err => console.log(err))
	}



	useEffect(() => {

		getHomeData();
	}, []);


	return (
		<div className="homepage">
			<Hero profile={profile} />
			<About technology={technologies} />
			{projects.map(project => (

				<Project data={project} key={project.id} title={project.title} demo_link={project.demo_link} source_code={project.source_code} technologies={project.technologies} description={project.description} />
			))}



			<Contact />
		</div>
	)
}

export default HomePage
