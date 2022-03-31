import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bubble: {
    backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
    borderRadius: '0 10px 10px 10px',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.2,
    padding: 8,
  },
  imgWithText: {
    borderRadius: '0 0 10px 10px',
    width: '100%',
    height: 'auto'
  },
  imgNoText: {
    borderRadius: '0 10px 10px 10px',
    maxWidth: '300px'
  },
  imgsContainer: {
    maxWidth: '50%'
  },
  imgs: {
    borderRadius: '0 10px 10px 10px',
    width: '50%',
    height: 'auto',
    marginLeft: '10px',
    maxWidth: '150px',
    flexDirection: 'row'
  }
}));

const OtherUserBubble = ({ text, time, otherUser, images }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        <Box className={classes.bubble}>
          {(images.length === 1 && text !== '') && <img src={images[0]} alt='user file' className={classes.imgWithText}/>}
          <Typography className={classes.text}>{text}</Typography>
        </Box>
        {(images.length === 1 && text === '') && <img src={images[0]} alt='user file' className={classes.imgNoText}/>}
        {images.length > 1 && 
          <Box className={classes.imgsContainer}>
            {images.map((image) => <img key={image} src={image} alt='user file' className={classes.imgs}/>)}
          </Box>  
        }
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
