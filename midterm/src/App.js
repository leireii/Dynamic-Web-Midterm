import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// Styling
import './App.css';
// Components
import Header from './components/Header';
import Home from './pages/Home';


function App() {
  return (
    <div className="pageWrapper">
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
