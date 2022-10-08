import React, {useEffect} from 'react';
import {Route,Routes} from 'react-router-dom';


import './App.css';

function App() {

  useEffect(()=> {document.title = "Night City OverLords"},[])

  return (
    <>
    <body className="App">
     
      <div className='menu'>
        <div className='logo'>
          Night City OverLords
          <div className='sublogo'>
            #1 Cycberpunk Forum
          </div>
        </div>
       
        <ul>
        
          <li>Nigh City News </li>
          <li>Your Page</li>
          <li>Best Around </li>
          <li>Past Convos</li>
          <li>NetRunners</li>
         
        </ul>
        
      </div>
    </body>
    </>
  );
}

export default App;
