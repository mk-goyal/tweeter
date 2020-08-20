import React from 'react';

function Tweet({tweet}) {
    return(
        <div className="tweet">
            <h1>Mukesh Goyal</h1>
            <p>{tweet}</p>
        </div>
    )
}

export default Tweet