import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%"
  },
  imgPanel: {
    background: `linear-gradient(rgba(58, 141, 255, .8) 60%, transparent), url('bg-img.png')`,
    backgroundSize: "cover",
    flexDirection: "column",
    alignItems: "center"
  },
  panelText: {
    color: "white",
    width: "75%",
    marginTop: "50px",
    maxWidth: "400px",
    paddingBottom: "30px"
  },
  linkContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: "40px",
    marginTop: "30px"
  },
  link: {
    textDecoration: 'none'
  },
  button1: {
    color: theme.palette.primary.main,
    backgroundColor: 'white',
    filter: "drop-shadow(1px 2px 2px lightgray)",
    marginLeft: "20px"
  },
  button2: {
    color: "white",
    backgroundColor: theme.palette.primary.main
  }
}))

const Signup = ({ user, register }) => {
  const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState({});
  const classes = useStyles();

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid container className={classes.container}>
      <Grid container item md={5} justifyContent="center" align="center" className={classes.imgPanel}>
        <img width="67px" height="67px" src="bubble.svg" alt="message bubble" />
        <Typography variant="h4" md="1" className={classes.panelText}>Converse with anyone with any language</Typography>
      </Grid>
      <Grid container item justifyContent="center" md={7}>
        <Box width="100%">
          <Grid container item className={classes.linkContainer}> 
            <Typography variant="subtitle2" color="secondary">Already have an account?</Typography>
            <Link href="/login" to="/login" className={classes.link}>
              <Button className={classes.button1}>Login</Button>
            </Link>
          </Grid>
          <form onSubmit={handleRegister}>
            <Grid>
              <Typography variant="h5">Create an account.</Typography>
              <Grid>
                <FormControl>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl>
                  <TextField
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid>
                <FormControl error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid>
                <FormControl error={!!formErrorMessage.confirmPassword}>
                  <TextField
                    label="Confirm Password"
                    aria-label="confirm password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="confirmPassword"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Button type="submit" variant="contained" size="large" className={classes.button2} >
                Create
              </Button>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
