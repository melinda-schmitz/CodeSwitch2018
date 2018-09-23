// import React
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
// import placeholder profile pic
import profilePic from '../../images/profilepic.png';
// import Firebase
import firebase from '../../firebase-config';
import '../Profile/Profile.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const styles = {
	profileInfo: {
		marginTop: 30
	},
	profilePic: {
		borderRadius: '50%',
		maxWidth: '100%',
		marginLeft: '10px',
		width: '200px',
		height: '200px',
		borderColor: 'var(--main-bg-color)',
		borderStyle: 'solid',
		borderWidth: 3
	},
	btnText: {
		marginLeft: 10
	},
	textField: {
		marginTop: 30
	}
};

class Profile extends Component {
	state = {
		AfricanAmerican: false,
		AsianAmerican: false,
		LatinAmerican: false,
		ArabAmerican: false,
		EuropeanAmerican: false,
		MultiCultural: false,
		preferencesRef: firebase.database().ref('preferences')
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		});
	};

	handleCulturalChange = name => event => {
		this.setState({ [name]: event.target.checked });
	};

	// Save preferences to firebase
	savePreference = (
		AfricanAmerican,
		AsianAmerican,
		LatinAmerican,
		ArabAmerican,
		EuropeanAmerican,
		MultiCultural
	) => {
		const { preferencesRef } = this.state;
		const newPreferenceRef = preferencesRef.push();
		newPreferenceRef.set({
			AfricanAmerican,
			AsianAmerican,
			LatinAmerican,
			ArabAmerican,
			EuropeanAmerican
		});
	};

	// On click handler for when user trys to submit story form
	handleStorySubmit = event => {
		// Prevent the form from submitting itself.
		event.preventDefault();
		// ES6 destructuring
		const {
			AfricanAmerican,
			AsianAmerican,
			LatinAmerican,
			ArabAmerican,
			EuropeanAmerican,
			MultiCultural
		} = this.state;

		const { user } = this.props;

		// Save preferences to backend database if form is filled out.
		// Save preference
		this.savePreference(
			AfricanAmerican,
			AsianAmerican,
			LatinAmerican,
			ArabAmerican,
			EuropeanAmerican,
			MultiCultural
		);
		// this.setState({
		// 	formSuccess: 'Story posted successfully!',
		// 	formSuccessMessageClass: 'form-success-message',
		// 	title: '',
		// 	story: '',
		// 	titleError: '',
		// 	storyError: '',
		// });
	};

	render() {
		const { classes, name, photo, uid, email, number } = this.props;
		const {
			AfricanAmerican,
			AsianAmerican,
			LatinAmerican,
			ArabAmerican,
			EuropeanAmerican,
			MultiCultural
		} = this.state;
		console.log(this.props);

		return (
			<div>
				<div className="main-content-section">
					<h1>My Profile</h1>
					<Grid container spacing={16}>
						<Grid item xs={12} sm={12} md={4}>
							<img
								src={photo}
								alt="profile pic"
								className={classes.profilePic}
							/>
						</Grid>
						<Grid item xs={12} sm={12} md={8}>
							<form>
								<div className="section">
									<h2>About Me</h2>
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
									<TextField
										id="outlined-name"
										label="Phone Number"
										className={classes.textField}
										value={number}
										margin="normal"
										variant="outlined"
										fullWidth
									/>
								</div>
								<div className="section">
									<h2>About My Family</h2>
									<div className="child">
										<TextField
											id="outlined-name"
											label="Child's Name"
											className={classes.textField}
											value="Kelvin"
											margin="normal"
											variant="outlined"
											fullWidth
										/>
										<TextField
											id="outlined-name"
											label="Child's Grade"
											className={classes.textField}
											value="2"
											margin="normal"
											variant="outlined"
											fullWidth
										/>
										<TextField
											id="outlined-name"
											label="Child's Gender"
											className={classes.textField}
											value="Boy"
											margin="normal"
											variant="outlined"
											fullWidth
										/>
									</div>

									<Button
										variant="contained"
										size="large"
										className="app-btn floatRight"
									>
										<i className="fas fa-user-plus" />
										<span className={classes.btnText} />
									</Button>
								</div>
								<div className="section">
									<h2>My Event Interests</h2>
									<div class="flex-grid-thirds">
										<div className="col">
											<b>Event Types:</b>
											<br />
											<Checkbox
												defaultChecked
												color="default"
												value="checkedG"
											/>{' '}
											Arts and Crafts
                      <br />
											<Checkbox color="default" value="checkedG" /> Career
                      Exploration
                      <br />
											<Checkbox color="default" value="checkedG" /> Fun and
                      Games
                      <br />
											<Checkbox
												defaultChecked
												color="default"
												value="checkedG"
											/>{' '}
											Educational
                      <br />
											<Checkbox color="default" value="checkedG" /> Science and
                      Math
                      <br />
											<Checkbox color="default" value="checkedG" /> Technology
                    </div>
										<div className="col">
											<b>Grade:</b>
											<br />
											<Checkbox
												defaultChecked
												color="default"
												value="checkedG"
											/>{' '}
											K - 2<br />
											<Checkbox color="default" value="checkedG" /> 3 - 5<br />
											<Checkbox color="default" value="checkedG" /> 6 - 8<br />
											<Checkbox color="default" value="checkedG" /> 9 - 13
                    </div>
										<div className="col">
											<b>Cost:</b>
											<br />
											<Checkbox
												defaultChecked
												color="default"
												value="checkedG"
											/>{' '}
											Free
                      <br />
											<Checkbox color="default" value="checkedG" /> Under $20
                      <br />
											<Checkbox color="default" value="checkedG" /> $20 -$50
                    </div>
									</div>
									<div class="flex-grid">
										<div className="col">
											<b>Parental Requirement:</b>
											<br />
											<Checkbox
												defaultChecked
												color="default"
												value="checkedG"
											/>{' '}
											All Family
                      <br />
											<Checkbox color="default" value="checkedG" /> Kids with a
                      parent
                    </div>
										<div className="col">
											<b>Location</b>
											<br />
											<TextField
												id="outlined-name"
												label="Zip Code"
												className={classes.textField}
												value="55106"
												margin="normal"
												variant="outlined"
											/><br />
											<InputLabel htmlFor="miles">Miles</InputLabel>
											<Select
												value={this.state.age}
												onChange={this.handleChange}
												inputProps={{
													name: 'miles',
													id: 'miles'
												}}
											>
												<MenuItem value="">
													<em>None</em>
												</MenuItem>
												<MenuItem value={10}>10</MenuItem>
												<MenuItem value={20}>20</MenuItem>
												<MenuItem value={30}>30</MenuItem>
											</Select>
										</div>
									</div>
								</div>
								<Button
									variant="contained"
									color="primary"
									size="large"
									className="app-btn"
									onClick={this.handlePreferenceSubmit}
								>
									<i className="fas fa-check" />
									<span className={classes.btnText}> Save</span>
								</Button>
							</form>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Profile);
