import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	upcomingEventContent: {
		marginTop: 30,
	},
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
					View Details
					</Typography>
			</div>
		)
	}
}

export default withStyles(styles)(UpcomingEventContent);
