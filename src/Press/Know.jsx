import React from 'react';
import KNOW_CARD from './KNOW_CARD';


const Know = ()=>{

    let id = 1000;

    const know_list = [
        {
            title : 'Kneen to learn more about us?',
            link : 'Download our Backgrounder'
        },
        {
            title : 'Got media query',
            link : 'Get in touch with out press team'
        },
        {
            title : 'Join the panda family',
            link : 'Visite our career site'
        }
    ];

    return (
        <div id="know">
            {
                know_list.map((card)=>{
                    return <KNOW_CARD key={id++} link={card.link} title={card.title}/>
                })
            }
        </div>
    );
}

export default Know;