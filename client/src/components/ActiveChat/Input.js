import React, { useState } from 'react';
import { FormControl, FilledInput, IconButton, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  }
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [images, setImages] = useState([])

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
      attachments: images
    };
    await postMessage(reqBody);
    setText('');
    setImages([]);
  };
  const onImageSelect = async (e) => {
    const files = e.target.files;
    for (const file of files) {
      let cloudURL = await uploadFile(file);
      setImages((prev) => [cloudURL, ...prev])
    }
  }

  const uploadFile = async (file) => {
    const url = "https://api.cloudinary.com/v1_1/kimcodesjs/image/upload";
    
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "hatchways");
    
    return fetch(url, {
      method: "POST",
      body: formData
    })
    .then((response) => { 
      return response.json().then((data) => {
          return data.url;
      }).catch((err) => {
          console.log(err);
      }) 
    });
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
                <IconButton component="span">
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
