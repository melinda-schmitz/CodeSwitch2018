import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import css file
import './Landing.css';

const styles = {
	upcomingEventContent: {
		marginTop: 30,
	},
	btnText: {
		marginLeft: 5,
	}
};

class UpcomingEventContent extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.upcomingEventContent}>
				<Typography component="p">
					Event: Homework Help
					</Typography>
				<Typography component="p">
					Date: September 23, 2018
					</Typography>
				<Typography component="p">
					Time: 3:30 PM
					</Typography>
				<Typography component="p">
					<Button variant="contained" className="view-details-btn" size="small">
						<i className="fas fa-info-circle"></i> <span className={classes.btnText}>View Details</span>
					</Button>
				</Typography>
			</div>
		)
	}
}

export default withStyles(styles)(UpcomingEventContent);
