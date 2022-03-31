import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Box
} from '@material-ui/core';
import ImgPanel from './ImgPanel'
import UpdateFormView from './UpdateFormView'
import Form from './Form'

const Login = ({ user, login }) => {
  const history = useHistory();

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
    <Grid container>
      <ImgPanel />
      <Grid container item md={7}>
        <Box width="100%">
          <UpdateFormView context='login' />
          <Form context='login' handleSubmit={handleLogin} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
