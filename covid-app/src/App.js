import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';

class App extends Component{
  
  render() {return (
    <div className="App">
      <nav>
        <NavBar></NavBar>
      </nav>
      <main>
      <Home></Home>
      </main>
      <footer>
        By Galen Emanuel 2020
      </footer>
    </div>
  )};
}

export default App;
