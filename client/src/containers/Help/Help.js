// Import React
import React, { Component } from 'react';
// Import Material UI components and styling.
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

const helpTopics = [
  {
    id: 0,
    title: 'What is EduVents?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.E Expedita, nemo.Consequuntur atque voluptate, quisquam accusamus aliquam quas voluptatibus eaque beatae pariatur maxime inventore animi ipsa odit, ad magni, veritatis facere! Sequi, ratione dolores animi veniam illo quas velit incidunt atque, perspiciatis optio aliquam dolorum inventore, voluptates praesentium hic quisquam ? Voluptatum.',
  },
  {
    id: 1,
    title: 'How do I update my interests?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.E Expedita, nemo.Consequuntur atque voluptate, quisquam accusamus aliquam quas voluptatibus eaque beatae pariatur maxime inventore animi ipsa odit, ad magni, veritatis facere! Sequi, ratione dolores animi veniam illo quas velit incidunt atque, perspiciatis optio aliquam dolorum inventore, voluptates praesentium hic quisquam ? Voluptatum.',
  },
  {
    id: 2,
    title: 'How do I find events for today?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.E Expedita, nemo.Consequuntur atque voluptate, quisquam accusamus aliquam quas voluptatibus eaque beatae pariatur maxime inventore animi ipsa odit, ad magni, veritatis facere! Sequi, ratione dolores animi veniam illo quas velit incidunt atque, perspiciatis optio aliquam dolorum inventore, voluptates praesentium hic quisquam ? Voluptatum.',
  },
  {
    id: 3,
    title: 'How do I save events for later?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.E Expedita, nemo.Consequuntur atque voluptate, quisquam accusamus aliquam quas voluptatibus eaque beatae pariatur maxime inventore animi ipsa odit, ad magni, veritatis facere! Sequi, ratione dolores animi veniam illo quas velit incidunt atque, perspiciatis optio aliquam dolorum inventore, voluptates praesentium hic quisquam ? Voluptatum.',
  },

];


class Help extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="main-content-section">
        <h1>Help</h1>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={12}>
            <div className={classes.root}>
              {helpTopics.map(topic => (
                <ExpansionPanel key={topic.id}>
                  <ExpansionPanelSummary>
                    <Typography className={classes.heading}>{topic.title}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      {topic.content}
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              ))}
              ;
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Help);
