import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';
import Navbar from './components/Navbar';
import AppRoutes from './main/AppRoutes';
import './App.css';


export default class App extends React.Component {

  render(){
    return (
      <div className="App">
       <Navbar/>
        <AppRoutes/> 
      </div>
    )
  }
}




