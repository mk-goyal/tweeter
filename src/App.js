import React, { useState } from 'react';
import './App.css';
import './components/tweet.css';
import Home from './components/home'
import Notification from './components/notification'
import Profile from './components/profile'
import IdProfile from './components/idprofile'
import Tweets from './components/tweets'
import Search from './components/search'
import Logo from './components/logo'
import NewTweet from './components/newTweet'

function App() {
  const [userData,setUserData] = useState({
    user : {
        name:'mukesh',
        bio: 'studies mechanical engineering at IIT KANPUR.',
        tweets: 7,
        tweet:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Id reiciendis quos qui dolores, iste saepe temporibus magni consectetur aspernatur praesentium quidem numquam,laudantium ipsum repellendus pariatur ullam atque quibusdam autem!'
          }
    
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
                <IdProfile userName={userData.user.name} bio={userData.user.bio} n={userData.user.tweets}/>
                <Tweets tweet={userData.user.tweet}/>
              </div>
              <div className="rightSidebar">
                <Search/>
              </div>
          </div>
        )
}

export default App;
