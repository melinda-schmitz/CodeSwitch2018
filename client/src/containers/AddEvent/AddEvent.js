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
// import Firebase database
import { database } from '../../firebase-config';

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
  invalidFeedback: {
    color: 'var(--form-error-color)',
  },
});
const initialState = {
  eventName: '',
  eventAddress: '',
  eventAddress2: '',
  eventCity: '',
  eventState: '',
  eventZip: '',
  eventDate: '',
  eventTime: '',
  eventDescription: '',
  errors: [],
};


class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.eventsRef = database.ref('/events');
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    const {
      eventName,
      eventAddress,
      eventAddress2,
      eventCity,
      eventState,
      eventZip,
      eventDate,
      eventTime,
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

    // Check For Errors
    if (eventName === '') {
      this.setState({ errors: { eventName: 'Event name is required.' } });
      return;
    }

    if (eventAddress === '') {
      this.setState({ errors: { eventAddress: 'Street address is required.' } });
      return;
    }

    if (eventCity === '') {
      this.setState({ errors: { eventCity: 'City is required.' } });
      return;
    }

    if (eventState === '') {
      this.setState({ errors: { eventState: 'State is required.' } });
      return;
    }

    if (eventZip === '') {
      this.setState({ errors: { eventZip: 'Zip code is required.' } });
      return;
    }

    if (eventDate === '') {
      this.setState({ errors: { eventDate: 'Date is required.' } });
      return;
    }

    if (eventTime === '') {
      this.setState({ errors: { eventTime: 'Time is required.' } });
      return;
    }

    if (eventDescription === '') {
      this.setState({ errors: { eventDescription: 'Description of event is required.' } });
      return;
    }

    this.eventsRef.push({
      eventName,
      eventAddress,
      eventAddress2,
      eventCity,
      eventState,
      eventZip,
      eventDate,
      eventTime,
      eventDescription,
    });
    // Clear form
    document.getElementById('add-event-form').reset();
    this.setState(initialState);

    // Go to home page
    this.props.history.push('/');
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
      errors,
    } = this.state;

    return (
      <div>
        <div className="main-content-section">
          <h1>Add Event</h1>
          <form id="add-event-form" className={classes.container} noValidate autoComplete="off" onSubmit={this.onSubmit}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={12} md={6}>
                <EventField
                  label="Event name"
                  id="event-name"
                  name="eventName"
                  onChange={this.onChange}
                  fieldType="text"
                  value={eventName}
                  error={errors.eventName}
                />
                <EventField
                  label="Date"
                  id="event-date"
                  name="eventDate"
                  onChange={this.onChange}
                  fieldType="date"
                  value={eventDate}
                  error={errors.eventDate}
                />
                <EventField
                  label="Time"
                  id="event-time"
                  name="eventTime"
                  onChange={this.onChange}
                  fieldType="time"
                  value={eventTime}
                  error={errors.eventTime}
                />
                <EventField
                  label="Description"
                  id="event-description"
                  name="eventDescription"
                  onChange={this.onChange}
                  fieldType="text"
                  value={eventDescription}
                  error={errors.eventDescription}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <EventField
                  label="Street address"
                  id="street-address"
                  name="eventAddress"
                  onChange={this.onChange}
                  fieldType="text"
                  value={eventAddress}
                  error={errors.eventAddress}
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
                  error={errors.eventCity}
                />
                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    select
                    id="state"
                    name="eventState"
                    label="State"
                    onChange={this.onChange}
                    margin="normal"
                    error={errors.eventState}
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
                  {errors.eventState && <div className={classes.invalidFeedback}>{errors.eventState}</div>}
                </FormControl>
                <EventField
                  label="Zip code"
                  id="zip-code"
                  name="eventZip"
                  onChange={this.onChange}
                  fieldType="text"
                  value={eventZip}
                  error={errors.eventZip}
                />
                <Button type="submit" variant="fab" color="primary" aria-label="Add" className={classes.button}>
                  <AddIcon />
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    );
  }
}

// Define prop types
AddEvent.propTypes = {
  classes: PropTypes.object.isRequired,
  errors: PropTypes.object,
};


export default withStyles(styles)(AddEvent);
