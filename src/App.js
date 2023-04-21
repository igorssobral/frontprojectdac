import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';
import Navbar from './components/Navbar';
import AppRoutes from './main/AppRoutes';
import './App.css';

import SessionProvider from './main/SessionProvider';

import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min.js';

export default class App extends React.Component {

  render(){
    return (
      <div className="App">
        <SessionProvider>
         <Navbar/>
          <AppRoutes/> 
        </SessionProvider>

      </div>
    )
  }
}




