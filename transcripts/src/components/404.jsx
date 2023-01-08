import React from 'react'
import '../home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

function HomePage() {

    return (
        <div>
            <div className="center">
               <h2>4<span><FontAwesomeIcon icon={faGhost}/></span>4</h2>
               <h3>Client Error: Page not found</h3>
               <p>Whatever you're doing, you're doing it wrong, You should probably go home kid. Cause you clearly don't know what you're looking for.</p>
            </div>
        </div>
    )
}

export default HomePage; 
