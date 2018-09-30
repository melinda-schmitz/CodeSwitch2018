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
// import list of states
import states from './states.json';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    marginTop: 20,
  },
  button: {
    margin: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
});

class AddEvent extends Component {
  state = {
    eventName: '',
    eventAddress: '',
    eventAddress2: '',
    eventCity: '',
    eventState: '',
    eventZip: '',
    eventDescription: '',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    const {
      eventName,
      eventAddress,
      eventAddress2,
      eventCity,
      eventState,
      eventZip,
      eventDescription,
    } = this.state;
    e.preventDefault();
    // this.restaurantsRef.push({ name: this.state.name });
    console.log('city', eventName);
    console.log('street address', eventAddress);
    console.log('address line 2', eventAddress2);
    console.log('city', eventCity);
    console.log('state', eventState);
    console.log('zip code', eventZip);
    console.log('event desc', eventDescription);
  }

  render() {
    const { classes } = this.props;
    const {
      eventName,
      eventAddress,
      eventAddress2,
      eventCity,
      eventState,
      eventZip,
      eventDescription,
      eventDate,
      eventTime,
    } = this.state;

    return (
      <div>
        <div className="main-content-section">
          <h1>Add Event</h1>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={12} md={6}>
              <form className={classes.container} noValidate autoComplete="off" onSubmit={this.onSubmit}>
                <EventField
                  label="Event name"
                  id="event-name"
                  name="eventName"
                  onChange={this.onChange}
                  fieldType="text"
                  value={eventName}
                />
                <EventField
                  label="Street address"
                  id="street-address"
                  name="eventAddress"
                  onChange={this.onChange}
                  fieldType="text"
                  value={eventAddress}
                />
                <EventField
                  label="Address line 2"
                  id="address-line-2"
                  name="eventAddress2"
                  onChange={this.onChange}
                  fieldType="text"
                  value={eventAddress2}
                />
                <EventField
                  label="City"
                  id="city"
                  name="eventCity"
                  onChange={this.onChange}
                  fieldType="text"
                  value={eventCity}
                />
                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    select
                    id="state"
                    name="eventState"
                    label="State"
                    onChange={this.onChange}
                    margin="normal"
                    value={eventState}
                    variant="outlined"
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  >
                    {states.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
                <EventField
                  label="Zip code"
                  id="zip-code"
                  name="eventZip"
                  onChange={this.onChange}
                  fieldType="text"
                  value={eventZip}
                />
                <EventField
                  label="Date"
                  id="event-date"
                  name="eventDate"
                  onChange={this.onChange}
                  fieldType="date"
                  value={eventDate}
                />
                <EventField
                  label="Time"
                  id="event-time"
                  name="eventTime"
                  onChange={this.onChange}
                  fieldType="time"
                  value={eventTime}
                />
                <EventField
                  label="Description"
                  id="event-description"
                  name="eventDescription"
                  onChange={this.onChange}
                  fieldType="text"
                  value={eventDescription}
                />
                <Button type="submit" variant="fab" color="primary" aria-label="Add" className={classes.button}>
                  <AddIcon />
                </Button>
              </form>
            </Grid>
          </Grid>
        </div>
      </div >
    );
  }
}

// Define prop types
AddEvent.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AddEvent);
