import React, {useEffect} from 'react';

import './App.css';

function App() {

  useEffect(()=> {document.title = "Night City OverLords"},[])

  return (
    <div className="App">
     
      <div className='menu'>
        <div className='logo'>
          Cycberpunk
          <div className='sublogo'>
            2077
          </div>
        </div>
        <ul>
          <li>Nigh City News</li>
          <li>Your Page</li>
          <li>Highest Bounty</li>
          <li>Saved</li>
          <li>Developers</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
