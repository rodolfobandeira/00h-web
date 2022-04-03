import { useState } from 'react';
import { TextField, Button, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContentResult from './ContentResult';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    paddingTop: theme.spacing(10)
  }
}));

function validateUrl(url: string) {
  const re = /^(ftp|http|https):\/\/[^ "]+$/;
  let response = { valid: true, text: "" }

  if (url.length < 7) {
    response = { valid: false, text: "Please enter a valid URL" }
    return response;
  }

  if (!re.test(String(url).toLowerCase())) {
    response = { valid: false, text: "Invalid URL. We only accept: ftp, http and https schemas" }
  }
  return response;
}


function CreateForm() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [responseError, setResponseError] = useState({ response: { statusText: ''}});
  const [errors, setErrors] = useState({ valid: true, text: '' });

  const classes = useStyles();

  return (
    <>
      <Container maxWidth="xl" className={classes.contentContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                let bodyFormData = new FormData();
                bodyFormData.append('url', url);

                setShortUrl("loading...");

                axios({
                  method: "post",
                  url: "https://00h.ca/new",
                  data: bodyFormData,
                  headers: { "Content-Type": "multipart/form-data" },
                }).then(function (res) {
                  setShortUrl(res.data);
                }).catch(function (error) {
                  setResponseError(error);
                });
              }}
            >
              <TextField
                onChange={(event) => {
                  console.log("setUrl: " + event.target.value)
                  setUrl(event.target.value);
                  const validateResponse = validateUrl(event.target.value);
                   setErrors(validateResponse);
                }}
                id="url"
                label="URL"
                error={!errors?.valid}
                helperText={errors?.text}
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
      <ContentResult
        shortUrl={shortUrl}
        responseError={responseError}
      />
    </>
  );
}

export default CreateForm;
