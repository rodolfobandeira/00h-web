import React from 'react';

import Navbar from "./components/Navbar";
import CreateForm from "./components/CreateForm";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const customTheme = createTheme({
  palette: {
    primary: {
      light: '#62727b',
      main: '#37474F',
      dark: '#102027',
      contrastText: '#fff',
    },
    secondary: {
      light: '#474f97',
      main: '#1a237e',
      dark: '#121858',
      contrastText: '#fff',
    },
  },
});


export const validateUrl = (url) => {
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


function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Container>
          <Navbar />
          <CreateForm />
        </Container>
      </ThemeProvider>
      <Footer {...customTheme} />
    </>
  );
}

export default App;
