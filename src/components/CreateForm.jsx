import React, { useState } from 'react';
import { TextField, Button, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContentResult from './ContentResult';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  contentContainer: {
    paddingTop: theme.spacing(10)
  }
}));



function CreateForm({ onProcess, validateUrl }) {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [responseError, setResponseError] = useState("");
  const [errors, setErrors] = useState({
    url: { valid: true, text: "" }
  });

  const classes = useStyles();

  return (
    <>
      <Container maxWidth="xl" className={classes.contentContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <form
              onSubmit={(event) => {
                event.preventDefault();

                console.log("Start processing form POST...");
                const apiProvider = axios.create({
                  baseURL: 'https://00h.ca',
                  headers: { 'X-Custom-Header': '00h WebApp v0.1 beta' }
                });

                console.log("Posting at api/v1/");
                apiProvider.post('/api/v1/new', {
                  url: url
                }).then((res) => {
                  setShortUrl(res);
                  console.log("API Response: " + res);

                }, (error) => {
                  console.log("API Error: " + error);
                  setResponseError(error);
                });

              }}
            >
              <TextField
                onChange={(event) => {
                  setUrl(event.target.value);
                  const validation = validateUrl(event.target.value);
                  setErrors({ url: validation });
                }}
                id="url"
                label="URL"
                error={!errors.url.valid}
                helperText={errors.url.text}
                variant="outlined"
                margin="normal"
                fullWidth
              />

              <Button variant="contained" color="primary" type="submit">
                Create short URL
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
      <ContentResult shortUrl={shortUrl} responseError={responseError} />
    </>
  );
}

export default CreateForm;
