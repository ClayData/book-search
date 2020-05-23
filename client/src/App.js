import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Saved from './pages/Saved';
import Search from './pages/Search'
import SignIn from './pages/SignIn';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <Route exact path="/" component={SignIn} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;
