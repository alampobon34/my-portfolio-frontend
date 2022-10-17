import React, { useState, useEffect } from 'react'
import Project from '../project/Project';
import About from '../about/About';
import Contact from '../contact/Contact';
import Hero from '../hero/Hero';
import api from '../../helpers/axios';
import './HeaderPage.css'
import ClipLoader from "react-spinners/ClipLoader";
function HomePage() {

	const [profile, setProfile] = useState([]);
	const [projects, setProjects] = useState([]);
	const [technologies, setTechnologies] = useState([]);
	const URL = "https://backend-alampobon34.herokuapp.com/uploads/"
	const [loading, setLoading] = useState(true);

	const override = {
		display: "flex",
		margin: "auto auto",
		borderColor: "black",
		justifyContent: "center",
		alignItems: "center",

	};


	async function getHomeData() {
		await api.get("home")
			.then((response) => {
				setTechnologies(response.data.technologies);
				setProfile(response.data.profile);
				setProjects(response.data.projects);
				setLoading(false);


			})
			.catch(err => console.log(err))
	}



	useEffect(() => {

		getHomeData();
	}, []);


	return (
		<div className="homepage">
			{
				loading ? (<ClipLoader cssOverride={override} loading={loading} />) : (<>
					<Hero URL={URL} profile={profile} />
					<About URL={URL} technology={technologies} />

					{projects.map(project => (

						<Project URL={URL} data={project} key={project.id} title={project.title} demo_link={project.demo_link} source_code={project.source_code} technologies={project.technologies} description={project.description} />
					))}



					<Contact />
				</>)
			}

		</div >
	)
}

export default HomePage
