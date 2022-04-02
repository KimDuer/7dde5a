import React from 'react'
import { Box, Typography } from '@material-ui/core';

const Bubble = ({ text, images, classes }) => {

    return (
        <>
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
        </>
    )
}

export default Bubble