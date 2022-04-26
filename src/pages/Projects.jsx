import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle';
import ProjectItem from '../components/ProjectItem';
import autoProjects from '../data/projects/autoProjects';
import daProjects from "../data/projects/daProjects";

const BackgroundContainer = styled.div`
	background-color: #212121;
	padding-top: 2em;
	padding-bottom: 5em;
	color: white;
	animation: fade 0.5s ease-in;
	min-height: 70vh;
	
	@media screen and (max-width: 768px) {
		padding-top: 1em;
	}
`

function Projects() {
	return (
		<BackgroundContainer>
			<PageTitle title="Data Analytics" />
			{
				daProjects.map((item, index) => (
					<ProjectItem item={item} key={index}></ProjectItem>
				))
			}
			<PageTitle title="Automation Projects" />
			{
				autoProjects.map((item, index) => (
					<ProjectItem item={item} key={index}></ProjectItem>
				))
			}
		</BackgroundContainer>
	);
}

export default Projects;