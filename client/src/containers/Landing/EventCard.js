// Import React
import React, { Component } from 'react';
// Import third party linking
import { Link } from 'react-router-dom';
// Import Material UI components and styling
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import css file
import './Landing.css';
// import events/activities from json file.
import activities from '../../data/todaytEvents.json';

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
  },
};

class EventCard extends Component {
  render() {
    const { classes } = this.props;

    return (
      activities.map(item => {
        return (
          <Card className={classes.card} key={item.id}>
            <CardContent>
              <Typography component="p" className={classes.eventInfo}>
                Event:
                {' '}
                {item.name}
              </Typography>
              <Typography component="p" className={classes.eventInfo}>
                Location:
                {' '}
                {item.location}
              </Typography>
              <Typography component="p" className={classes.eventInfo}>
                Date:
                {' '}
                {item.date}
              </Typography>
              <Typography component="p" className={classes.eventInfo}>
                Time:
                {' '}
                {item.time}
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container justify="flex-end">
                <Button className="app-btn view-details-btn" variant="contained" color="primary" size="small" component={Link} to="/eventDetails">
                  <span className={classes.btnText}>View Details</span>
                  <i className="far fa-arrow-alt-circle-right fa-2x" />
                </Button>
                <Button className="app-btn delete-event-btn" variant="contained" color="primary" size="small">
                  <span className={classes.btnText}>Delete Event</span>
                  <i className="fas fa-trash" />
                </Button>
              </Grid>
            </CardActions>
          </Card>
        );
      })
    );
  }
}

export default withStyles(styles)(EventCard);
