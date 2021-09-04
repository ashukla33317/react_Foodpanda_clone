import React from 'react';
import Advantage from './Advantage';
import city from '../images/city.svg';
import bike from '../images/bike.svg';
import mobile from '../images/mobile.svg';
import globe from '../images/globe.svg';



const Map = ()=>{



    let id=600;
    const advantages = [
        {
            path : globe,
            feature : 'countries',
            numbers : '12' 
        },
        {
            path : mobile,
            feature : 'Restaurent',
            numbers : '115,000+'
        },
        {
            path : bike,
            feature : 'Bikes',
            numbers : '80,000+'
        },
        {
            path : city,
            feature : 'Cities',
            numbers : '400+'
        }
    ];

    return (
        <div id="map">
            <h1>Where we are</h1>
           <div id="map_img"></div>
            <div id="map_advantage">
            {
                advantages.map((advantage)=>{
                    return (
                        <Advantage
                        key = {id++}
                        path = {advantage.path}
                        title = {advantage.feature}
                        numbers = {advantage.numbers}
                        />
                        );
                })
            }
            </div>
        </div>
    )
}

export default Map;