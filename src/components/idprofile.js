import React from 'react';
import './idprofile.css'

function IdProfile({userName,bio,n}) {
    
    return(
        <div className="myProfile">
            <h2>{userName}</h2>
            <h5>{n} {n>1 ? "Tweets" : "Tweet"}</h5>
            <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png" alt=""/>
            <h6>@{userName}2058</h6>
            <p>{bio}</p>
        </div>
    )
}

export default IdProfile