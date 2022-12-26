import Navbar from "./components/Navbar";
import CreateForm from "./components/CreateForm";
import Footer from "./components/Footer";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const validateUrl = (url: string) => {
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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Navbar />
        <CreateForm />
      </Container>
    <Footer />
    </ThemeProvider>
  );
}

export default App;