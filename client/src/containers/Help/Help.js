import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
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


class Help extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="main-content-section">
				<h1>Help</h1>
				<Grid container spacing={16}>
					<Grid item xs={12} sm={12}>
						<div className={classes.root}>
							<ExpansionPanel>
								<ExpansionPanelSummary>
									<Typography className={classes.heading}>What is EDUVent?</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nemo. Consequuntur atque voluptate, quisquam accusamus aliquam quas voluptatibus eaque beatae pariatur maxime inventore animi ipsa odit, ad magni, veritatis facere! Sequi, ratione dolores animi veniam illo quas velit incidunt atque, perspiciatis optio aliquam dolorum inventore, voluptates praesentium hic quisquam? Voluptatum.
          				</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<ExpansionPanel>
								<ExpansionPanelSummary>
									<Typography className={classes.heading}>How do I update my interests?</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt excepturi magnam numquam adipisci architecto nemo nulla nisi, minima ullam modi libero obcaecati iure soluta sequi quo impedit, in at cum, porro eius ipsa fugit! Recusandae nostrum voluptatem, ducimus tenetur, eius vitae soluta iusto atque cumque inventore, minus repudiandae sapiente ipsum?
          				</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<ExpansionPanel>
								<ExpansionPanelSummary>
									<Typography className={classes.heading}>How do I find events for today?</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt excepturi magnam numquam adipisci architecto nemo nulla nisi, minima ullam modi libero obcaecati iure soluta sequi quo impedit, in at cum, porro eius ipsa fugit! Recusandae nostrum voluptatem, ducimus tenetur, eius vitae soluta iusto atque cumque inventore, minus repudiandae sapiente ipsum?
          				</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<ExpansionPanel>
								<ExpansionPanelSummary>
									<Typography className={classes.heading}>How do I save events for later?</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt excepturi magnam numquam adipisci architecto nemo nulla nisi, minima ullam modi libero obcaecati iure soluta sequi quo impedit, in at cum, porro eius ipsa fugit! Recusandae nostrum voluptatem, ducimus tenetur, eius vitae soluta iusto atque cumque inventore, minus repudiandae sapiente ipsum?
          				</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>

						</div>

					</Grid>
				</Grid>
			</div >
		)
	}
}

export default withStyles(styles)(Help);
