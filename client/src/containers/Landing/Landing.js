// import React
import React, { Component } from 'react';
// import material ui components and styling
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DayPicker from 'react-day-picker';
// import other components
import EventCard from './EventCard';
import UpcomingEvents from './UpcomingEvents';

// import day picker css
import 'react-day-picker/lib/style.css';


class Landing extends Component {
  render() {
    return (
      <div>
        <div className="main-content-section">
          <Grid container spacing={16}>
            <Grid item xs={12} sm={12} md={8}>
              <h1>Today&#39;s Events</h1>
              <EventCard />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <DayPicker />
              <h1>Upcoming Events</h1>
              <UpcomingEvents />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" size="large" className="app-btn view-details-btn">View More...</Button>
        </div>
      </div>
    );
  }
}

export default Landing;
