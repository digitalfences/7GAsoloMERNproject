import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Edit from './components/Edit';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <NavBar>
            </NavBar>
          </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/edit/create"> 
            <Edit create/>
          </Route>
          <Route exact path="/edit/update"> 
            <Edit update/>
          </Route>
          <Route exact path="/edit/delete"> 
            <Edit delete/>
          </Route>
        </Switch>
      </main>
      <footer>
          By Galen Emanuel 2020
      </footer>
    </div>
  </Router >)
  };
}

export default App;
