import React from 'react';
import ABOUT_INTRO from './ABOUT_INTRO';
import How from './How';
import Mission from './Mission';
import Map from './Map';

const About = ()=>{
    return (
        <>
            <ABOUT_INTRO/>
            <p id='about_para'>For us, it's not just about bringing you good food from your favourite restaurants. It's about making a connection, which is why we sit down with the chefs, dreaming up menus that will arrive fresh and full of flavour. Try us!</p>
            <How/>
            <Mission/>
            <Map/>
        </>
    );
}

export default About;