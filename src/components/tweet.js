import React from 'react';

function Tweet({myName,tweet}) {
    return(
        <div className="tweet">
            <div className='photo-id'>
            <img id='tweetImage' src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png" alt="" width='30px'/>
            <h1>{myName}</h1>
            </div>
            <p>{tweet}</p>
            
        </div>
    )
}

export default Tweet