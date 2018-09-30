// import React
import React, { Component } from 'react';
// import prop types
import PropTypes from 'prop-types';
// Import Material UI components, styling, etc.
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
// import Logo
import logo from '../../images/edue_logo.png';

const styles = {
  card: {
    minWidth: 275,
    marginTop: 50,
    borderSize: 5,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'var(--main-bg-color)',
  },
};

class Login extends Component {
  // onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { classes, handleLogin } = this.props;

    return (
      <div className="main-content-section">
        <Grid container spacing={16} justify="center" className="login-page">
          <Grid item xs={12} sm={12} md={6}>
            <img src={logo} alt="team logo" className="logo" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="display1" className="app-title">
              Welcome to EduVents
            </Typography>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="display1">
                  LOGIN
                </Typography>
                <Typography variant="body1" className="sub-title">
                  Log in to find fun, educational activities and
                  events to do with your kids.
                </Typography>
                <div className="login">
                  <p>Login with Google to continue to site.</p>
                  <button type="submit" className="loginBtn loginBtn--google" onClick={handleLogin}>
                    Login with Google
                  </button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default withStyles(styles)(Login);
