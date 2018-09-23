import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	card: {
		minWidth: 275,
		marginTop: 30,
		borderSize: 5,
		borderStyle: 'solid',
		borderWidth: 4,
		borderColor: 'var(--app-secondary-color)',
		backgroundColor: 'var(--app-card-color)',
	},
	eventInfo: {
	}
};

class EventCard extends Component {
	render() {
		const { classes } = this.props;

		return (
			<Card className={classes.card}>
				<CardContent>
					<Typography component="p" >
						Event: Homework Help
								</Typography>
					<Typography component="p">
						Location: Arlington Hills Library
								</Typography>
					<Typography component="p">
						Date: September 23, 2018
								</Typography>
					<Typography component="p">
						Time: 3:30 PM
								</Typography>
				</CardContent>
				<CardActions>
					<Button size="small"> View Details <i className="far fa-arrow-alt-circle-right"></i></Button>
					<Button size="small">Add Event</Button>
				</CardActions>
			</Card >
		)
	}
}

export default withStyles(styles)(EventCard);
