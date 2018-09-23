// import React
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import EventCard from './EventCard';
import UpcomingEvents from './UpcomingEvents';
import Button from '@material-ui/core/Button';


class Landing extends Component {

	render() {

		return (
			<div>
				<div className="main-content-section">
					<Grid container spacing={16}>
						<Grid item xs={12} sm={12} md={8}>
							<h1>Today's Events</h1>
							<EventCard />
							<EventCard />
							<EventCard />
							<EventCard />
							<EventCard />
						</Grid>
						<Grid item xs={12} sm={12} md={4}>
							<h1>Upcoming Events</h1>
							<UpcomingEvents />
						</Grid>
					</Grid>
					<Button variant="contained" color="primary" size="large" className="app-btn">View More...</Button>
				</div >
			</div>
		)
	}
}

export default Landing;