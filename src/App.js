import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';

function App() {
	return (
		<HashRouter>
			<Navigation />
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
		</HashRouter>
	);
}

export default App;
