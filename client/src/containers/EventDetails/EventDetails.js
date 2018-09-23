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
          <b>Event:</b> Charlotte's Web @ Stages Theatre (Pay What You Can performance)<br />
          <b>Location:</b> 1111 Mainstreet, Hopkins, MN, 55343, United States<br />
          <b>Date:</b> September 23rd, 2018<br />
          <b>Time:</b> 1:00 PM<br />
          <b>Ages:</b> All Ages<br />
          <br />
          <b>Description: </b>
          Patrons can reserve up to SIX (6) tickets at no cost. Patron/Households can reserve tickets to a maximum of THREE (3) pay-what-you-can productions per season. The day of the performance you can “pay-what-you-can” by making a donation of any amount on your way into the theater.
          <br />
          <br />
          <br />
          <br />
          <Button variant="contained" className="padRight">
            Go Back
          </Button>
          <Button
            variant="contained"
            color="primary" className="padRight"
          >
           <i class="fa fa-map-o" aria-hidden="true"></i>  Directions
          </Button>
          <Button
            variant="contained"
            color="primary"  className="padRight"
          >
            Add Event
          </Button>
        </div>
      </div>
    );
  }
}

export default EventDetails;
