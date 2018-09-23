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
// import button component.
import Button from '@material-ui/core/Button';
// import drawer component
import Drawer from '@material-ui/core/Drawer';
//import menuitem component.
import MenuItem from '@material-ui/core/MenuItem';
// import Divider component.
import Divider from '@material-ui/core/Divider';
// import css file for navbar
import './NavBar.css';

const styles = {
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1,
		fontSize: 30,
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
		width: '200px',
		marginTop: 30,
	},
	menuText: {
		marginLeft: 10,
	},
	profileImage: {
		borderRadius: '50 %',
		maxWidth: '100%',
		height: '40px',
		marginLeft: '10px',
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
		const { classes, name, photo, handleLogout } = this.props;
		console.log(this.props);
		return (
			<div className={classes.root}>
				<AppBar position="static" className="appbar">
					<Toolbar>
						<Button color="inherit" className={classes.menuButton} onClick={this.toggleDrawer('left', true)}>
							<i className="fas fa-bars fa-2x" />
						</Button>
						<Typography variant="title" color="inherit" className={classes.grow} component={Link} to="/">
							EduVents
            </Typography>
						<Typography color="inherit">
							Welcome {name}
						</Typography>
						<Button color="inherit" className={classes.loginButton} component={Link} to="/profile">
							<img src={photo} alt={name} className={classes.profileImage} />
						</Button>
					</Toolbar>
				</AppBar>

				<Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)} containerStyle={styles.navBar}>
					<Typography color="inherit" variant="display5" className={classes.menuItem}>
						EduVents
					</Typography>
					<Divider />
					<MenuItem className={classes.menuItem} component={Link} to="/"><i className="fas fa-home"></i> <span className={classes.menuText}>Home</span></MenuItem>
					<MenuItem className={classes.menuItem} component={Link} to="/events"><i className="fas fa-calendar-alt"></i><span className={classes.menuText}> Events</span></MenuItem>
					<MenuItem className={classes.menuItem} component={Link} to="/profile"><i className="fas fa-users"></i><span className={classes.menuText}>Profile</span></MenuItem>
					<MenuItem className={classes.menuItem} component={Link} to="/help"><i className="fas fa-question-circle"></i><span className={classes.menuText}>Help</span></MenuItem>
					<MenuItem className={classes.menuItem} onClick={handleLogout} component={Link} to="/"><i className="fas fa-sign-out-alt"></i><span className={classes.menuText}>Logout</span></MenuItem>
				</Drawer>
			</div >
		);

	}
}

NavBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
