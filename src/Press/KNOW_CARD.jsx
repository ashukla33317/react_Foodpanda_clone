import React from 'react';

const KNOW_CARD = (props) =>{
    return (
        <div className="know_card">
            <h3>{props.title}</h3>
            <a href="/">{props.link }</a>
        </div>
    );
}

export default KNOW_CARD;