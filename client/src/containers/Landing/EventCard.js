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
		borderWidth: 3,
		borderColor: 'var(--app-secondary-color)',
	},
	eventInfo: {
		fontSize: 18,
	},
	btnText: {
		marginRight: 10,
	}
};

class EventCard extends Component {
	render() {
		const { classes } = this.props;

		return (
			<Card className={classes.card}>
				<CardContent>
					<Typography component="p" className={classes.eventInfo}>
						Event: Homework Help
					</Typography>
					<Typography component="p" className={classes.eventInfo}>
						Location: Arlington Hills Library
					</Typography>
					<Typography component="p" className={classes.eventInfo}>
						Date: September 23, 2018
					</Typography>
					<Typography component="p" className={classes.eventInfo}>
						Time: 3:30 PM
					</Typography>
				</CardContent>
				<CardActions>
					<Button className="app-btn" variant="contained" color="primary" size="small"><span className={classes.btnText}>View Details</span><i className="far fa-arrow-alt-circle-right fa-2x"></i></Button>
					<Button className="app-btn" variant="contained" color="primary" size="small"><span className={classes.btnText}>Save Event</span><i className="far fa-save fa-2x"></i></Button>
				</CardActions>
			</Card >
		)
	}
}

export default withStyles(styles)(EventCard);
