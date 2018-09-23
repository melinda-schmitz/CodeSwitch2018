// Import React
import React, { Component } from 'react';
// Importing React Router to add page routes.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Import App css file
import './App.css';
// Import Events page
import Events from './containers/Events';
// Import Profile page
import Profile from './containers/Profile';
// Import Add Event page
import AddEvent from './containers/AddEvent';
// Import Login page
import Login from './containers/Login';
// Import Landing page
import Landing from './containers/Landing';
// Import Foooter component
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Firebase
import { auth, provider } from './firebase-config';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	card: {
		minWidth: 275,
		marginTop: 50,
		borderSize: 5,
		borderStyle: 'solid',
		borderWidth: 3,
		borderColor: 'var(--app-secondary-color)',
	},
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: null,
		};

		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}

	componentDidMount() {
		// When the user signs in, this checks the Firebase database to see
		// if they were already previously authenticated.
		// If they were, we set their user details back into the state.
		auth.onAuthStateChanged((user) => {
			if (user) {
				this.setState({ user });
			}
		});
	}

	// Handles authentication with firebase.
	// Here we call the signInWithPopup method from the auth module,
	// and pass in our provider (remember this refers to the Google Auth Provider).
	// Now, when you click the 'login' button, it will trigger a popup
	// that gives us the option to sign in with a Google account
	// signInWithPopup has a promise API that allows us to call
	// .then on it and pass in a callback.
	// This callback will be provided with a result object that contains,
	// among other things, a property called .user that has all the
	// information about the user who has just successfully signed in
	// including their name and user photo. We then store this inside of the state using setState.
	login() {
		auth.signInWithPopup(provider)
			.then((result) => {
				// console.log(result);
				const user = result.user;
				this.setState({
					user,
				});
			});
	}

	// We call the signOut method on auth,
	// and then using the Promise API
	// we remove the user from our application's state.
	// With this.state.user now equal to null,
	// the user will see the Log In button instead of the Log Out button.
	logout() {
		auth.signOut()
			.then(() => {
				this.setState({
					user: null,
				});
			});
	}

	render() {
		const { user } = this.state;
		const { classes } = this.props;
		console.log(user);
		return (<div className="App">
			<Router>
				<div className="entire-page">
					{user
						? (
							<div>
								<NavBar name={user.displayName || user.email} photo={user.photoURL} handleLogout={this.logout} />
								<div className="main-content-section">
									<Switch>
										<Route exact path="/" component={Landing} />
										<Route exact path="/events" component={Events} />
										<Route exact path="/profile" render={props => <Profile
											{...props} name={user.displayName} email={user.email} photo={user.photoURL} uid={user.uid}></Profile>} />
										<Route exact path="/add" component={AddEvent} />
										<Route exact path="/login" component={Login} />
									</Switch>
								</div>
							</div>
						)
						: (
							<div className="main-content-section">
								<Grid container spacing={16} justify="center" className="login-page">
									<Grid item xs={12} sm={12} md={6}>
										<Typography variant="display1" className="app-title">
											Welcome to EduEvents
            				</Typography>
										<Card className={classes.card}>
											<CardContent>
												<Typography variant="display1">
													LOGIN
            					</Typography>
												<Typography variant="p" className="sub-title">
													Log in to find fun, educational activities and events to do with your kids.
            					</Typography>
												<div className="login">
													<p>Login with Google to continue to site.</p>
													<button type="submit" className="loginBtn loginBtn--google" onClick={this.login}>
														Login with Google
                      </button>
												</div>
											</CardContent>
										</Card>
									</Grid>
								</Grid>
							</div >
						)}
					<Footer />
				</div>
			</Router>
		</div>
		);
	}
}


export default withStyles(styles)(App);
