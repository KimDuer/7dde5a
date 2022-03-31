import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Box
} from '@material-ui/core';
import ImgPanel from './ImgPanel'
import UpdateFormView from './UpdateFormView'
import Form from './Form'

const Signup = ({ user, register }) => {
  const history = useHistory();
  const [formErrorMessage, setFormErrorMessage] = useState({});

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
    <Grid container>
      <ImgPanel />
      <Grid container item md={7}>
        <Box width="100%">
          <UpdateFormView context='signup' />
          <Form context='signup' handleSubmit={handleRegister} formErrorMessage={formErrorMessage} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
