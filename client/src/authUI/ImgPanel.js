import React from 'react'
import {
    Grid,
    Typography,
  } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    imgPanel: {
        height: "100vh",
        minHeight: "750px",
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
      }
}))
const ImgPanel = () => {
    const classes = useStyles();
    return (
        <Grid container item md={5} className={classes.imgPanel}>
            <Grid className={classes.panelContent}>
                <img width="67px" height="67px" src="bubble.svg" alt="message bubble" />
                <Typography variant="h5" className={classes.panelText}>Converse with anyone with any language</Typography>
            </Grid>
        </Grid>
    )
}

export default ImgPanel