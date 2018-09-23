// import React
import React, { Component } from 'react'
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
		AfricanAmerican: false,
		AsianAmerican: false,
		LatinAmerican: false,
		ArabAmerican: false,
		EuropeanAmerican: false,
		MultiCultural: false,
		preferencesRef: firebase.database().ref('preferences'),
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	handleCulturalChange = name => event => {
		this.setState({ [name]: event.target.checked });
	};

	// Save preferences to firebase
	savePreference = (AfricanAmerican, AsianAmerican, LatinAmerican, ArabAmerican, EuropeanAmerican, MultiCultural) => {
		const { preferencesRef } = this.state;
		const newPreferenceRef = preferencesRef.push();
		newPreferenceRef.set({
			AfricanAmerican,
			AsianAmerican,
			LatinAmerican,
			ArabAmerican,
			EuropeanAmerican,
		});
	}

	// On click handler for when user trys to submit story form
	handleStorySubmit = (event) => {
		// Prevent the form from submitting itself.
		event.preventDefault();
		// ES6 destructuring
		const {
			AfricanAmerican, AsianAmerican, LatinAmerican, ArabAmerican, EuropeanAmerican, MultiCultural
		} = this.state;

		const { user } = this.props;

		// Save preferences to backend database if form is filled out.
		// Save preference
		this.savePreference(AfricanAmerican, AsianAmerican, LatinAmerican, ArabAmerican, EuropeanAmerican, MultiCultural);
		// this.setState({
		// 	formSuccess: 'Story posted successfully!',
		// 	formSuccessMessageClass: 'form-success-message',
		// 	title: '',
		// 	story: '',
		// 	titleError: '',
		// 	storyError: '',
		// });
	}

	render() {
		const { classes, name, photo, uid, email } = this.props;
		const { AfricanAmerican, AsianAmerican, LatinAmerican, ArabAmerican, EuropeanAmerican, MultiCultural } = this.state;
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
							<form>
								<Button variant="contained" color="primary" size="large" className="app-btn" onClick={this.handlePreferenceSubmit}><i className="fas fa-check"></i><span className={classes.btnText}> Save</span></Button>
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
								<FormGroup className={classes.textField}>
									<FormLabel component="legend">Type of activities you are currently looking for</FormLabel>
									<FormControlLabel
										control={
											<Checkbox checked={AfricanAmerican} onChange={this.handleCulturalChange('AfricanAmerican')} value="African American" />
										}
										label="African American"
									/>
									<FormControlLabel
										control={
											<Checkbox checked={AsianAmerican} onChange={this.handleCulturalChange('AsianAmerican')} value="AsianAmerican" />
										}
										label="Asian American"
									/>
									<FormControlLabel
										control={
											<Checkbox
												checked={LatinAmerican}
												onChange={this.handleCulturalChange('LatinAmerican')}
												value="LatinAmerican"
											/>
										}
										label="Latin American"
									/>
									<FormControlLabel
										control={
											<Checkbox
												checked={ArabAmerican}
												onChange={this.handleCulturalChange('ArabAmerican')}
												value="ArabAmerican"
											/>
										}
										label="Arab American"
									/>
									<FormControlLabel
										control={
											<Checkbox
												checked={EuropeanAmerican}
												onChange={this.handleCulturalChange('EuropeanAmerican')}
												value="EuropeanAmerican"
											/>
										}
										label="European American"
									/>
									<FormControlLabel
										control={
											<Checkbox
												checked={MultiCultural}
												onChange={this.handleCulturalChange('MultiCultural')}
												value="MultiCultural"
											/>
										}
										label="Multi Cultural"
									/>
								</FormGroup>
							</form>
						</Grid>
					</Grid>
				</div >
			</div>
		)
	}
}

export default withStyles(styles)(Profile);