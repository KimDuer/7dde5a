import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
      height: "100%"
    },
    imgPanel: {
      minHeight: "800px",
      background: `linear-gradient(rgba(58, 141, 255, .8) 75%, rgba(58, 141, 255, .7)), url('bg-img.png')`,
      backgroundSize: "cover",
      flexDirection: "column",
      alignItems: "center"
    },
    panelContent: {
      height: "85%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    panelText: {
      color: "white",
      width: "75%",
      marginTop: "50px",
      maxWidth: "400px",
      textAlign: "center"
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
    formContainer: {
      width: "100%",
      height: "74%",
      minHeight: "500px",
      marginBottom: "60px"
    },
    form: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    formElement: {
      width: "100%",
      paddingBottom: "30px",
    },
    button1: {
      color: theme.palette.primary.main,
      backgroundColor: 'white',
      filter: "drop-shadow(0px 3px 2px #e3e7ea)",
      marginLeft: "30px"
    },
    button2: {
      color: "white",
      backgroundColor: theme.palette.primary.main,
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    }
  })
  )

const Login = ({ user, login }) => {
  const history = useHistory();
  const classes= useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid container className={classes.container}>
      <Grid container item md={5} className={classes.imgPanel}>
        <Grid className={classes.panelContent}>
          <img width="67px" height="67px" src="bubble.svg" alt="message bubble" />
          <Typography variant="h5" className={classes.panelText}>Converse with anyone with any language</Typography>
        </Grid>
      </Grid>
      <Grid container item md={7}>
        <Box width="100%">
          <Grid container item xs={11} md={12} className={classes.linkContainer}>
            <Typography variant="subtitle2" color="secondary">Don't have an account?</Typography>
            <Link href="/register" to="/register" className={classes.link}>
              <Button className={classes.button1}>Create account</Button>
            </Link>
          </Grid>
          <Grid container className={classes.formContainer}>
            <form onSubmit={handleLogin} className={classes.form}>
              <Grid item xs={8} md={8} lg={6}>
                <Typography variant="h4">Welcome back!</Typography>
                <Grid>
                  <FormControl margin="normal" required className={classes.formElement}>
                    <TextField
                      aria-label="username"
                      label="Username"
                      name="username"
                      type="text"
                    />
                  </FormControl>
                </Grid>
                <FormControl margin="normal" required className={classes.formElement}>
                  <TextField
                    label="Password"
                    aria-label="password"
                    type="password"
                    name="password"
                  />
                </FormControl>
                <Grid>
                  <Button type="submit" variant="contained" size="large" className={classes.button2}>
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
