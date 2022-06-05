import React from 'react';
import styled from 'styled-components';
import PubItem from '../components/PubItem';
// import journal from '../data/publications/journal';
// import conference from '../data/publications/conference';
// import thesis from '../data/publications/thesis';
import "../common.css";
import PageTitle from '../components/PageTitle';
import colourConfig from '../config/colourConfig';
import fontConfig from '../config/fontConfig';
import Loading from '../components/Loading';
import ErrorFetching from '../components/ErrorFetching';
import useFetch from '../hooks/useFetch';

const BackgroundContainer = styled.div`
	background-color: ${colourConfig.background};
	padding-top: 2em;
	padding-bottom: 5em;
	color: ${fontConfig.global.colour};
	animation: fade 0.5s ease-in;
	
	@media screen and (max-width: 768px) {
		padding-top: 1em;
	}
`

const BoxContainer = styled.div`
	border-radius: 1em;
	background-color: ${colourConfig.itemBox};
	width: 50%;
	margin: auto;
	/* min-height: 8vh; */
	padding: 1.5em 1.5em 1.5em 1.5em;

	@media screen and (min-width: 768px) and (max-width: 1400px) {
		width: 67.5%;
		padding: 1.25em 1.25em 1.25em 1.25em;
	}

	@media screen and (max-width: 768px) {
        width: 77.5%;
		padding: 1em 1em 1em 1em;
    }
`

function PublicationsContent(data) {
	var types = new Set();
	for (var i=0; i < data.length; i++) {
		types.add(data[i].type)
	}

	var innerContent = Array.from(types).map((type) => {
		const papers = data.filter((item) => item.type === type)
		const length = papers.length;
		const title = type.replace(/(^\w|\s\w)/g, m => m.toUpperCase()) + " Papers";

		return (
			<span key={type}>
				<PageTitle title={title}/>
				<BoxContainer>
					{
						papers.map((item, index) => (
							<PubItem id={length - index} item={item} type={type} key={item.id}></PubItem>
						))
					}
				</BoxContainer>
			</span>
		)
	})
	return (
		<BackgroundContainer>
			{innerContent}
		</BackgroundContainer>
	)
}

export default function Publications() {
	// const {status, data} = useFetch("http://ec2-44-234-228-107.us-west-2.compute.amazonaws.com:8443/api/v1/publication/")
	const {status, data} = useFetch("/api/publication/")

	switch (status) {
		case 'loading':
			return <Loading/>
		case 'fetched':
			return PublicationsContent(data);
		default:
			return <ErrorFetching/>;
	}	
}