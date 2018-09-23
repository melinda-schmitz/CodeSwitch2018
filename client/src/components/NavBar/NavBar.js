import React, { Component } from 'react';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
// import css
import './NavBar.css';

const styles = {
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	loginButton: {
		fontSize: '1.5em'
	},
	menuItem: {
		padding: '10px 30px',
		width: '200px'
	}
};

class NavBar extends Component {
	constructor() {
		super();
		this.state = { open: false };
	}

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open,
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static" className="appbar">
					<Toolbar>
						<Button color="inherit" className={classes.menuButton} onClick={this.toggleDrawer('left', true)}>
							<i class="fas fa-bars" />
						</Button>
						<Typography variant="title" color="inherit" className={classes.grow} >
							Edu To Do
            </Typography>
						<Button color="inherit" className={classes.loginButton} component={Link} to="/profile">
							<i class="far fa-user-circle" />
						</Button>
					</Toolbar>
				</AppBar>

				<Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)} containerStyle={styles.navBar}>
					<MenuItem className={classes.menuItem} component={Link} to="/"><i className="fas fa-home"></i> Home</MenuItem>
					<MenuItem className={classes.menuItem} component={Link} to="/events"><i className="fas fa-calendar-alt"></i> Events</MenuItem>
					<MenuItem className={classes.menuItem} component={Link} to="/profile"><i className="fas fa-users"></i> Profile</MenuItem>
					<MenuItem className={classes.menuItem} component={Link} to="/"><i className="fas fa-sign-out-alt"></i> Logout</MenuItem>
				</Drawer>
			</div>
		);

	}
}

NavBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
