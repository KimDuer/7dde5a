import React from 'react';
import {
  Grid,
  Typography,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  InputAdornment
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formContainer: {
        width: "100%",
        height: "80%",
        minHeight: "500px",
        marginBottom: "60px"
      },
      form: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      formElement: {
        width: "100%",
        paddingBottom: "20px",
      },
      adornment: {
        color: theme.palette.primary.main
      },
      button: {
        color: "white",
        backgroundColor: theme.palette.primary.main,
        width: "165px",
        display: "block",
        marginTop: "15px",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: "16px",
      }
}))

const Form = ({ context, handleSubmit, formErrorMessage }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.formContainer}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <Grid item xs={8} md={8} lg={6}>
                    <Typography variant="h4">{context === 'login' ? 'Welcome back!' : 'Create an account.'}</Typography>
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
                    {context === 'login' && 
                        <Grid>
                            <FormControl margin="normal" required className={classes.formElement}>
                                <TextField
                                    label="Password"
                                    aria-label="password"
                                    type="password"
                                    name="password"
                                    InputProps={{endAdornment: <InputAdornment position="end" className={classes.adornment}>Forgot?</InputAdornment>}}
                                    
                                />
                            </FormControl>
                        </Grid>
                    }
                    
                    {context === 'signup' &&
                        <>
                            <Grid>
                                <FormControl margin="normal" className={classes.formElement} error={!!formErrorMessage.confirmPassword}>
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
                                <FormControl margin="normal" className={classes.formElement} error={!!formErrorMessage.confirmPassword}>
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
                      </>
                    }
                    <Grid>
                        <Button type="submit" variant="contained" size="large" className={classes.button}>
                            {context === 'login' ? 'Login' : 'Create'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}

export default Form