import React from 'react';
import Scores from './Scores'

const Parallax = () =>{

    let id = 700;

    const scores_list = [
        {
            number : '8000+',
            title : 'EMPLOYEES'
        },
        {
            number : '12',
            title : 'LOCATIONS'
        },
        {
            number : '50+',
            title : 'NATIONATILIES'
        },
        {
            number : '35+',
            title : 'LANGUAGES SPOKEN'
        }
    ];

    return(
        <div id="career_parallax">
            <h1 id="career_h1">A WORLD OF OPPORTUNITIES</h1>
            <div id="career_numbers">
                {
                    scores_list.map((score)=>{
                        return <Scores
                            key = {id++}
                            title = {score.title}
                            numbers = {score.number}
                        />
                    })
                }
            </div>
        </div>
    );
}

export default Parallax