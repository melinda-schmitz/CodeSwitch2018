// import React
import React, { Component } from 'react';
// Import Material UI components
import Grid from '@material-ui/core/Grid';
// Import Upcoming Events component
import UpcomingEvents from '../Landing/UpcomingEvents';
// Import Event Card component.
import MyEventCard from './MyEventCard';
// import Firebase
import firebase from '../../firebase-config';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: '',
      // eventsRef: firebase.database().ref('events'),
      // events: [],
    };
  }

  componentDidMount() {
    /* Create reference to messages in Firebase Database */
    const eventsRef = firebase.database().ref('events');
    eventsRef.on('value', snapshot => {
      const events = snapshot.val();
      // console.log(events);
      const newState = [];
      for (const event in events) {
        newState.push({
          name: events[event].name,
        });
      }
      this.setState({
        events: newState,
      });
      // console.log('EVENTS: ' + this.state.events);
    });
  }

  render() {
    return (
      <div>
        <div className="main-content-section">
          <Grid container spacing={16}>
            <Grid item xs={12} sm={12} md={8}>
              <h1>My Events For Today</h1>
              <MyEventCard />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <h1>Upcoming Events</h1>
              <UpcomingEvents />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Events;
