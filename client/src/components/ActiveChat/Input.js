import React, { useState } from 'react';
import { FormControl, FilledInput, IconButton, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
  },
  imgInput: {
    cursor: 'pointer'
  }
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
    };
    await postMessage(reqBody);
    setText('');
  };
  const onImageSelect = async (e) => {
    const files = e.target.files;
    const imageURLs = []
    for (const file of files) {
      imageURLs.push(URL.createObjectURL(file))
    }
    imageURLs.forEach((file) => uploadFile(file))
  }

  const uploadFile = async (file) => {
    const url = "https://api.cloudinary.com/v1_1/kimcodesjs/image/upload";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "hatchways");
    const { data } = await axios.post(url, formData)
    .catch(err => console.log(`Error: ${err}`))
    console.log(data)
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <label htmlFor="raised-button-file">
                <IconButton component="span" className={classes.imgInput}>
                    <img src="photo_library_black_24dp.svg" alt="upload"/>
                </IconButton>
              </label>
            </InputAdornment>
          }
        />
      </FormControl>
      <input
        accept="image/*"
        className={classes.input}
        style={{ display: 'none' }}
        id="raised-button-file"
        multiple
        type="file"
        onChange={onImageSelect}
      />
    </form>
  );
};

export default Input;
