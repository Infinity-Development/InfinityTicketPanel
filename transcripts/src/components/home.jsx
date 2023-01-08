import React, { useState } from 'react'
import {Redirect} from 'react-router-dom';
import '../home.css';

function HomePage() {

    let [query, setQuery] = useState("");
    let [redirect, setRedirect] = useState();

    let search = (e) => {
        e.preventDefault();
        setRedirect(`/t/${query}`);
    };

    if(redirect) return <Redirect to={redirect}></Redirect>

    return (
        <div>
            <div className="center">
                <h1 className="heading">Infinity Bots Ticket Panel</h1>
                <p>Enter a ticket ID to see the transcript.</p>
                <div className="input-container">
                    <form onSubmit={search}>
                        <input placeholder="Ticket ID" onChange={(e) => setQuery(e.target.value)} value={query} className="home-input"></input>
                        <button className="submit-transcript" type="submit">Search!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomePage; 
