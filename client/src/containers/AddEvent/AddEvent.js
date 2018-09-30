// import React
import React, { Component } from 'react';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI components and styling.
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

// import EventField component
import EventField from './EventField';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    marginTop: 20,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class AddEvent extends Component {
  constructor() {
    super();
    this.state = {
      eventName: '',
      eventAddress: '',
      eventAddress2: '',
      eventCity: '',
      eventState: '',
      eventZip: '',
      eventDescription: '',
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleAddEventSubmit(event) {
    event.preventDefault();
    // this.restaurantsRef.push({ name: this.state.name });
    console.log(this.state.eventName);
    console.log(this.state.eventAddress);
    console.log(this.state.eventAddress2);
    console.log(this.state.eventCity);
    console.log(this.state.eventState);
    console.log(this.state.eventZip);
    console.log(this.state.eventDescription);
  }

  render() {
    const { classes } = this.props;
    const { eventName, eventAddress, eventAddress2, eventCity, eventState, eventZip, eventDescription, eventDate, eventTime } = this.state;

    return (
      <div>
        <div className="main-content-section">
          <h1>Add Event</h1>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={12} md={6}>
              <form className={classes.container} noValidate autoComplete="off">
                <EventField
                  label="Event name"
                  id="event-name"
                  name="name"
                  onFieldChange={this.handleChange}
                  fieldType="text"
                  value={eventName}
                />
                <EventField
                  label="Street address"
                  id="street-address"
                  name="street-address"
                  onFieldChange={this.handleChange}
                  fieldType="text"
                  value={eventAddress}
                />
                <EventField
                  label="Address line 2"
                  id="address-line-2"
                  name="address-line-2"
                  onFieldChange={this.handleChange}
                  fieldType="text"
                  value={eventAddress2}
                />
                <EventField
                  label="City"
                  id="city"
                  name="city"
                  onFieldChange={this.handleChange}
                  fieldType="text"
                  value={eventCity}
                />
                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    select
                    id="state"
                    name="state"
                    label="State"
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    SelectProps={
                      { name: 'value' }
                    }
                    InputLabelProps={{
                      shrink: true,
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="hai">Hai</MenuItem>
                    <MenuItem value="olivier">Olivier</MenuItem>
                    <MenuItem value="kevin">Kevin</MenuItem>
                  </TextField>
                </FormControl>
                <EventField
                  label="Zip code"
                  id="zip-code"
                  name="zip-code"
                  onFieldChange={this.handleChange}
                  fieldType="text"
                  value={eventZip}
                />
                <EventField
                  label="Date"
                  id="event-date"
                  name="event-date"
                  onFieldChange={this.handleChange}
                  fieldType="date"
                  value={eventDate}
                />
                <EventField
                  label="Time"
                  id="event-time"
                  name="event-time"
                  onFieldChange={this.handleChange}
                  fieldType="time"
                  value={eventTime}
                />
                <EventField
                  label="Description"
                  id="event-description"
                  name="event-description"
                  onFieldChange={this.handleChange}
                  fieldType="text"
                  value={eventDescription}
                />
                <Button onClick={this.handleAddEventSubmit} variant="fab" color="primary" aria-label="Add" className={classes.button}>
                  <AddIcon />
                </Button>
              </form>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AddEvent);
