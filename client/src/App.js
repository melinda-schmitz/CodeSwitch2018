// Import React
import React, { Component } from 'react';
// Importing React Router to add page routes.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
// Import Help page
import Help from './containers/Help';
// Import Footer component
import Footer from './components/Footer';
// Import Event Details component
import EventDetails from './containers/EventDetails/EventDetails';
// import NavBar component
import NavBar from './components/NavBar';
// import Firebase
import { auth, provider } from './firebase-config';
// Import App css file
import './App.css';

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
    // console.log(user);
    return (<div className="App">
      <Router>
        <div className="entire-page">
          {user
            ? (
              <div>
                <NavBar
                  name={user.displayName || user.email}
                  photo={user.photoURL}
                  handleLogout={this.logout}
                />
                <div className="main-content-section">
                  <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/events" component={Events} />
                    <Route
                      exact
                      path="/profile"
                      render={props => (
                        <Profile
                          {...props}
                          name={user.displayName}
                          email={user.email}
                          photo={user.photoURL}
                          uid={user.uid}
                        />
                      )}
                    />
                    <Route exact path="/add" component={AddEvent} />
                    <Route exact path="/help" component={Help} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/add" component={AddEvent} />
                    <Route exact path="/eventDetails" component={EventDetails} />
                  </Switch>
                </div>
              </div>
            )
            : (
              <Login handleLogin={this.login} />
            )}
          <Footer />
        </div>
      </Router>
    </div>
    );
  }
}


export default App;
