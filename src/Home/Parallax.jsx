import React from 'react'

const Parallax = (props) =>{

    const class_names = props.class_names

    return (
        <div className={class_names}>
            <h1>{props.title}</h1>
            <h3>{props.text}</h3>
            <a href="/" className={props.button_class}>{props.link}</a>
        </div>
    )
}


export default Parallax