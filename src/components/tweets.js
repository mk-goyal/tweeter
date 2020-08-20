import React from 'react';
import Tweet from './tweet'


function Tweets({tweet}) {
    return(
        <div className="home">
            <h1>tweets</h1>
            <Tweet tweet={tweet}/>
            <Tweet tweet={tweet}/>
            <Tweet tweet={tweet}/>
            <Tweet tweet={tweet}/>

        </div>
    )
}

export default Tweets