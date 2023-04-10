import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';
import Navbar from './components/Navbar';
import AppRoutes from './main/AppRoutes';
import './App.css';

function App() {

    return (
      <div className="App">
       <Navbar/>
        <AppRoutes/> 
      </div>
    );
  }


export default App;


