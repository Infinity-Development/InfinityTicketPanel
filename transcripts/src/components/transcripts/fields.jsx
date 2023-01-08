import React from 'react'

function Fields(props) {
    return (
        <div className="embed-field-container">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Fields;