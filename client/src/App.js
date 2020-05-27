import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/NavBar/NavBar';
import Saved from './pages/Saved';
import Search from './pages/Search';


const theme = createMuiTheme({
  palette: {
    primary:{ 
      main: "#8d6e63"
  },
  secondary:{
    main: '#4caf50'
  }
}
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
