import React from 'react'

function Message(props) {
    return (
        <div className="message-container">
            <div className="user-holder">
                <img src={props.pfp} alt="Hmmm"></img>
                <p className="username">{props.username} <span>{props.timestamp}</span></p>
            </div>
            <div className="message-content">
                {props.children}
            </div>
        </div>
    )
}

export default Message;
