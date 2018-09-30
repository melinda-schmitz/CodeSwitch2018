// import React
import React, { Component } from 'react';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI components and styling.
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { FormHelperText } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    marginTop: 20,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class AddEvent extends Component {
  state = {
    state: '',
    eventName: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className="main-content-section">
          <h1>Add Event</h1>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={12} md={6}>
              <form className={classes.container} noValidate autoComplete="off">
                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    label="Event name"
                    id="event-name"
                    margin="normal"
                    name="name"
                    onChange={this.handleChange}

                  />
                </FormControl>
                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    label="Street address"
                    id="street-address"
                    margin="normal"
                    name="street-address"
                    onChange={this.handleChange}
                  />
                </FormControl>
                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    label="Address line 2"
                    id="address-line-2"
                    margin="normal"
                    name="address-line-2"
                    onChange={this.handleChange}
                  />
                </FormControl>

                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    label="City"
                    id="city"
                    margin="normal"
                    name="city"
                    onChange={this.handleChange}
                  />
                </FormControl>

                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    select
                    id="state"
                    name="state"
                    label="State"
                    onChange={this.handleChange}
                    margin="normal"
                    className={classes.textField}
                    SelectProps={
                      { name: 'value' }
                    }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="hai">Hai</MenuItem>
                    <MenuItem value="olivier">Olivier</MenuItem>
                    <MenuItem value="kevin">Kevin</MenuItem>
                  </TextField>
                </FormControl>

                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    label="Zip code"
                    id="zip-code"
                    margin="normal"
                    name="zip"
                    onChange={this.handleChange}
                  />
                </FormControl >

                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    label="Date"
                    id="event-date"
                    margin="normal"
                    name="event-date"
                    onChange={this.handleChange}
                  />
                </FormControl>

                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    label="Time"
                    id="event-time"
                    margin="normal"
                    name="event-time"
                    onChange={this.handleChange}
                  />
                </FormControl>

                <FormControl className={classes.formControl} fullWidth>
                  <TextField
                    label="Description"
                    id="event-description"
                    margin="normal"
                    name="name"
                    onChange={this.handleChange}
                  />
                </FormControl>
              </form>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AddEvent);
