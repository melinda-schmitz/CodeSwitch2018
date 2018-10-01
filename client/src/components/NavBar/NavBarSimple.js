// import React
import React, { Component } from 'react';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
// import prop types
import PropTypes from 'prop-types';
// import css styling for material ui components.
import { withStyles } from '@material-ui/core/styles';
// import material ui app bar components.
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import typography component.
import Typography from '@material-ui/core/Typography';
// import css file for navbar
import './NavBar.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    fontSize: 30,
  },
};

class NavBarSimple extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className="appbar">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.grow} component={Link} to="/">
              EduVents
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBarSimple.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBarSimple);
