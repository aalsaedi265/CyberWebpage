import React, {useEffect} from 'react';
import MenuSelect from './modules/MenuSelect';
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
          <MenuSelect/>
        
      </div>
    </body>
    </>
  );
}

export default App;
