// import { props } from 'bluebird';
import React from 'react';

const Scores = (props)=>{
    return (
        <div>
            <h1>{props.numbers}</h1>
            <p>{props.title}</p>
        </div>
    );
}

export default Scores;