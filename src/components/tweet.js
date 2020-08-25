import React from 'react';

function Tweet({myName,tweet}) {
    return(
        <div className="tweet">
            <h1>{myName}</h1>
            <p>{tweet}</p>
        </div>
    )
}

export default Tweet