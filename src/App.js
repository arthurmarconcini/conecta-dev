import { ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/Home/Index';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">      
        <Home></Home>
      </div>
    </ThemeProvider>  
    );
}

export default App;
