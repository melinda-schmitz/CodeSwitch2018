import React, { Component } from 'react';
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
});

class EventField extends Component {
  render() {
    const { classes, label, id, name, onFieldChange, fieldType } = this.props;

    return (
      <FormControl className={classes.formControl} fullWidth>
        <TextField
          label={label}
          id={id}
          margin="normal"
          name={name}
          onChange={onFieldChange}
          type={fieldType}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>
    )
  }
}

export default withStyles(styles)(EventField);
