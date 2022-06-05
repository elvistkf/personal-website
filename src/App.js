import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Publications from './pages/Publications';
import colourConfig from './config/colourConfig';

const Container = styled.div`
  background-color: ${colourConfig.background};
  min-height: 80vh;
`

function App() {
	return (
		<Router>
			<Container>
				<Navbar />
				<Routes >
					<Route path="/personal-website" element={< Home />} />
					<Route path="/personal-website/projects" element={< Projects />} />
					{/* <Route path="/personal-website/projects2" element={< Projects2 />} /> */}
					<Route path="/personal-website/publications" element={< Publications />} />
					<Route path="/personal-website/*" element={< Home />} />
				</Routes>
			</Container>
			<Footer />
		</Router>
	);
}

export default App;