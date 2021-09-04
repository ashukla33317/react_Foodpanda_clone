import React from 'react';

const ABOUT_LINK = (props)=>{

    const hover_event = ()=>{
        props.hover_event_function(props.index)
    }

    return (
        <div className="about_links" onMouseOver={hover_event}>
            <a href='/'>
            <img src={props.img_path} alt="images" />
        </a>
        <h3>{props.link_title}</h3>
        </div>
    );
}

export default ABOUT_LINK