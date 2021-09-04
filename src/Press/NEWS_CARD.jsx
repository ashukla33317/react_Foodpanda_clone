import React from 'react';

const NEWS_CARD = (props) =>{
    return (
        <div className="news_card">
            <img src={props.path} alt="news images" />
            <h3>
                <a href="/">{props.link}</a>
            </h3>
            <p>
                {props.para_text}
            </p>
        </div>  
    );
}

export default NEWS_CARD;