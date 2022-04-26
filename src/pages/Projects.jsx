import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle';
import ProjectItem from '../components/ProjectItem';
import colourConfig from '../config/colourConfig';
import fontConfig from '../config/fontConfig';
import autoProjects from '../data/projects/autoProjects';
import daProjects from "../data/projects/daProjects";
import researchProjects from '../data/projects/researchProjects';

const BackgroundContainer = styled.div`
	background-color: ${colourConfig.background};
	padding-top: 2em;
	padding-bottom: 5em;
	color: ${fontConfig.global.colour};
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
			<PageTitle title="Research Projects" />
			{
				researchProjects.map((item, index) => (
					<ProjectItem item={item} key={index}></ProjectItem>
				))
			}
		</BackgroundContainer>
	);
}

export default Projects;