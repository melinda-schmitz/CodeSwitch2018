// import React
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

class Login extends Component {
	state = {
		email: '',
		password: '',
	};

	// onSubmit = e => {
	// 	e.preventDefault();

	// 	const { firebase, notifyUser } = this.props;
	// 	const { email, password } = this.state;

	// 	firebase.login({
	// 		email,
	// 		password
	// 	}).catch(err => notifyUser('Invalid Login Credentials', 'error'));
	// };

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { classes } = this.props;

		return (
			<div className="main-content-section">
				<Grid container spacing={16} justify="center">
					<Grid item xs={12} justify="center">
						<Typography variant="display1">
							<i className="fas fa-lock"></i> LOGIN
            </Typography>
					</Grid>
					<Grid>
						<form onSubmit={this.onSubmit}>
							<TextField
								id="outlined-name"
								label="Email"
								className={classes.textField}
								value={this.state.email}
								onChange={this.onChange}
								margin="normal"
								variant="outlined"
								fullWidth
							/>
							<TextField
								id="outlined-name"
								label="Password"
								className={classes.textField}
								value={this.state.password}
								onChange={this.onChange}
								type="password"
								margin="normal"
								variant="outlined"
								fullWidth
							/>
							<Button variant="contained" color="primary" size="large" className="app-btn">Login</Button>
						</form>
					</Grid>
				</Grid>
			</div>
		)
	}
}

export default withStyles(styles)(Login);

