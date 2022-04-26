import React from 'react';
import styled from 'styled-components';
import PubItem from '../components/PubItem';
import journal from '../data/publications/journal';
import conference from '../data/publications/conference';
import thesis from '../data/publications/thesis';
import "../common.css";
import PageTitle from '../components/PageTitle';
import colourConfig from '../config/colourConfig';
import fontConfig from '../config/fontConfig';

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

function Publications() {
	const jLength = journal.length
	const cLength = conference.length
	const tLength = thesis.length
	// Show result as JSON
	return (
		<BackgroundContainer>
			<PageTitle title="Journal Papers" />
			<BoxContainer>
				{journal.map((item, index) => (
					<PubItem id={jLength - index} item={item} type="journal" key={index}></PubItem>
				))}
			</BoxContainer>
			<PageTitle title="Conference Papers" />
			<BoxContainer>
				{conference.map((item, index) => (
					<PubItem id={cLength - index} item={item} type="conference" key={index}></PubItem>
				))}
			</BoxContainer>
			<PageTitle title="Thesis" />
			<BoxContainer>
				{thesis.map((item, index) => (
					<PubItem id={tLength - index} item={item} type="thesis" key={index}></PubItem>
				))}
			</BoxContainer>
		</BackgroundContainer>
	);
}

export default Publications;