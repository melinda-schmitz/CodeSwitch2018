import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import UpcomingEventContent from './UpcomingEventContent';
// import css
import './Landing.css';

const styles = {
	card: {
		minWidth: 275,
		marginTop: 30,
		borderStyle: 'solid',
		borderWidth: 3,
		borderColor: 'var(--main-bg-color)',
	},
};

class UpcomingEvents extends Component {
	render() {
		const { classes } = this.props;

		return (
			<Card className={classes.card}>
				<CardContent>
					<UpcomingEventContent />
					<UpcomingEventContent />
					<UpcomingEventContent />
				</CardContent>
				<CardActions>
					<Button variant="contained" size="large" className="app-btn view-details-btn">View More...</Button>
				</CardActions>
			</Card>
		)
	}
}

export default withStyles(styles)(UpcomingEvents);
