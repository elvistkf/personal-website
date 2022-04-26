import React from 'react';
import styled from 'styled-components';
import HomeEducation from '../components/Home/HomeEducation';
import HomeHeader from '../components/Home/HomeHeader';
import colourConfig from '../config/colourConfig';
import fontConfig from '../config/fontConfig';

const Container = styled.div`
	background-color: ${colourConfig.background};
	color: ${fontConfig.global.colour};
`

function Home() {
	return (
		<Container>
			<HomeHeader />
			<HomeEducation />
		</Container>
	);
}

export default Home;