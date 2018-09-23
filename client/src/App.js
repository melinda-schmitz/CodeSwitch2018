// Import React
import React, { Component } from 'react';
// Importing React Router to add page routes.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Import App css file
import './App.css';
import NavBar from './components/NavBar';
// Import Events page
import Events from './containers/Events';
// Import Profile page
import Profile from './containers/Profile';
// Import Add Event page
import AddEvent from './containers/AddEvent';
// Import Login page
import Login from './containers/Login';
// Import Landing page
import Landing from './containers/Landing';
// Import Event View profile page
import EventView from './components/EventsView';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<NavBar />
						<EventView/>
						<Switch>
							<Route exact path="/" component={Landing} />
							<Route exact path="/events" component={Events} />
							<Route exact path="/profile" component={Profile} />
							<Route exact path="/add" component={AddEvent} />
							<Route exact path="/login" component={Login} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
