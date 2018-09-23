import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// Import Css
import './Events.css';

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

class MyEventCard extends Component {
	render() {
		const { classes } = this.props;

		return (
			<Card className={classes.card}>
				<CardContent>
					<Typography component="p" className={classes.eventInfo}>
						Event: Reading Buddies
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
					<Grid container justify="flex-end">
						<Button className="app-btn view-details" variant="contained" color="primary" size="small"><span className={classes.btnText}>View Details</span><i className="far fa-arrow-alt-circle-right"></i></Button>
						<Button className="app-btn delete-event" variant="contained" color="primary" size="small"><span className={classes.btnText}>Delete Event</span><i class="fas fa-trash"></i></Button>
					</Grid>
				</CardActions>
			</Card >
		)
	}
}

export default withStyles(styles)(MyEventCard);