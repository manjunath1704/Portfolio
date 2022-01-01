import { ThemeProvider } from 'styled-components';
import { Footer, Navbar } from './components';
import GlobalStyles from './GlobalStyles';
import theme from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Footer />
    </ThemeProvider>
  );
}

export default App;