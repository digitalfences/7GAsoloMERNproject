import React, {Component} from 'react';
import './App.css';
import {Route , Link} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <nav>
        <Link className = "link" to="/"><h1>Home</h1></Link>
        <Link className = "link" to="/about"><h1>About</h1></Link>
        <Link className = "link" to="/docs"><h1>Docs</h1></Link>
      </nav> 
      <main>
        <Route path="/" exact render=""/>
        <Route path="/about" render=""/>
        <Route path="/docs" render=""/> 
      </main>
      <footer>
        By Galen Emanuel 2020
      </footer>
    </div>
  );
}

export default App;
