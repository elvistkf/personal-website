import React from 'react';
import styled from 'styled-components';
import ErrorFetching from '../components/ErrorFetching';
import Loading from '../components/Loading';
import PageTitle from '../components/PageTitle';
import ProjectItem from '../components/ProjectItem';
import colourConfig from '../config/colourConfig';
import fontConfig from '../config/fontConfig';
import useFetch from '../hooks/useFetch';

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

function ProjectsContent(data) {
	var types = new Set();
	for (var i=0; i < data.length; i++) {
		types.add(data[i].type)
	}

	var innerContent = Array.from(types).map((type) => {
		const projects = data.filter((item) => item.type === type)
		const title = type.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) + " Projects";

		return (
			<span key={type}>
				<PageTitle title={title}/>
				{
					projects.map((item, index) => (
						<ProjectItem item={item} key={index}/>
					))
				}
			</span>
		)
	})
	return (
		<BackgroundContainer>
			{innerContent}
		</BackgroundContainer>
	)
}

export default function Projects() {
	const {status, data} = useFetch("https://api.elvistkf.synology.me/api/v1/project/")

	switch (status) {
		case 'loading':
			return <Loading/>
		case 'fetched':
			return ProjectsContent(data);
		default:
			return <ErrorFetching/>
	}
}
	
