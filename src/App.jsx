import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import Inputs from './Inputs';
import Card from './Components/Card'

class App extends Component{
  render(){
    return (
      <div>
        <NavBar />
        <Inputs />
        <Card />
      </div>  
    )
  }
};

export default App;
