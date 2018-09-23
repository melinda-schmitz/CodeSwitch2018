// import React
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import placeholder profile pic
import profilePic from '../../images/profilepic.png';

const styles = {
	profileInfo: {
		marginTop: 30,
	},
	profilePic: {
		borderRadius: '50%',
		maxWidth: '100%',
		marginLeft: '10px',
		width: '200px',
		height: '200px',
		borderColor: 'var(--main-bg-color)',
		borderStyle: 'solid',
		borderWidth: 3,

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
		const { classes, name, photo, uid, email } = this.props;
		console.log(this.props);

		return (
			<div>
				<div className="main-content-section">
					<h1>User: {name}</h1>
					<Grid container spacing={16}>
						<Grid item xs={12} sm={12} md={4}>
							<img src={photo} alt="profile pic" className={classes.profilePic} />
						</Grid>
						<Grid item xs={12} sm={12} md={8}>
							<h1>{name}</h1>
							<h3>{email}</h3>
						</Grid>
					</Grid>
					<Grid container spacing={16}>
						<Grid item xs={12} sm={12} md={4}>
						</Grid>
						<Grid item xs={12} sm={12} md={8}>
							<Button variant="contained" color="primary" size="large" className="app-btn" ><i className="fas fa-check"></i><span className={classes.btnText}> Save</span></Button>
							<TextField
								id="outlined-name"
								label="User id"
								className={classes.textField}
								value={uid}
								margin="normal"
								variant="outlined"
								fullWidth
								disabled
							/>
							<TextField
								id="outlined-name"
								label="Full Name"
								className={classes.textField}
								value={name}
								margin="normal"
								variant="outlined"
								fullWidth
								disabled
							/>
							<TextField
								id="outlined-name"
								label="Email"
								className={classes.textField}
								value={email}
								margin="normal"
								variant="outlined"
								fullWidth
								disabled
							/>
						</Grid>
					</Grid>
				</div >
			</div>
		)
	}
}

export default withStyles(styles)(Profile);