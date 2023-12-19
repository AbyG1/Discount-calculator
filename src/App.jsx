
import './App.css'
import Calculator from './Calculator.jsx';
import Header from './Header.jsx';
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFC31"
    },
    secondary: {
      main: "#494c7d"
    }
  }
});





function App() {
 
    return (
    <>
        <Header></Header>
        <ThemeProvider theme={theme}>
          <Calculator></Calculator>
        </ThemeProvider>
    </>
  );
}

export default App
