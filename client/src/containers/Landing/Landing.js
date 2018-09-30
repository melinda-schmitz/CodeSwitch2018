// import React
import React, { Component } from 'react';
// import material ui components and styling
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DayPicker from 'react-day-picker';
// import other components
import EventCard from './EventCard';
import UpcomingEvents from './UpcomingEvents';
// import firebase database
import { database } from '../../firebase-config';

// import day picker css
import 'react-day-picker/lib/style.css';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null,
    };

    this.eventsRef = database.ref('/events');
  }

  componentDidMount() {
    this.eventsRef.on('value', (snapshot) => {
      // console.log(snapshot.val());
      this.setState({ events: snapshot.val() });
    });
  }

  render() {
    const { events } = this.state;
    return (
      <div>
        <div className="main-content-section">
          <Grid container spacing={16}>
            <Grid item xs={12} sm={12} md={8}>
              <h1>Upcoming events</h1>
              <EventCard
                events={events}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <DayPicker />
              <h1>Events I&#39;m interested in</h1>
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
