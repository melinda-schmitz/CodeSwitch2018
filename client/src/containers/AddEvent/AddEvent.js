// import React
import React, { Component } from 'react';
// Import NavBar component
import NavBar from '../../components/NavBar';

class AddEvent extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="main-content-section">
          <h1>Add Event</h1>
        </div>
      </div>
    );
  }
}

export default AddEvent;
