import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Bubble from './Bubble'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#91A3C0',
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
  },
  bubble: {
    background: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
    maxWidth: "300px"
  },
  imgWithText: {
    borderRadius: '10px 10px 0 0',
    width: '100%',
    height: 'auto'
  },
  imgNoText: {
    borderRadius: '10px 10px 0 10px',
    maxWidth: '300px'
  },
  imgsContainer: {
    maxWidth: '50%'
  },
  imgs: {
    borderRadius: '10px 10px 0 10px',
    width: '50%',
    height: 'auto',
    marginLeft: '10px',
    maxWidth: '150px',
    flexDirection: 'row'
  }
  
}));

const SenderBubble = ({ time, text, images = [] }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <Bubble text={text} images={images} classes={classes}/>
    </Box>
  );
};

export default SenderBubble;
