import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router} from 'react-router-dom'

import theme from './theme';
import Routes from './Routes';

function App() {
  return (
    <div className="App">      
      <ThemeProvider theme={theme}>
        <Router>
          <Routes />
        </Router>     
      </ThemeProvider>
    </div>
  )}

export default App;
