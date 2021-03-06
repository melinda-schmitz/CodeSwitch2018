// import React
import React, { Component } from 'react';
// import third party linking
import { Link } from 'react-router-dom';
// import material ui components and styling
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import css file
import './Landing.css';
// import activities/events from json file.
import activities from '../../data/upcomingEvents.json';

const styles = {
  upcomingEventContent: {
    marginTop: 30,
  },
  btnText: {
    marginLeft: 5,
  },
};

class UpcomingEventContent extends Component {
  render() {
    const { classes } = this.props;

    return (
      activities.map(item => {
        return (
          <div className={classes.upcomingEventContent} key={item.id}>
            <Typography component="p">
              Event:
              {' '}
              {item.name}
            </Typography>
            <Typography component="p">
              Date:
              {' '}
              {item.date}
            </Typography>
            <Typography component="p">
              Time:
              {' '}
              {item.time}
            </Typography>
            <Typography component="p">
              <Button variant="contained" className="view-details-btn" size="small" component={Link} to="/eventDetails">
                <i className="fas fa-info-circle" />
                <span className={classes.btnText}>View Details</span>
              </Button>
            </Typography>
          </div>
        );
      })
    );
  }
}

export default withStyles(styles)(UpcomingEventContent);
