// import React
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import placeholder profile pic
import profilePic from '../../images/profilepic.png';

const styles = {
	profileInfo: {
		marginTop: 30,
	},
	profilePic: {
		width: '200px',
		height: '200px',
	},
	btnText: {
		marginLeft: 10,
	},
	textField: {
		marginTop: 30,
	},
};

class Profile extends Component {
	state = {
		name: 'John',
		email: 'john@example.com',
		password: '********',
		fullName: 'John Doe',
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	render() {
		const { classes } = this.props;

		return (
			<div className="main-content-section">
				<h1>User: john</h1>
				<Grid container spacing={16}>
					<Grid item xs={12} sm={12} md={4}>
						<img src={profilePic} alt="profile pic" className={classes.profilePic} />
					</Grid>
					<Grid item xs={12} sm={12} md={8}>
						<h1>John Doe</h1>
						<h3>john@example.com</h3>
					</Grid>
				</Grid>
				<Grid container spacing={16}>
					<Grid item xs={12} sm={12} md={4}>
					</Grid>
					<Grid item xs={12} sm={12} md={8}>
						<Button variant="contained" color="primary" size="large" className="app-btn" ><i className="fas fa-check"></i><span className={classes.btnText}> Save</span></Button>
						<TextField
							id="outlined-name"
							label="Username"
							className={classes.textField}
							value={this.state.name}
							onChange={this.handleChange('name')}
							margin="normal"
							variant="outlined"
							fullWidth
						/>
						<TextField
							id="outlined-name"
							label="Email"
							className={classes.textField}
							value={this.state.email}
							onChange={this.handleChange('email')}
							margin="normal"
							variant="outlined"
							fullWidth
						/>
						<TextField
							id="outlined-name"
							label="Password"
							className={classes.textField}
							value={this.state.password}
							onChange={this.handleChange('password')}
							margin="normal"
							variant="outlined"
							fullWidth
						/>
						<TextField
							id="outlined-name"
							label="Full Name"
							className={classes.textField}
							value={this.state.fullName}
							onChange={this.handleChange('fullName')}
							margin="normal"
							variant="outlined"
							fullWidth
						/>
					</Grid>
				</Grid>
			</div >
		)
	}
}

export default withStyles(styles)(Profile);