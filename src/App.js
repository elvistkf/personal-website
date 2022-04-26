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
					<Route path="/" element={< Home />} />
					<Route path="/projects" element={< Projects />} />
					<Route path="/publications" element={< Publications />} />
					<Route path="/*" element={< Home />} />
				</Routes>
			</Container>
			<Footer />
		</Router>
	);
}

export default App;