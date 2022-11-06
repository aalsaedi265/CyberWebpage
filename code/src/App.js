import React, {useEffect} from 'react';
import MenuSelect from './modules/MenuSelect';
import {Route,Routes} from 'react-router-dom';

import NighCityNews from './modules/news_feed/NightCityNews';
import TopHunter from './modules/Top_hunters';
import TopHacker from './modules/Top_hackers';
import PastConversation from './modules/Past_convo'
import MyProfile from './modules/MyProfile'

import './App.css';

function App() {

  useEffect(()=> {document.title = "Night City OverLords"},[])

  return (
    
    <body className="App">
     
      <div className='menu'>
        <div className='logo'>
          Night City OverLords
          <div className='sublogo'>
            #1 Cycberpunk Forum
          </div>
        </div>
          <MenuSelect/>
          <Routes>
            <Route exact path = '/'  />
            <Route exact path= 'nighcity_news' element={<NighCityNews/>}/>
            <Route exact path = "personal_page" element={<MyProfile/>}/>
            <Route exact path ='most_dependable_people' element={<TopHunter/> } />
            <Route exact path = 'best_hackers' element={<TopHacker/>} />
            <Route exact path = 'conversation_log' element = {<PastConversation/>}/>
          </Routes>
      </div>
    </body>
    
  );
}

export default App;
