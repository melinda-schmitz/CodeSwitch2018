import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  x:{
    marginTop: 200
  }
};

function EventView(props) {
  const { classes } = props;
  return (
    <div className={classes.x}>
      <AppBar position="static">
        <Toolbar>
          Todays Events
        </Toolbar>
      </AppBar>
    </div>
  );
}

EventView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventView);
