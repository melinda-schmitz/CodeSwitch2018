// Import React
import React, { Component } from 'react';
// Import third party linking
import { Link } from 'react-router-dom';
// import prop types
import PropTypes from 'prop-types';
// import lodash
import map from 'lodash/map';
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
// Import moment js library to format event date
import moment from 'moment';

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
    marginTop: 20,
  },
  btnText: {
    marginRight: 10,
  },
  eventInfoType: {
    fontWeight: 600,
    fontSize: 22,
  },
};

class EventCard extends Component {
  render() {
    const {
      classes,
      events,
    } = this.props;

    return (
      <div>
        {map(events, (event, key) => <Card className={classes.card} key={key}>
          <CardContent>
            <Typography component="p" className={classes.eventInfo}>
              <span className={classes.eventInfoType}>Name of event</span>
              <br />
              {' '}
              {event.eventName}
            </Typography>
            <Typography component="p" className={classes.eventInfo}>
              <span className={classes.eventInfoType}>Address</span>
              <br />
              {' '}
              {event.eventAddress}
              {' '}
              {event.eventAddress2}
              {<br />}
              {event.eventCity}
              ,
              {' '}
              {event.eventState}
              {' '}
              {event.eventZip}
            </Typography>
            <Typography component="p" className={classes.eventInfo}>
              <span className={classes.eventInfoType}>Date</span>
              <br />
              {' '}
              {moment(event.eventDate).format('DD MMM YYYY')}
            </Typography>
            <Typography component="p" className={classes.eventInfo}>
              <span className={classes.eventInfoType}>Time</span>
              <br />
              {' '}
              {event.eventTime}
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
        </Card>)}
      </div>
    );
  }
}

// Define prop types
EventCard.propTypes = {
  classes: PropTypes.object.isRequired,
  events: PropTypes.object,
};


export default withStyles(styles)(EventCard);
