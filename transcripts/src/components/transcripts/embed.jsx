import React from 'react'
import Field from './fields';
import '../../embed.css';

function Embed(props) {

    return (
        <div className="embed-container">
            <div className="base-embed">
                <div className="embed-content">
                    <h3 className="title">{props.title}</h3>
                    <p className="description">{props.description}</p>

                    <div className="fields">
                        {props.fields.map((field) => {
                            return <Field title={field.title} content={field.content}></Field>
                        })}
                    </div>
                </div>
                <div style={{backgroundColor: `#${props.color}`}} className="embed-sidebar"></div>
            </div>
        </div> 
        
    )
}

export default Embed;