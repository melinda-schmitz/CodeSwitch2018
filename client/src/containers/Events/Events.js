// import React
import React, { Component } from 'react'
// Import NavBar component
import NavBar from '../../components/NavBar';
import Grid from '@material-ui/core/Grid';
import UpcomingEvents from '../Landing/UpcomingEvents';
import MyEventCard from './MyEventCard';

class Events extends Component {
	render() {
		return (
			<div>
				<div className="main-content-section">
					<Grid container spacing={16}>
						<Grid item xs={12} sm={12} md={8}>
							<h1>My Events For Today</h1>
							<MyEventCard />
							<MyEventCard />
							<MyEventCard />
							<MyEventCard />
						</Grid>
						<Grid item xs={12} sm={12} md={4}>
							<h1>Upcoming Events</h1>
							<UpcomingEvents />
						</Grid>
					</Grid>
				</div>
			</div>
		)
	}
}

export default Events;
