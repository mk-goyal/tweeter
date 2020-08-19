import React, { useState } from 'react';
import './App.css';
import Home from './components/home'
import Notification from './components/notification'
import Profile from './components/profile'
import IdProfile from './components/idprofile'
import Tweets from './components/tweets'
import Search from './components/search'
import Logo from './components/logo'
import NewTweet from './components/newTweet'

function App() {
  const [userData,setUserData] = useState(
    {
        name:'mukesh',
        bio: 'studies mechanical engineering at IIT KANPUR.',
        tweets: 7
})
  return (
    <div className="App">
      <div className="sidebar">
        <Logo/>
        <Home/>
        <Notification/>
        <Profile/>
        <NewTweet/>
      </div>
      <div className="main">
        <IdProfile userName={userData.name} bio={userData.bio} n={userData.tweets}/>
        <Tweets/>
      </div>
      <div className="rightSidebar">
        <Search/>
      </div>
    </div>
  );
}

export default App;
