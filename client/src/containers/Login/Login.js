// import React
import React, { Component } from 'react';
// Import Material UI components, styling, etc.
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;

    return (
      <div className="main-content-section">
        <Grid container spacing={16}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="display1">
              Welcome to EDU To Do
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <form onSubmit={this.onSubmit}>
              <Typography variant="display1">
                <i className="fas fa-lock" />
                LOGIN
              </Typography>
              <TextField
                id="email"
                label="Email"
                className={classes.textField}
                value={email}
                onChange={this.onChange}
                margin="normal"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="password"
                label="Password"
                className={classes.textField}
                value={password}
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
    );
  }
}

export default Login;
