import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import css file
import './Landing.css';
import activities from '../../data/todaytEvents.json';
import Grid from '@material-ui/core/Grid';

const styles = {
	card: {
		minWidth: 275,
		marginTop: 30,
		borderSize: 5,
		borderStyle: 'solid',
		borderWidth: 3,
		borderColor: 'var(--main-bg-color)',
		backgroundColor: 'var(--app-card-color)',
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

		return(
			activities.map(item => {
				return (
					<Card className={classes.card} key={item.id}>
						<CardContent>
							<Typography component="p" className={classes.eventInfo}>
							Event: {item.name}
							</Typography>
							<Typography component="p" className={classes.eventInfo}>
							Location: {item.location}
							</Typography>
							<Typography component="p" className={classes.eventInfo}>
							Date: {item.date}
							</Typography>
							<Typography component="p" className={classes.eventInfo}>
							Time: 3:30 PM
							</Typography>
						</CardContent>
						<CardActions>
						<Grid container justify="flex-end">
						<Button className="app-btn" variant="contained" color="primary" size="small"><span className={classes.btnText}>View Details</span><i className="far fa-arrow-alt-circle-right"></i></Button>
						<Button className="app-btn delete-event save-event-btn" variant="contained" color="primary" size="small"><span className={classes.btnText}>Delete Event</span><i className="fas fa-trash"></i></Button>
						</Grid>
						</CardActions>
					</Card >
				)
			})
		)
	}
}

export default withStyles(styles)(EventCard);
