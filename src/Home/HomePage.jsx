import React from 'react';
import Slider from './Slider';
import Location from './Location';
import Parallax from './Parallax'

const HomePage = ()=>{

    let id =300

    const parallax_list = [
        {
            title : 'About Us',
            text : 'For us, its not just about bringing you good food from your favourite restaurant.Its about making connection,which is why we sit down with the chefs,Dreaming of menus that will arrieve fresh and full of flavour.Try us!',
            link : 'Learn More',
            class_name : 'parallax',
            button_class : 'btn_pink'
        },
        {
            title : 'Careers',
            text : 'Hungry to make difference? There is always a room at our table.Pull up the sit',
            link : 'Join Us',
            class_name : 'parallax parallax_2',
            button_class : 'btn_pink'
        },
        {
            title : 'Press',
            text : 'We have become one of the leading players in 15 markets world wide across Europe,Canada,Austrelia,America and Asia.Find out why the press is buzzing about our work',
            link : 'See the latest',
            class_name : 'parallax parallax_1',
            button_class : 'btn_pink'
        },
        {
            title : 'Contact',
            text : 'Its food lovers like you who inspire us to do what we do.Your comments,ideas and questions push us to go us extra mile,everytime.So drop us a line!',
            link : 'Get in touch',
            class_name : 'parallax bg_pink',
            button_class : 'btn_white'
        }
    ]


    return (
        <>
        <Slider/>
        <Location/>
        {
            parallax_list.map((content)=>{
                return <
                    Parallax
                    key = {id++}
                    title = {content.title}
                    text = {content.text}
                    link = {content.link} 
                    class_names = {content.class_name}
                    button_class = {content.button_class}
                    />
            })
        }
        </>
    );
}

export default HomePage;