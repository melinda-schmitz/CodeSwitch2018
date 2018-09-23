// import React
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../EventDetails/EventDetails.css';

class EventDetails extends Component {
  render() {
    return (
      <div>
        <h1>Event Details</h1>
        <div className="section">
          <b>Event:</b> <br />
          <b>Location:</b> <br />
          <b>Date:</b> <br />
          <b>Time:</b> <br />
          <b>Ages:</b> <br />
          <br />
          <b>Description:</b>
          <br />
          <br />
          <br />
          <br />
          <Button variant="contained">
            Go Back
          </Button>
          <Button
            variant="contained"
            color="primary"
          >
           <i class="fa fa-map-o" aria-hidden="true"></i>  Directions
          </Button>
          <Button
            variant="contained"
            color="primary"
          >
            Add Event
          </Button>
        </div>
      </div>
    );
  }
}

export default EventDetails;
