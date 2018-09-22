// Import React
import React, { Component } from 'react';
// Import App css file
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
			</div>
		);
	}
}

export default App;
