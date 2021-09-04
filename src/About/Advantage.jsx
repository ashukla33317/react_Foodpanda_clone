import React from 'react';

const Advantage = (props)=>{
    return (
        <div className="advantage">
            <img src={props.path} alt="no internet" />
            <div>
            <h3>{props.title}</h3>
            <p>{props.numbers}</p>
            </div>
        </div>
    )
}

export default Advantage;