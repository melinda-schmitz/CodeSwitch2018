// Import React
import React, { Component } from 'react';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI components and styling.
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    marginTop: 20,
  },
  invalidFeedback: {
    color: 'var(--form-error-color)',
  },
});

class EventField extends Component {
  render() {
    // ES6 destructuring
    const {
      classes,
      label,
      id,
      name,
      onChange,
      fieldType,
      error,
    } = this.props;

    return (
      <FormControl className={classes.formControl} fullWidth>
        <TextField
          label={label}
          id={id}
          margin="normal"
          name={name}
          type={fieldType}
          onChange={onChange}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        {error && <div className={classes.invalidFeedback}>{error}</div>}
      </FormControl>
    );
  }
}

// Define prop types
EventField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fieldType: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  error: PropTypes.string,
};

// Export the EventField component so that it can be added to the AddEvent form component.
export default withStyles(styles)(EventField);
