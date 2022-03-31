import React from 'react'
import { Link } from 'react-router-dom';
import {
    Grid,
    Typography,
    Button,
  } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    linkContainer: {
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: "40px",
        marginTop: "30px",
        "@media (max-width: 430px)": {
          justifyContent: "center",
          flexDirection: "column",
          paddingRight: 0,
        }
      },
      link: {
        textDecoration: 'none'
      },
      button1: {
        color: theme.palette.primary.main,
        backgroundColor: 'white',
        width: "165px",
        filter: "drop-shadow(0px 3px 2px #e3e7ea)",
        marginLeft: "30px",
       "@media (max-width: 430px)": {
          marginLeft: 0
        } 
      },
      button2: {
        color: theme.palette.primary.main,
        backgroundColor: 'white',
        width: "140px",
        filter: "drop-shadow(0px 3px 2px #e3e7ea)",
        marginLeft: "30px",
        "@media (max-width: 430px)": {
          marginLeft: 0
        }
      },
}))

const UpdateFormView = ({ context }) => {
    const classes = useStyles();
    
    return (
        <Grid container item xs={12} md={12} className={classes.linkContainer}>
            <Typography variant="subtitle2" color="secondary">
                {context === 'login' ? 'Don\'t have an account?' : 'Already have an account?'}
            </Typography>
            <Link href={context === 'login' ? "/register" : "/login"} to={context === 'login' ? "/register" : "/login"} className={classes.link}>
              {context === 'login' ?
                <Button className={classes.button1}>Create account</Button>
              : <Button className={classes.button2}>Login</Button>
              }   
            </Link>
        </Grid>
    )
}

export default UpdateFormView