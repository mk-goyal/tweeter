import React, { useState } from 'react';
import Tweet from './tweet'


function Tweets() {
    const [tweetData, setTweetData] = useState({
        myName : 'Mukesh Goyal',
        twits : [
            {
                twit:'Hey, am trying to find some little shelf (or something) that can be attached to the top of my monitor where I can put decorative trinkets, small toys etc. Struggling to google this though, any ideas?'
            },
            {
                twit:'Or is that the idea of react-testing-library, that we test the entire component, including the store and mock at the point of fetch calls?'
            },
            {
                twit: 'Are you testing code that is already written? Do you know if the code works, and you are only creating a regression test?'
            },
            {
                twit:'Are you testing code that is already written? Do you know if the code works, and you are only creating a regression test?'
            }
        ]
    })
    
    return(
        <div className="home">
            <h1>{tweetData.myName}</h1>

            {
        tweetData.twits.map(twit => 
            { return <Tweet myName={tweetData.myName} tweet={tweetData.twits.twit}/>}
            )
    }
            

        </div>
    )
}

export default Tweets