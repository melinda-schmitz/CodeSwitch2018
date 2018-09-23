// import React
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import placeholder profile pic
import profilePic from '../../images/profilepic.png';

const styles = {
	profileInfo: {
		marginTop: 30,
	},
	profilePic: {
		width: '200px',
		height: '200px',
	}
};

class Profile extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="main-content-section">
				<h1>User: john</h1>
				<Grid container spacing={16}>
					<Grid item xs={12} sm={12} md={4}>
						<img src={profilePic} alt="profile pic" className={classes.profilePic} />
					</Grid>
					<Grid item xs={12} sm={12} md={8}>
						<h1>John Doe</h1>
						<h3>john@example.com</h3>
					</Grid>
				</Grid>
				<Grid container spacing={16}>
					<Grid item xs={12} sm={12} md={4}>
						<Typography component="p" className={classes.profileInfo} >
							Username
								</Typography>
						<Typography component="p" className={classes.profileInfo}>
							Email
								</Typography>
						<Typography component="p" className={classes.profileInfo}>
							Password
								</Typography>
						<Typography component="p" className={classes.profileInfo}>
							Full Name
								</Typography>
					</Grid>
					<Grid item xs={12} sm={12} md={8}>
						<Typography component="p" className={classes.profileInfo} >
							john
								</Typography>
						<Typography component="p" className={classes.profileInfo}>
							john@example.com
								</Typography>
						<Typography component="p" className={classes.profileInfo}>
							***************
								</Typography>
						<Typography component="p" className={classes.profileInfo}>
							John Doe
								</Typography>
					</Grid>
				</Grid>
			</div >
		)
	}
}

export default withStyles(styles)(Profile);