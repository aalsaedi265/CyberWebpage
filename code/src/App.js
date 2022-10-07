import React, {useEffect} from 'react';

import './App.css';

function App() {

  useEffect(()=> {document.title = "Night City OverLords"},[])

  return (
    <>
    <body className="App">
     
      <div className='menu'>
        <div className='logo'>
          CYCBERPUNKS singularity
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
    </body>
    </>
  );
}

export default App;
